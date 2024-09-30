<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import axios from "axios";
import router from '@/router';
import { useRoute } from 'vue-router';

const useRouter = useRoute();

const addCart = async (event) => {
  await axios.post(`http://localhost:8080/`, {
    user_id: event.target.user_id.value,
    product_id: event.target.product_id.value,
    order_amount: event.target.order_amount.value,
  });
  router.push(`/cart/${event.target.user_id.value}`);
};
</script>

<template>
  <button @click="router.push(`/cart/${useRouter.query.user_id}`)">Back</button>
  <div>
    <form @submit.prevent="addCart">
      user_id: <input type="text" name="user_id"><br>
      product_id: <input type="text" name="product_id"><br>
      order_amount: <input type="text" name="order_amount"><br>
      <button type="submit">Submit</button>
    </form>
  </div>
  <RouterView />
</template>
