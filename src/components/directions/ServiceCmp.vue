<template>
    <div class="service-cmp">
        <add-new-order v-if="addOrder"
            @close-new-modal="closeNewModal" />

        <div class="service-cmp-control">
            <div class="backdrop">
                <button-cmp v-for="( btn, btnIndex ) in controlsBtn" 
                    :key="btnIndex" 
                    :name="btn"
                    @click="clickHandler( btn )"  />
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

import AddNewOrder from '../modals/AddNewOrder.vue';
import ServiceOrderCmp from './serviceCmp/ServiceOrderCmp.vue';

import { orderData } from '/src/assets/data/mockData.js'
import { controlsBtn } from '/src/assets/data/conf.js'

    export default {
        components: {
            ButtonCmp,
            DefaultInputCmp,
            ServiceOrderCmp,
            AddNewOrder
        },

        setup() {
            let addOrder = ref( false )

            const clickHandler = ( btnElem ) => {
                console.log( btnElem );
                btnElem === 'Нoвый заказ' 
                    ? addOrder.value = true 
                    : addOrder.value = false
            }

            const closeNewModal = () => {
                addOrder.value = false
            }

            return {
                controlsBtn,
                orderData,
                addOrder,
                clickHandler,
                closeNewModal
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