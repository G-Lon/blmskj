<template>
  <div class="checkBoxInput-box">
    <el-card class="mb-20">
      <div slot="header">
        <b>多选与输入</b>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item, index) in checkBoxInputData" :key="'input-'+index" class="liItem">
            <div class="liContent">
              <el-checkbox v-model="item.checked" :title="item.name" @change="item.inputValue = ''">{{item.name}}</el-checkbox>
              <el-input v-if="item.needInputValue" :disabled="!item.checked" v-model="item.inputValue" maxlength="100">
                <span slot="suffix">{{item.unit}}</span>
              </el-input>
            </div>
          </li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    }
  },

  props: {
    checkBoxInputData: {
      required: true,
      type: Array,
      default: () => {
        return [
        {name: '一线', checked: false, needInputValue: true, inputValue: '', unit: '%'},
        {name: '二线', checked: false, needInputValue: true, inputValue: '', unit: '元'},
        {name: '三线', checked: true, needInputValue: true, inputValue: '', unit: ''},
      ]
      }
    }
  },

  created() {
    this.data = this.checkBoxInputData
  }
}
</script>

<style lang="less">
  .checkBoxInput-box {
    .liItem {
      .liContent {
        display: flex;
        justify-content: space-between;
        line-height: 32px;
        &:nth-child(n+1) {
          margin-top: 10px;
        }
        >label.el-checkbox {
          margin-right: 20px;
          .el-checkbox__label {
            display: inline-block;
            width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            vertical-align: text-bottom
          }
        }
      }
    }
  }
</style>