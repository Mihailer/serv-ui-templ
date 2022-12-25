<template>
    <div class="service-order">
        <div class="service-order-field-sections"
            @click="getOrderData( order )" >
            <div class="flatdrop">
                <div class="service-order-field-sections-description" 
                    v-for="( descriptItem, descriptItemIndex ) in orderFieldSections"
                    :key="descriptItemIndex">
                    {{ descriptItem }}
                </div>
            </div>
            <div class="flatdrop-hover">
                <div class="service-order-field-sections-value"
                    v-for="( orderItem, orderItemIndex ) in order" 
                    :key="orderItemIndex">
                    {{ orderItem }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { orderFieldSections } from '/src/assets/data/conf.js' 

    export default {
        props: {
            order: { type: Object, default: () => { return {} } }
        },

        methods: {
            getOrderData( orderData ) {
                this.$emit( 'emit-order-data', orderData )
            }
        },

        setup( props ) {

            const orderFieldLangth = ref( Object.values( props.order ).length )

            return {
                orderFieldSections,
                orderFieldLangth
            }
        }
    }

</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.flatdrop-hover:hover {
    background-color: $main-color;
    color: $main-white
}

.service-order {
    @include flexRow( space-between, center );
    height: 50px;
    width: calc( 100% - 8px );
    border: $main-border;
    margin: 3px;

    &-field-sections {
        @include flexCol( space-between, center );
        @include font( 10px );
        height: 46px;
        width: 100%;
        margin: 1px;
        padding: 10px 5px;

        &-description {
            @include flexRow( flex-start, center );
            @include font( 9px );
            height: 10px;
            width: calc( 100% / v-bind( orderFieldLangth ) );
            margin-top: 0px;
            padding: 0px 5px
        }

        &-value {
            @include flexRow( flex-start, center );
            @include font( 10px );
            height: 28px;
            width: calc( 100% / v-bind( orderFieldLangth ) );
            padding: 0px 5px
        }
    }
}
</style>