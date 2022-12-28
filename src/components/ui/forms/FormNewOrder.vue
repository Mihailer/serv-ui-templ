<template>
    <div class="form-new-order">
        <div class="form-new-order-data">
            <div class="form-new-order-data-client">
                <span class="form-new-order-data-client-text">Клиент</span>
                <div class="form-new-order-data-client-input-wrapper">
                    <input-cmp v-for="( field, fieldIndex ) in clientFormData" 
                        :key="fieldIndex" 
                        :placeholder="field" 
                        warningTxt="* Пoле не дoжнo быть пустым" />
                </div>
            </div>
            <div class="form-new-order-data-device">
                <span class="form-new-order-data-device-text">Устрoйствo</span>
                <div class="form-new-order-data-device-input-wrapper">
                    <input-cmp v-for="( field, fieldIndex ) in deviceFormData" 
                        :key="fieldIndex" 
                        :placeholder="field" 
                        warningTxt="* Пoле не дoжнo быть пустым" />
                </div>
            </div>
        </div>
        <div class="form-new-order-services">
            <div class="form-new-order-services-serv-item">
                
            </div>
            <div class="form-new-order-services-cost-section">
            
            </div>
        </div>
    </div>
</template>

<script>
import InputCmp from '../InputCmp.vue';
import { clientFormData, deviceFormData } from '/src/assets/data/conf.js'

    export default {
        components: {
            InputCmp
        },

        setup() {
             
            return {
                clientFormData,
                deviceFormData
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.form-new-order {
    @include flexRow( space-between, center );
    height: calc( 99% - 10px );
    width: 98.5%;
    border: $main-border;

    &-data {
        @include flexCol( space-between, center );
        height: 100%;
        width: 35%;

        &-client {
            @include flexCol( flex-start, flex-start );
            height: 50%;
            width: 100%;

            &-text {
                @include flexRow( flex-start, flex-start );
                @include font( 16px );
                height: 20px;
                margin: 10px;
            }

            &-input-wrapper {
                @include flexCol( flex-start, flex-start );
                width: 95%;
            }
        }

        &-device {
            height: 50%;
            width: 100%;

            &-text {
                @include flexRow( flex-start, flex-start );
                @include font( 16px );
                height: 20px;
                margin: 10px;
            }

            &-input-wrapper {
                @include flexCol( flex-start, flex-start );
                width: 95%;
            }
        }
    }

    &-services {
        @include flexCol( space-between, center );
        height: 100%;
        width: 65%;
        background-color: rgb(151, 180, 137);

        &-serv-item {
            height: 75%;
            width: 100%;
            background-color: rgb(172, 185, 99);
        }

        &-cost-section {
            height: 25%;
            width: 100%;
            background-color: rgb(157, 218, 133);
        }
    }
}
</style>