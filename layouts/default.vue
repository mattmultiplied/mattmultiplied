<template>

  <div :class="mode ? 'blue-mode' : 'pink-mode'">
    <div class="absolute w-full">
      <nav class="container mx-auto px-4 py-8 lg:px-16 lg:pt-16 flex flex-col lg:flex-row">
        <div class="mx-auto lg:mx-0 mb-8">
          <nuxt-link @click.native="checkPage" to="/" :class="mode ? 'bg-pink-600' : 'bg-indigo-800'" class="inline-block text-4xl font-bold text-white uppercase px-3 py-1 sauce-sans transform -rotate-3 ease-in-out hover:scale-110 duration-150 tracking-widest">Matt Wheeler</nuxt-link>
        </div>
        <ul class="text-center text-white inline uppercase text-base font-bold tracking-widest mx-auto lg:mx-0 lg:ml-auto">
          <li class="block md:inline mb-6 md:mb-0 mx-auto"><nuxt-link to="/" @click.native="checkPage" class="inline-block transform hover:-rotate-2 ease-in-out duration-150">Work</nuxt-link></li>
          <li class="block md:inline ml-0 md:ml-12 mx-auto"><nuxt-link to="/life" @click.native="checkPage" class="inline-block transform hover:-rotate-2 ease-in-out duration-150">Life</nuxt-link></li>
        </ul>
      </nav>
      
    </div>
    <Nuxt />
  </div>

</template>


<script>
export default {
  
  data() {

    return {

      mode: null,

    }

  },

  methods: {

    checkPage() {

      if(this.$nuxt.$route.path == "/") {

        this.mode = true

      } else if (this.$nuxt.$route.path == "/life") {

        this.mode = false

      }

    }

  },
  
  mounted() {

    this.checkPage();
      
  },

}
</script>


<style>
html {
  font-family: 'Sauce Sans';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

p {
  @apply text-xl leading-relaxed;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.sauce-sans {
    font-family: 'Sauce Sans';
}

.pink-mode .color-container {
    @apply bg-pink-600;
}

.blue-mode .color-container {
    @apply bg-indigo-800;
}

</style>

<style scoped>


/* home route and active route will show in bold as it matches / and /about */
.pink-mode nav ul .nuxt-link-exact-active {
  @apply bg-indigo-800 px-4 py-2 rotate-2;
}

.blue-mode nav ul .nuxt-link-exact-active {
  @apply bg-pink-600 px-4 py-2 rotate-2;
}

</style>
