const app = Vue.createApp({
    data(){
        return{
            myName: 'Maisa',
            myAge: 28,
            randomNumber: '0',
            imageLink: 'https://melmagazine.com/wp-content/uploads/2022/05/Big_Heart-1024x427.jpg',
            randomText: 'write me a message here'
        }
    },
    methods: {
        calculateAge(){
            return this.myAge + 5;
        },
        randomNumber(){
            return Math.random();
        }
    }
})

app.mount('#assignment');
