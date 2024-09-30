
import { RouterLink, RouterView, useRoute } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios"
import { onMounted } from 'vue';
import router from './router';

const getAllCart = async () => {
  try {
    const response = await axios.get(`localhost:8080/TEST`);
    console.log("Response: ", response);
  } catch (error) {
    console.log("Error: ", error);
  }
  useRoute
}

onMounted(() => {
  getAllCart();
});
