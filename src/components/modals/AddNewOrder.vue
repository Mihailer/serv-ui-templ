<template>
    <div class="add-new-order">
        <div class="add-new-order-section">
            <div class="add-new-order-section-close">
                <div class="add-new-order-section-close-text">
                    Нoвый заказ
                </div>
                <div class="add-new-order-section-close-icon">
                    <img src="@/assets/img/close.svg" alt="X"
                        @click="$emit( 'close-new-modal' )">
                </div>
            </div>

            <div class="add-new-order-section-form">
                <form-new-order />
            </div>
        </div>
    </div>
</template>

<script>
import FormNewOrder from '../ui/forms/FormNewOrder.vue';

    export default {
        components: {
            FormNewOrder
        },
        
        setup() {

            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.add-new-order {
    @include flexRow( center, center );
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100vh;
    width: 100vw;    background-color: $main-modal-wrapper-color;

    &-section {
        height: 98%;
        width: 99%;
        border: $main-border;
        background-color: $main-white;

        &-close {
            @include flexRow( space-between, center );
            height: 40px;

            &-text {
                @include font( 16px );
                @include flexRow( center, center );
                height: 30px;
                margin: 10px;
            }

            &-icon {
                @include flexRow( center, center );
                height: 30px;
                width: 30px;
                margin: 10px;
            }
        }
        // -------------------------------------------------------- FORM NEW ORDER
        &-form {
            @include flexRow( center, center );
            height: calc( 100% - 40px );
        }
        // -------------------------------------------------------- FORM NEW ORDER
    }
}
</style>