<template>
  <div>
    <div id="div1" style="height: 500px">
        <p></p>
    </div>
    <button @click="change">获取内容</button>
    <div class="wangEditor-container">
        <div class="wangEditor-txt">
          <div v-html="text" style="height: 300px"></div>
        </div>
    </div>
  </div>

</template>

<script>
// import '../wangeditor/js/lib/jquery-2.2.1.js'
// import '../wangeditor/js/lib/jquery-1.10.2.min.js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      editor: null,
      text: '',
      editorMenuConfig: [
          'bold',
          'italic',
          'head',
          '|',
          'underline',
          'strikethrough',
          'alignleft',
          'aligncenter',
          'alignright',
          '|',
          'quote',
          'unorderlist',
          'orderlist',
          '|',
          'link',
          'img',
          'insertcode',
          'table',
          '|',
          'forecolor',
          'bgcolor'
      ]
    }
  },
  mounted() {
    console.log(window.jQuery);
    this.editorInit()
  },
  methods: {
    editorInit() {
      let editor = new this.wangEditor('div1');
      editor.config.menus = this.editorMenuConfig;
      editor.create();
      // editor.$txt.html('<table><thead><tr><th>测试</th><th>测试222</th><th>测试</th></tr></thead><tbody><tr><td>1</td><td>2</td><td>3</td></tr></tbody></table>');
      // eslint-disable-next-line vue/no-mutating-props
      this.editor = editor;
    },
    change() {
      var editor = this.editor;
    // 获取编辑器区域完整html代码
    var html = editor.$txt.html();
    this.text = html
    console.log(html)
    // // 获取编辑器纯文本内容
    // var text = editor.$txt.text();
    
    // // 获取格式化后的纯文本
    // var formatText = editor.$txt.formatText();
    }
  }
}
</script>

<style scoped>
@import '../wangeditor/css/wangEditor.min.css';
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
