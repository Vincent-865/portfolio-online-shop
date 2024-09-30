<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios"
import { onMounted, ref } from 'vue';

const cartData = ref([]);

const getAllCart = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/TEST`);
    cartData.value = response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

const addCart = async (event) => {
  await axios.post(`http://localhost:8080/`, {
    user_id: event.target.user_id.value,
    product_id: event.target.product_id.value,
    order_amount: event.target.order_amount.value,
    created_date: event.target.created_date.value,
    modified_datetime: event.target.modified_datetime.value
  });
};

onMounted(() => {
  getAllCart();
});

</script>

<template>
  <!-- <div>
    <AboutView></AboutView>
    <form @submit.prevent="addCart">
      user_id: <input type="text" name="user_id"><br>
      product_id: <input type="text" name="product_id"><br>
      order_amount: <input type="text" name="order_amount"><br>
      created_date: <input type="text" name="created_date"><br>
      modified_datetime: <input type="text" name="modified_datetime"><br>
      <button type="submit">Submit</button>
    </form>
    <div v-for="cart in cartData">
      <p>user_id: {{cart.user_id}}</p>
      <p>product_id: {{cart.product_id}}</p>
      <p>order_amount: {{cart.order_amount}}</p>
      <p>created_date: {{cart.created_date}}</p>
      <p>modified_datetime: {{cart.modified_datetime}}</p>
      <hr>
    </div>
  </div> -->

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <RouterView />
</template>
