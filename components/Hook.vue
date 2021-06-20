<template>
    <div class="hook-container pt-52çç">
        <div class="container mx-auto mb-20 px-4 py-8 md:px-16 md:pb-16 text-white">
            <div class="mb-16">
                <h1 class="text-5xl md:text-6xl w-full font-bold md:w-9/12" v-html="title">
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: ['title'],
}
</script>

