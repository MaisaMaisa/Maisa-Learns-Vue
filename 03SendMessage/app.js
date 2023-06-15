const app = Vue.createApp({
    data(){
        return{
            input: '',
            confirmedInput: '',
            placeholderText1: 'write a demo message below',
            placeholderText2: 'write a final message below + press enter'
        }
    },
    methods: {
        alertMade(){
            alert('dont type too fast!');
        },
        showInput(event){
            this.input = event.target.value;
        },
        confirmInput(){
            this.confirmedInput = event.target.value;
        }
    }
})

app.mount('#assignment');