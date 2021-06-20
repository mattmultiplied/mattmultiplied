<template>
    <div class="color-container pt-52">
        <div class="container mx-auto mb-20 px-4 py-8 md:px-16 md:pb-16 text-white">
            <div class="mb-16">
                <h1 class="text-5xl lg:text-6xl w-full font-bold md:w-10/12" v-html="title">
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

