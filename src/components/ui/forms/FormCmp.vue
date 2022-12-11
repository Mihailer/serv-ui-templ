<template>
    <form class="form-cmp">

        <div class="form-cmp-state-text-section">
            {{ stateText }}
        </div>

        <div class="form-cmp-input-section">
            <input-cmp v-for="( field, fieldIndex ) in inputFields" 
                :key="fieldIndex" 
                :type="inputTypes[ fieldIndex ]"
                :placeholder="field" />
        </div>

        <div class="form-cmp-butons-section">
            <button-cmp :name="buttonName" 
                @click-handler="this.$store.commit( 'SET_AUTH_STATE', true )" />
            <span class="form-cmp-butons-section-reg"
                @click="registration( subButtonText )">
                {{ subButtonText }}
            </span>
        </div>
        
    </form>
</template>

<script>
import { ref } from 'vue'
import InputCmp from '../InputCmp.vue'
import ButtonCmp from '../ButtonCmp.vue'

    export default {
        components: {
            InputCmp,
            ButtonCmp
        },

        setup() {
            const stateText = ref( 'Вход' )
            let subButtonText = ref( 'Регистрация' )
            const inputFields = ref( [ 'Почта', 'Пароль' ] )
            const inputTypes = [ 'email', 'password', 'password']
            const buttonName = ref( 'Вoйти' )

            const loopItem = [ 'stateText', 'buttonName', 'subButtonText' ]
            const loginConf = [ 'Вход', 'Вoйти', 'Регистрация' ]
            const regConf = [ 'Регистрация', 'Зарегистрирoваться', 'Oтмена' ]

            const registration = ( data ) => {
                data === 'Регистрация' 
                    ? reg() 
                    : cancelReg()
            }

            const reg = () => {
                inputFields.value.push( 'Пoдтвердите парoль' )
                stateText.value = 'Регистрация'
                buttonName.value = 'Зарегистрирoваться'
                subButtonText.value = 'Oтмена'
            }

            const cancelReg = () => {
                inputFields.value.pop()
                stateText.value = 'Вход'
                buttonName.value = 'Вoйти'
                subButtonText.value = 'Регистрация'
            }

            return {
                stateText,
                subButtonText,
                inputFields,
                registration,
                inputTypes,
                reg,
                cancelReg,
                buttonName,
                loopItem,
                loginConf,
                regConf
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.form-cmp {
    @include flexCol( center, center );
    height: 90%;
    width: 30%;
    min-width: 300px;
    border: $main-border;

    &-state-text-section {
        @include flexRow( flex-start, center );
        @include font( 20px );
        color: $main-white;
        height: 50px;
        width: 90%;
        margin: 10px;
    }

    &-input-section {
        @include flexCol(flex-start, center );
        height: auto;
        width: 90%;
        margin: 10px;
    }

    &-butons-section {
        @include flexCol( flex-start, center );
        height: 80px;
        width: 90%;
        margin: 10px;

        &-reg {
            @include flexRow( center, center );
            @include font( 12px );
            color: $main-white;
            height: 50px;
            width: 30%;
            margin: 10px;
            border-bottom: $main-border-white;
        }
    }
}
</style>