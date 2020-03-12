<template>
    <div class="mt-4 mb-4 flex-center">
        <div class="box card" v-for="(item,index) of items" :key="index">
            <img class="img-card" src="item.image" alt="Card image cap">
            <div class="">
            <div class="dark black-box flex-center">
                <span>item.title</span>
            </div>
            <div class="grey grey-box flex-center">
                <small class=""><b>item.description</b></small>
            </div>     
            </div>
            <div class="btn-box flex-center">
            <a class="link" type="button" href="#">Buy</a>
            </div>      
        </div>
    </div>
</template>

<script>
export default {
//    name: "home",
    data() {
        return {
            items: [
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
                { title:"Nutela", description:"10€", image:"https://wouldbechef.be/wp-content/uploads/2019/02/Nutella.jpg"}, 
            ]
        }
    }
}
</script>

<style>

</style>
  