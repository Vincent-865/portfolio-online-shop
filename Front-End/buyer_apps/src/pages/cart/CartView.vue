
<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, VueElement } from "vue";
import { useRoute } from 'vue-router';
import router from '@/router';

const cartData = ref([]);
const useRouter = useRoute();

onMounted(() => {
    getAllCart();
});

const getAllCart = async () => {
    var userId = useRouter.params.user_id;
    try {
        const response = await axios.get(`http://localhost:8080/${userId}`);
        cartData.value = response.data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

const deleteCart = async (user_id:string='', product_id:string='') => {
    try {
        await axios.delete(`http://localhost:8080/${user_id}/${product_id}`);
    } catch (error) {
        console.log("Error: ", error);
    }
    cartData.value = cartData.value.filter((cart) => cart.product_id != product_id);
}

</script>

<template>
    <RouterLink v-bind:to="`/cart/form?user_id=${useRouter.params.user_id}`">Create</RouterLink>
    <div v-for="cart in cartData">
      <p>user_id: {{cart.user_id}}</p>
      <p>product_id: {{cart.product_id}}</p>
      <p>order_amount: {{cart.order_amount}}</p>
      <p>created_date: {{cart.created_date}}</p>
      <p>modified_datetime: {{cart.modified_datetime}}</p>
      <RouterLink v-bind:to='`/cart/form/update?user_id=${cart.user_id}&product_id=${cart.product_id}&order_amount=${cart.order_amount}`'>Update</RouterLink>
      <button @click="deleteCart(cart.user_id, cart.product_id)">Delete</button>
      <hr>
    </div>
</template>