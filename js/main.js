let app = new Vue({
    el: '#app',
    data: {
        posts: [],
        page: 'index',
        registerForm:{
            name: null,
            login: null,
            password: null
        }
    },
    mounted(){
        this.getAllPosts()
    },
    methods: {
        getAllPosts() {
            fetch('http://37.46.133.40:5000/api/post')//API.JS
                .then(res => res.json())
                .then(data => {
                   this.posts = data
                }) //Обещания
        },
        register(){
            fetch('http://37.46.133.40:5000/api/register', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.registerForm)
            })
        }
    }

})