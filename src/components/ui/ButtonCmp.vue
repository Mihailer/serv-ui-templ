<template>
    <button class="button-cmp"
        @click.prevent="$emit( 'click-handler' )">
        {{ name }}
    </button>
</template>

<script>
    export default {
        props: {
            name: { type: String, default: 'Btn' }
        },

        setup() {

            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.button-cmp {
    @include flexRow( center, center );
    @include font( 12px );
    color: $main-color;
    background-color: $main-white;    
    
    height: 26px;
    min-width: 50px;
    border: $main-border;
    outline: none;
    margin: 5px 5px;
    padding: 5px 10px;

    @media screen and ( max-width: 540px ) {
        @include font( 8px );
        
    }

    &:hover {
        background-color: $main-color;
        color: $main-white;
        border: $main-border-white;
    }
    
}
</style>