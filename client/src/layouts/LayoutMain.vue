<template>
    <div class="flex w-full h-screen bg-gray-50 overflow-hidden">
        <div class="lg:w-2/4 h-full">
            <img src="https://source.unsplash.com/random" class="object-cover w-full h-full hidden lg:block max-w-full" alt="">
        </div>
        <div class="lg:w-2/4 h-full w-full ">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
</style>