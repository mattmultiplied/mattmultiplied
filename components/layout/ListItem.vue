
<template>
    <div>
        <div v-if="complete" class="flex flex-row mb-2">
            <span class="mr-2">&#9989;</span>
            <div class="flex flex-col -mt-1">
            <p>{{ title }}</p>
            <p class="text-sm italic">- {{ description }}</p>
            </div>
        </div>
        <div v-else class="flex flex-row mb-2">
            <span class="mr-2">&#11093;</span>
            <div class="flex flex-col -mt-1">
            <p>{{ title }}</p>
            <p class="text-sm italic">- {{ description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'description', 'complete'],
}
</script>

