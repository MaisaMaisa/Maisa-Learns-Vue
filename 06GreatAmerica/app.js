const app = Vue.createApp({
    data () {
        return {
            inputClass: '',
            paragraphVisible: true,
            inputBackgroundColor: ''
        }
    },
    computed:{
        paraClasses(){
            return {
                mood1: this.inputClass === 'passionate',
                mood2: this.inputClass === 'fun',
                mood3: this.inputClass === 'bright',
                mood4: this.inputClass === 'natural',
                mood5: this.inputClass === 'serene',
                mood6: this.inputClass === 'spiritual',
                visible: this.paragraphVisible,
                hidden: !this.paragraphVisible
            }
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphVisible = !this.paragraphVisible;
        }
    }
});

app.mount('#assignment');