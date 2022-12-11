import { createStore } from 'vuex'

export default createStore({

    state: {
        auth: false,
        chart: []
    },

    mutations: {
        SET_AUTH_STATE( state, data ) {
            state.auth = data;
        },

        SET_CHART_DATA( state, data ) {
            state.chart = data;
        }
    },

    actions: {
    
    },

    getters: {
        GET_AUTH_STATE( state ) {
            return state.auth
        },

        GET_CHARTS_DATA( state ) {
            return state.chart
        }
    }
})