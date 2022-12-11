<template>
    <input class="input-cmp" 
        :type="type" 
        :placeholder="placeholder">

</template>

<script>
// import { ref } from 'vue'

    export default {
        props: {
            type: { type: String, default: 'text' },
            placeholder: { type: String, default: 'placeholder' }
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
    height: 24px;
    width: calc( 100% - 24px );
    padding: 0px 10px;
    margin: 5px;
    border: $main-border;
    outline: none;
    color: $main-color;
}

::placeholder {
    color: $main-color;
}
</style>