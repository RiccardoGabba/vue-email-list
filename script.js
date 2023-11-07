const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [],
            result: '',
        }
    },
    methods: {
        //non funzionava perchè la variabile non era dichiarata
        //getEmails() {
        //}  
    },
    mounted() {
        for (var i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                console.log(resp.data.response);    
                this.result = resp.data.response;
                this.emails.push(this.result); 
            })
    }
} 
}).mount('#app'); 