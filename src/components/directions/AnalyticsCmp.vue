<template>
    <div class="analytics-cmp">
        <h2>analytics</h2>
        <div class="analytics-cmp-charts">
            <bar-chart-cmp />
        </div>
        <div class="analytics-cmp-charts">
            <bar-chart-cmp />
        </div>
    </div>
</template>

<script>
// import { ref } from 'vue'
import BarChartCmp from '../ui/charts/BarChartCmp.vue';

    export default {
        components: {
            BarChartCmp
        },

        setup() {

            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.analytics-cmp {
    @include flexCol( flex-start, center );
    height: 98%;
    width: 99%;
    border: $main-border;

    @media screen and ( max-width: 540px ) {
        width: 96%;
    }

    &-charts {
        height: 40%;
        width: 98%;
        margin: 5px;
        border: $main-border;

        @media screen and ( max-width: 540px ) {
            height: 30%;
            width: 96%;
        }
    }


}
</style>