<template>
    <div class="mt-4 mb-4 flex-center container">
        <div class="row container">
            <div class="box col-sm-3 col-md-5 col-lg-3" v-for="(item, i) of items" :key="i">
                <img class="img-card" :src="item.image" alt="Card image cap">
                <div class="dark black-box flex-center">
                    <span>{{item.title}}</span>
                </div>
                <div class="grey grey-box flex-center">
                    <small class=""><b>{{item.description}}</b></small>
                </div>     
                <div class="btn-box flex-center">
                    <a class="link" type="button" id="show-modal" @click="showModal()">Buy</a>
                </div>      
            </div>
        </div>
        <div v-if="modal">
            <div class="mt-4 mb-4 flex-center container">
                <div class="row container">
                    <div>    
                        <div class="btn-box">
                            <a class="link" type="button" id="show-modal" @click="showModal()">Close</a>
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    </div>



    
</template>

<script>
export default {
    name: "App",
    data() {
        
        return {
            modal: false,
            items: [
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
            ]
        }
    }, 
    methods:{
        showModal(){
            if(this.modal == false){
                this.modal = true
            }else{
                this.modal = false
            }

        }
    }
}


</script>
  