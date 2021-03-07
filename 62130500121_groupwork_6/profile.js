const constraints = {
    firstname:{
        presence: true,
    },
    lastname:{
        presence: true,
    },
    gender:{
        presence: true,
    },
    age:{
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    email:{
        presence: true,
        email: true
    },
    phone:{
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        }, 
    },
    
}



const app ={
    data(){
        return{
            // name: 'Jirasin',
            // text1: 'Hello guys, Nice to meet you!!',
            photos: 9,
            friends: 407,
            imgupper: 'https://wallpaperaccess.com/full/1931304.jpg',
            imgprofile: 'images/me.jpg',
            firstname:null,
            lastname:null,
            age:null,
            gender:null,
            email:null,
            phone: null,
            errors: null,

        }
    },
    methods: {
        checkForm(){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,},
                                    constraints)
            if(!this.errors){
                alert("ํYour profile is updated successfully.")
            }
        }
    }
}

// const app =Vue.createApp({
//     data() {
//         return {
//             firstname: null,
//             lastname: null,
//             age: null,
//             gender: null,
//             email: null,
//             phone: null,
//             errors: null,
//             photos: 9,
//             friends: 407,
//             imgupper: 'https://wallpaperaccess.com/full/1931304.jpg',
//             imgprofile: 'images/me.jpg'
//         }
//     },
    // methods: {
    //     checkForm(){
    //         this.errors = validate({firstname: this.firstname,
    //                                 lastname: this.lastname,
    //                                 age: this.age,
    //                                 gender: this.gender,
    //                                 email: this.email,
    //                                 phone: this.phone,},
    //                                 constraints)
    //         if(!this.errors){
    //             alert("Registered successfully.")
    //         }
    //     }
    // }
// })



var mountedApp = Vue.createApp(app).mount('#app');
// app.mount('#app')