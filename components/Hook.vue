<template>
    <div class="hook-container">
        <div class="container mx-auto px-4 py-8 md:px-16 md:pb-16 text-white">
            <div>
                <div class="mb-16">
                    <h1 class="text-6xl font-bold w-9/12 leading-normal" v-html="title">
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: ['title'],
}
</script>

