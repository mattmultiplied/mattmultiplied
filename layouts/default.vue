<template>

  <div :class="mode ? 'blue-mode' : 'pink-mode'">
    <div class="absolute w-full">
      <nav class="container mx-auto px-4 py-8 lg:px-16 lg:pt-16 flex flex-col lg:flex-row">
        <div class="mx-auto lg:mx-0 mb-8 flex flex-col md:flex-row">
          <div class="block md:inline-block text-center">
            <div class="transform ease-in-out hover:scale-110 duration-150 inline-block mx-auto">
              <img alt="Matt Wheeler - mattmultiplied" v-if="mode" class="w-24 h-24 mx-auto cursor-pointer" :class="{ 'animate-spin' : spinActive, 'hover:animate-pulse' : !spinActive }" @click="spinActive = !spinActive" src="~assets/images/matt_headshot_work.png">
              <img alt="Matt Wheeler - mattmultiplied" v-else-if="!mode" class="w-24 h-24 mx-auto cursor-pointer" :class="{ 'animate-spin' : spinActive, 'hover:animate-pulse' : !spinActive }" @click="spinActive = !spinActive" src="~assets/images/matt_headshot_life.png">
            </div>
          </div>
          <div class="flex my-auto -mt-4 md:mt-2">
            <nuxt-link v-if="mode" to="/life" :class="mode ? 'bg-pink-600' : 'bg-indigo-800'" class="md:-ml-6 block md:inline-block text-3xl md:text-4xl font-bold text-white uppercase px-3 py-1 sauce-sans transform -rotate-3 tracking-widest ease-in-out hover:scale-110 duration-150">Matt Wheeler</nuxt-link>
            <nuxt-link v-else-if="!mode" to="/" :class="mode ? 'bg-pink-600' : 'bg-indigo-800'" class="md:-ml-6 block md:inline-block text-3xl md:text-4xl font-bold text-white uppercase px-3 py-1 sauce-sans transform -rotate-3 tracking-widest ease-in-out hover:scale-110 duration-150">Matt Wheeler</nuxt-link>
          </div>
        </div>
        <ul class="text-center text-white inline uppercase text-base font-bold tracking-widest mx-auto lg:mx-0 lg:ml-auto">
          <li class="block md:inline mb-6 md:mb-0 mx-auto"><nuxt-link to="/" class="inline-block transform hover:-rotate-2 ease-in-out duration-150">Work</nuxt-link></li>
          <li class="block md:inline ml-0 md:ml-12 mx-auto"><nuxt-link to="/life" class="inline-block transform hover:-rotate-2 ease-in-out duration-150">Life</nuxt-link></li>
        </ul>
      </nav>
      
    </div>
    <Nuxt />

    <ul class="flex sm:hidden text-white w-full flex-row uppercase text-base font-bold tracking-widest mx-auto lg:mx-0 lg:ml-auto fixed bottom-0 mobile-nav">
        <li class="md:mb-0"><nuxt-link to="/" class="inline-block px-4 py-2 text-pink-600 bg-white">Work</nuxt-link></li>
        <li class="block ml-auto"><nuxt-link to="/life" class="inline-block px-4 py-2 text-indigo-800 bg-white">Life</nuxt-link></li>
      </ul>
  </div>

</template>


<script>
export default {
  
  data() {

    return {

      mode: null,
      spinActive: false

    }

  },

  methods: {

    checkPage: function() {

      if(this.$nuxt.$route.path == "/") {

        this.mode = true

      } else if (this.$nuxt.$route.path == "/life") {

        this.mode = false

      }

    },

  },
  
  mounted() {

    this.checkPage();
      
  },

  watch:{
    $route (to, from){
        this.checkPage();
    }
  } 

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
  @apply text-lg leading-relaxed;
}

@screen md {
  p {
    @apply text-xl;
  }
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

.pink-mode ul.mobile-nav .nuxt-link-active {
  @apply bg-white text-indigo-800;
}

.blue-mode ul.mobile-nav .nuxt-link-active {
  @apply bg-white text-pink-600;
}

.pink-mode ul.mobile-nav .nuxt-link-exact-active {
  @apply bg-indigo-800 text-white;
}

.blue-mode ul.mobile-nav .nuxt-link-exact-active {
  @apply bg-pink-600 text-white;
}

</style>
