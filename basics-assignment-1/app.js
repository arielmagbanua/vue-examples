const app = Vue.createApp({
  data() {
    return {
      name: 'John Doe',
      age: 30,
      image: 'https://images.unsplash.com/photo-1561883088-039e53143d73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  },
  methods : {
    randomNumber() {
      return Math.random();
    },
    ageIn(years) {
      return this.age + years;
    }
  }
});

app.mount('#assignment');
