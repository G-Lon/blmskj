/*
* description 大文档上传组件
* @params {Object} option：链接(可选)，目前支持single:ture单个文件
                                      FileFilter:'jpg,png,gif'：文件类型
                                      IsShowFoldeButton:'控制显示文件夹上传
* @params {Function} success：参数(必填，成功回调)

* **/

let Uploads = {};
Uploads.install = function (Vue) {

    Vue.prototype.$uploads = function (option, success) {
        let indexPage = '/index.htm';
        let isSingle = false;

        /** edit by guolong  up6默认为显示文件夹*/
        // let obj = {
        //     FileFilter: '*',
        //     IsShowFoldeButton: '',
        // }

        /** edit by guolong  up6默认不显示文件夹*/
        let obj = {
            FileFilter: '*',
            IsShowFoldeButton: false,
        }


        if (typeof option === 'function') {
            success = option;
        } else { //传了第一个参数的话
            isSingle = option.single;
            obj = Object.assign(obj, option);
            if (isSingle) {
                indexPage = '/index-single.htm';
            }

        }

        let _this = this;

        let oDiv = document.createElement('div');
        let oBody = document.getElementsByTagName('body')[0];
        let vHerf = webConfig.up6Server + indexPage + `?FileSizeLimit=${JSON.parse(sessionStorage['PDMConfig']).FileUploadLengthLimit * 1024||20561920}`;
        //let vHerf = webConfig.up6Server+indexPage+`?FileSizeLimit=2056192000`;
        for (let key in obj) {
            if (key !== 'single' && obj[key] !== '') {
                vHerf += `&${key}=${ obj[key]}`
            }
        }
        oDiv.className = 'alert-box p-20';
        oDiv.id = 'file-view';
        oDiv.style.paddingBottom = '2px';
        // oDiv.style.width = '100%';
        oDiv.style.overflowY = 'auto';


        oDiv.innerHTML =
            `<div class="file-tips" style="top: auto;margin-top: -20px;margin-left: -20px;"></div>
<iframe id="iframe" width="460px" height="480px" frameborder=0 name="showHere" scrolling=auto src=${vHerf}></iframe>
                
            `;

        oBody.appendChild(oDiv);
        let files = []; //每次打开新的页面上传的内容
        let isUploadOver = false; //是否上传完毕
        function getFiles(value) {

            let fileName = '',
                extension = '';
            if (value.files) { //文件夹
                fileName = value.nameLoc;
                extension = '';
            } else {
                let fileNameArr = value.nameLoc.split('.');
                extension = '.' + fileNameArr.pop();
                fileName = fileNameArr.join('.');
            }
            return {

                FileName: fileName, //文件名或者文件夹名
                IsFolder: value.files ? true : false, //是否是文件夹
                SourceId: value.id,
                FilePath: value.pathRel, //文件路径
                FileSize: value.lenLoc, //文件大小
                Extension: extension, //文件扩展名
                UploadDate: new Date(), //上传日期
                Uploader: JSON.parse(sessionStorage['basicInfo']).AliasName, //上传人
                UploaderId: JSON.parse(sessionStorage['basicInfo']).UserId, //上传人Id
            }
        }

        function receive(e) {
            let nowFile = JSON.parse(e.data);

            if (nowFile.queueFilesCount == 0 && nowFile.queueWaitCount == 0 && nowFile.queuePostCount == 0) {
                //所有队列数据为空
                isUploadOver = true;
            } else {
                isUploadOver = false;
            }

            if (nowFile instanceof Array) {
                let newFile1 = [];

                return;
                /*
                nowFile.map(value => {
                    getFiles(value)
                })
                if(isSingle){
                    files[0]=nowFile;
                }else{
                    files.push(...newFile1)
                }
                */

            } else {

                if (nowFile.deleted) {
                    for (let i = 0; i < files.length; i++) {
                        if (files[i].SourceId == nowFile.id) {
                            files.splice(i, 1);
                            break;
                        }
                    }
                    return;
                }

                if (isSingle) {
                    //若上传已完成则加入到文件队列
                    if (nowFile.complete) {
                        files[0] = (getFiles(nowFile));
                    }
                } else {
                    if (nowFile.complete) {
                        files.push(getFiles(nowFile));

                    }
                }


            }
        }

        //检查上传文件
        function checkUploadFile() {
            if (!files.length) {
                _this.$message({
                    showClose: true,
                    message: '请先上传文件',
                    type: 'error'
                });
                return false;
            }
            if (!isUploadOver) {
                _this.$message({
                    showClose: true,
                    message: '文件暂未全部上传完成',
                    type: 'error'
                });
                return false;
            }

            return true;
        }
        layer.open({
            type: 1,
            title: '上传',
            shade: 0.1,
            area: ['490px', '600px'],
            btn: ["确认", "取消"],
            content: $("#file-view"),
            zIndex: 10000,
            success: function () {
                window.addEventListener('message', receive, false);
            },
            yes: function (index) {
                if (checkUploadFile()) {
                    layer.close(index);
                    success(files);
                }
            },
            end: function () {
                window.removeEventListener('message', receive);
                oBody.removeChild(oDiv);
            }
        })

    }

}

export default Uploads
