<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import axios from "axios";
import router from '@/router';
import { useRoute } from 'vue-router';

const useRouter = useRoute();

const updateCart = async (event) => {
  await axios.put(`http://localhost:8080/`, {
    user_id: event.target.user_id.value,
    product_id: event.target.product_id.value,
    order_amount: event.target.order_amount.value
  });
  router.push(`/cart/${event.target.user_id.value}`);
};
</script>

<template>
  <div>
    <form @submit.prevent="updateCart">
      <input type="hidden" name="user_id" v-bind:value="useRouter.query.user_id"><br>
      <input type="hidden" name="product_id" v-bind:value="useRouter.query.product_id"><br>
      order_amount: <input type="text" name="order_amount" v-bind:value="useRouter.query.order_amount"><br>
      <button type="submit">Submit</button>
    </form>
  </div>
  <RouterView />
</template>
