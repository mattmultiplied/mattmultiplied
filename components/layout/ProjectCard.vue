
<template>
    <a :href="link" target="_blank" class="mb-8 block group">
        <img rel="external" :src="image" :alt="title" class="transform group-hover:rotate-3 group-hover:scale-105 ease-in-out duration-150 mb-4">
        <h3 class="font-bold text-lg">{{ title }}</h3>
        <p>{{ description }}</p>
    </a>
</template>

<script>
export default {
     props: ['title', 'description', 'link', 'image'],
}
</script>