<template>
    <div class="nav-cmp">
        <tab-cmp v-for="( tab, tabIndex ) in tabs" 
            :class="active === tabIndex ? 'active-tab' : '' "
            :key="tabIndex" 
            :name="tab" 
            :id="tabIndex"
                @click="active = tabIndex"
                @click-handler="$emit( 'set-active-tab', tabIndex )" />
    </div>
</template>

<script>
import { ref } from 'vue'
import TabCmp from '../TabCmp.vue';

    export default {
        props: {
            tabs: { type: Object, default: () => { return {} } }
        },

        components: {
            TabCmp
        },

        setup() {
            const active = ref( '1' )

            return {
                active
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.nav-cmp {
    @include flexRow( space-between, center );
    height: 100%;
    width: 300px;
    margin: 0px 10px;

    @media screen and ( max-width: 540px ) {
        @include flexRow( space-between, center );
        width: 100%;
    }
}
</style>