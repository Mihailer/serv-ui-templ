<template>
    <div class="order-data">
        <div class="order-data-section">
            <div class="order-data-section-close">
                <div class="order-data-section-close-text">
                    Заказ № {{ currentOrder.number }}
                </div>
                <div class="order-data-section-close-icon">
                    <img src="@/assets/img/close.svg" alt="X"
                        @click="$emit( 'close-order-modal' )">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            currentOrder: { type: Object, default: () => { return {} } }
        },

        mounted() {
            console.log( this.currentOrder );
        },
        
        setup() {

            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.order-data {
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
            // background-color: rgb(231, 110, 110);

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
    }
}
</style>