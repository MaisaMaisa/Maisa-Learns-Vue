const app = Vue.createApp({
    data() {
        return {
            smallGoalA: 'play forever',
            smallGoalB: 'do whatever',
            vueLink: 'https://www.youtube.com/watch?v=mpgbZwEKVeI'
        };
    },
    methods: {
        outputSmallGoal () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.smallGoalA;
            } else {
                return this.smallGoalB;
            }
        }
    }
});

app.mount('#user-goal');
