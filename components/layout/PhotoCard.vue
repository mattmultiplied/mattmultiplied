
<template>

    <a class="flex flex-col" :href="link" rel="nofollow" target="_blank">
        <img :src="image" :alt="caption" class="transform ease-in-out duration-150 mb-4 hover:scale-105 hover:rotate-1"/>
        <p class="text-sm italic">- {{ caption }}</p>
    </a>

</template>

<script>
export default {
    props: ['caption', 'link', 'image'],
}
</script>