const app= Vue.createApp({
    data(){
        return{
            counter: 0,
            messageOne: 'Not there yet',
            messageTwo: 'Too much!',
            goldenMessage: 'is the golden number!',
            goldenImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FqfeImfxz0BnH2%2Fgiphy.gif&f=1&nofb=1&ipt=8c62b3b6cfbd3ec7ba2899bdee350adc1df0e922a9514a8746b41ca8f8a9c231&ipo=images'
        }
    },
    watch: {
        counter(){
            const that = this;
            setTimeout(function(){
                that.counter = 0;
            }, 120000);
        }
    },
    computed: {
        showText() {
            if(this.counter < 37){
                return this.messageOne;
            } else if (this.counter === 37) {
                return this.counter + ' ' + this.goldenMessage;
            } else {
                return this.messageTwo;
            }
        }
    },
    methods: {
        add(num){
            this.counter = this.counter + num;
        }
    }

})

app.mount("#assignment")