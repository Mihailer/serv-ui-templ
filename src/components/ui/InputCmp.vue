<template>
    <input class="input-cmp" 
        :type="type" 
        :placeholder="placeholder">

    <span class="input-cmp-warning-text">
        {{ warningTxt }}
    </span>
</template>

<script>

    export default {
        props: {
            type: { type: String, default: 'text' },
            placeholder: { type: String, default: 'placeholder' },
            warningTxt: { type: String, default: '' }
        },

        setup() {
            
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.input-cmp {
    height: 30px;
    width: calc( 100% - 24px );
    padding: 0px 10px;
    margin: 10px 10px;
    border: $main-border;
    outline: none;
    color: $main-color;
    

    &-warning-text {
        @include flexRow( flex-start, center );
        @include font( 10px );
        color: $main-red;
        height: 10px;
        width: calc( 100% - 2px );
        margin: 0px 10px;
    }
}

::placeholder {
    color: $main-color;
}

</style>