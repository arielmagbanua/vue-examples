const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      event.preventDefault();
      console.log('submitted');
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter + num;
    }
  }
});

app.mount('#events');
