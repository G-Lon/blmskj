<template>
  <div class="demo">
    <checkBoxInput :checkBoxInputData="checkBoxInputData"></checkBoxInput>
  </div>
</template>

<script>
import checkBoxInput from '@/demo/components/checkBoxInput'
export default {
  components: {
    checkBoxInput
  },
  data() {
    return {
      checkBoxInputData: [
        {name: '一线', checked: false, needInputValue: true, inputValue: '', unit: '%'},
        {name: '二线', checked: false, needInputValue: true, inputValue: '', unit: '元'},
        {name: '三线', checked: true, needInputValue: true, inputValue: '', unit: ''},
      ]
    }
  },

  created() {
    console.log(333333);
  },

  methods: {
    
  },

}
</script>

<style lang="" scope>
    
</style>