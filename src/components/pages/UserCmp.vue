<template>
    <div class="user-cmp">
        <header class="user-cmp-header">
            <nav-cmp @set-active-tab="setActiveTab" />
            <img class="logout-img" 
                src="@/assets/img/open-exit.svg" alt="Logout" 
                @click="this.$store.commit( 'SET_AUTH_STATE', false )">
        </header>

        <main class="user-cmp-main">
            <service-cmp v-if="directions[ 1 ]" />
            <sales-cmp v-if="directions[ 2 ]" />
            <warehouse-cmp v-if="directions[ 3 ]" />
            <analytics-cmp v-if="directions[ 4 ]" />
        </main>
    </div>
</template>

<script>
import { ref } from 'vue'
import NavCmp from '../ui/controls/NavCmp.vue';

    import ServiceCmp from '../directions/ServiceCmp.vue';
    import SalesCmp from '../directions/SalesCmp.vue';
    import WarehouseCmp from '../directions/WarehouseCmp.vue';
    import AnalyticsCmp from '../directions/AnalyticsCmp.vue';

    export default {
        components: {
            NavCmp,

            ServiceCmp,
            SalesCmp,
            WarehouseCmp,
            AnalyticsCmp
        },  

        methods: {
            setActiveTab( data ) {
                for ( let i of Object.keys( this.directions ) ) {
                    this.directions[ i ] = false
                }
                this.directions[ data ] = true
            }
        },

        setup() {
            const directions = ref({
                1: true,
                2: false,
                3: false,
                4: false
            })

            return  {
                directions
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.user-cmp {
    height: 100vh;
    width: 100vw;
    // background-color: rgb(180, 214, 148);

    &-header {
        @include flexRow( space-between, center );
        height: 50px;
        width: 100%;
        background-color: $main-color;

        @media screen and ( max-width: 540px ) {
            @include flexRow( center, center );
            width: 100%;
        }
    }

    &-main {
        @include flexRow( center, center );
        height: calc( 100vh - 50px );
        background-color: $main-white;
    }
}
</style>