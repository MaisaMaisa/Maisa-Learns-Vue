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
                mood1: this.inputClass === 'great',
                mood2: this.inputClass === 'florida',
                mood3: this.inputClass === 'emo',
                mood4: this.inputClass === 'glam',
                mood5: this.inputClass === 'straight',
                mood6: this.inputClass === 'gay',
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