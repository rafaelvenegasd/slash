<template>
    <div class="mt-4 mb-4 d-flex center font-bold container">
        <div class="row container">
            <div class="box col-sm-3 col-md-5 col-lg-3" v-for="(item, i) of items" :key="i">
                <img class="img-card" :src="item.image" alt="Card image cap">
                <div class="bg-black white black-box d-flex center ">
                    <span>{{item.title}}</span>
                </div>
                <div class="grey grey-box d-flex center font-bold">
                    <small class=""><b>{{item.description}}</b></small>
                </div>     
                <div class="btn-box bg-black d-flex center font-bold">
                    <a class="link" type="button" id="show-modal" @click="showModal()">Buy</a>
                </div>      
            </div>
        </div>
        <div v-if="modal" class="modal-mask center d-flex">
            <div class="modal-wrapper center d-flex">
                <div class="modal-container center font-bold">
                    <div class="modal-header center d-flex justify-content-center">
                        <slot name="header">
                        Do you want to buy it?
                        </slot>
                    </div>
                    <div class="modal-body justify-content-center col-sm-12">
                        <slot name="body" class="d-block">
                            <input class="form-control" type="text" name="username" id="username" placeholder="Username">
                            <input class="form-control" type="password" name="password" id="password" placeholder="Password">
                        </slot>
                    </div>
                    <div class="d-flex without-borders">
                        <div class="d-flex center font-bold grey footer-btn without-borders">
                            <a class="link" type="button" id="show-modal" @click="showModal()">Cancel</a>
                        </div>
                        <div class="d-flex center font-bold btn-box bg-black footer-btn without-borders">
                            <a class="link " type="button" id="show-modal" @click="showModal()">Confirm</a>
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