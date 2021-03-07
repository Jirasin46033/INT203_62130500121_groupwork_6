// const app ={
//     data(){
//         return{
//             msg: 'Hello Vue 3'
//         }
//     }
// }

// Vue.createApp(app).mount('#app')

const app = {
    data(){
        return{
            msg:'Hello  Vue3',
            show:true,
            url: 'https://www.google.com/' 
        }
    },
    created(){
        console.log('created');
    },
    updated(){
        console.log('updated');
    }
};

// const app ={
//     data(){
//         return{
//             name: 'Jirasin',
//             text1: 'Hello guys, Nice to meet you!!',
//             photos: 9,
//             friends: 407,
//             imgupper: 'https://wallpaperaccess.com/full/1931304.jpg'
//         }
//     }
// }

var mountedApp = Vue.createApp(app).mount('#app');