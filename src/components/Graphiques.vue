<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        props: {
            chartdata: {
                type: Array | Object,
                default: null
            },
            options: {
                type: Array | Object,
                default: null
            }
        },
        mounted () {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>

<style scoped>

</style>