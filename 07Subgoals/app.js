const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [],
      enteredSubGoalValue: '',
      subgoals: [] 
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      this.enteredGoalValue = ''
    },
    removeGoal(idx){
      this.goals.splice(idx, 1);
    },
    addSubGoal() {
      this.subgoals.push(this.enteredSubGoalValue);
      this.enteredSubGoalValue = ''
    },
  }
});

app.mount('#user-goals');

// if(true) {}