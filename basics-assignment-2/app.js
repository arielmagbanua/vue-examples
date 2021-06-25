const app = Vue.createApp({
  data() {
    return {
      paragraph1: '',
      paragraph2: ''
    }
  },
  methods : {
    showAlert() {
      return alert('Hello Alert!');
    },
    onParagraphKeyDown(event) {
      this.paragraph1 = event.target.value;
    },
    onEnterKeyDown(event) {
      this.paragraph2 = event.target.value;
    },
  }
});

app.mount('#assignment');
