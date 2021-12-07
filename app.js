let app = new Vue ({
	el:"#app",
	data(){
		return{
			title_error:"404 Not Found",
			title_error_messages:"Opps! Something went Wrong.",
			error_messages:"The page you are looking for might be removed or is temporaly unavalible.",
			button_message:"Back to home page",
			img:"img/Technical difficulties.jpg",
			value:true
		}
	},
	methods:{
		changeColor(){
			// this.value = !this.value;
			this.value = !this.value
		}
	}
})