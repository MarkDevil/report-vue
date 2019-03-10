<template>
    <el-container direction="vertical" class="fullscreen">
        <h1>404</h1>
    </el-container>


</template>

<script>

    export default {
        name: "notFound",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '0'
            };
        }
    }
</script>

<style scoped>

    .fullscreen {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        margin: 0;
        border-radius: 0;
    }

</style>
