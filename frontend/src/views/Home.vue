<template>
  <div id="home">
    <h1>This is a Home page</h1>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>
