
<template>
    <a v-if="complete == 'true'" :href="link" target="_blank" rel="noreferrer" class="mb-8 block group">
        <img :src="image" :alt="title" class="transform group-hover:rotate-1 group-hover:scale-105 ease-in-out duration-150 mb-4">
        <h3 class="font-bold text-2xl mb-2">{{ title }}<span v-if="complete == 'false'" class="text-sm opacity-75 ml-4" >Coming Soon</span></h3>
        <p>{{ description }}</p>
    </a>

    <div v-else class="mb-8 block group">
        <img :src="image" :alt="title" class="transform ease-in-out duration-150 mb-4">
        <h3 class="font-bold text-2xl mb-2">{{ title }}<span v-if="complete == 'false'" class="text-sm opacity-75 ml-4" >Coming Soon</span></h3>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
     props: ['title', 'description', 'link', 'image', 'complete'],
}
</script>