import View from './index.vue';

View.install = function (Vue) {
  Vue.component(View.name, View);
};

export default View;