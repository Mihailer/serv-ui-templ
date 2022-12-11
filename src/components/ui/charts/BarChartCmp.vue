<template>
    <Bar :data="data" :options="data.options" />
  </template>
  
  <script>
  import { ref } from 'vue'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  
  import { Bar } from 'vue-chartjs'
  
  ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend )
  
  export default {
    components: {
      Bar
    },

    setup() {
        const data = ref( {
            options: {
                responsive: true,
                maintainAspectRatio: false
            },

            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#2c3e50',
                    data: [ 23, 45 ,67, 45, 57, 34, 123, 45 ,67, 45, 79, 45 ] 
                }
            ]
        } )

        return {
            data
        }
    }
  }
  </script>
  