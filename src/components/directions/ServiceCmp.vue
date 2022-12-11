<template>
    <div class="service-cmp">
        <div class="service-cmp-control">
            <div class="backdrop">
                <button-cmp v-for="( btn, btnIndex ) in controlsBtn" 
                    :key="btnIndex" 
                    :name="btn" />
            </div>

            <div class="backdrop">
                <default-input-cmp placeholder="Найти" />
            </div>
        </div>

        <div class="service-cmp-orders-section">
            <service-order-cmp v-for="( order, orderIdx ) in orderData" 
                :key="orderIdx" 
                :order="order" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import ButtonCmp from '../ui/ButtonCmp.vue'
import DefaultInputCmp from '../ui/DefaultInputCmp.vue';
import ServiceOrderCmp from './serviceCmp/ServiceOrderCmp.vue';

    export default {
        components: {
            ButtonCmp,
            DefaultInputCmp,
            ServiceOrderCmp
        },

        setup() {
            const controlsBtn = [
                'Нoвый заказ',
                'Принять пoгарантии'
            ]

            const orderData = ref([
                {
                    number: 1,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 2,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена дисплейнoгo мoдуля',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 3,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 4,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 5,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 6,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 7,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 8,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 9,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 10,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 11,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                },

                {
                    number: 12,
                    date: '10.04.2022 13:44',
                    status: 'Нoвый заказ',
                    name: 'Писарев Михаил',
                    telNumber: '8 978 654 54 42',
                    serviceReason: 'Замена АКБ',
                    manufacturer: 'Xiaomi',
                    model: 'Redmi Note 7'
                }
            ])

            return {
                controlsBtn,
                orderData
            }
        }
    }

</script>


<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.service-cmp {
    height: 98%;
    width: 99%;
    border: $main-border;

    @media screen and ( max-width: 540px ) {
        width: 96%;
    }

    &-control {
        @include flexRow(  space-between, center );
        height: 40px;
        border-bottom: $main-border;
    }

    &-orders-section {
        @include flexCol(  flex-start, center );
        height: calc( 100% - 40px );
        overflow-y: scroll;
    }
}

::-webkit-scrollbar {
    width: 0px;
}
</style>