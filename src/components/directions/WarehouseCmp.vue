<template>
    <div class="warehouse-cmp">
        <h2>warehouse</h2>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.warehouse-cmp {
    height: 98%;
    width: 99%;
    border: $main-border;

    @media screen and ( max-width: 540px ) {
        width: 96%;
    }
}
</style>