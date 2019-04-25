<template>
    <div class="container-fluid">
        <b-breadcrumb :items="items"></b-breadcrumb>

        <div class="container">
            <h1 class="text-center">{{ donnees.name }}</h1>
            <br>
            <b-table striped :items="tableData"></b-table>


            <b-button class="btn btn-info" @click="getData">Recharger</b-button>

        </div>
        <br><br>
        <br><br>
        <h1 class="text-center">Evolution de la qualité de l'air dans la salle {{donnees.name}}</h1>
        <line-chart v-if="loaded" :chartdata="chartdata" :options="options"></line-chart>
    </div>

</template>

<script>
    import axios from 'axios';
    import LineChart from './Graphiques.vue'

    export default {
        name: "Salle",
        props: ['id'],
        components: { LineChart },
        data() {
            return {
                items: [
                    {
                        text: 'Accueil',
                        to: {name: "Accueil"}
                    },
                    {
                        text: "Détails d'une salle",
                        active: true
                    }
                ],
                donnees: [],
                tableData: [],
                chartdata: {
                    labels: [],
                    datasets: [
                        {
                            label: 'IAQ',
                            backgroundColor: 'blue',
                            borderColor: 'blue',
                            data: [],
                            fill: false
                        },
                        {
                            label: 'Temperature',
                            backgroundColor: 'green',
                            borderColor: 'green',
                            data: [],
                            fill: false
                        },
                        {
                            label: 'Pression',
                            backgroundColor: 'red',
                            borderColor: 'red',
                            data: [],
                            fill: false
                        },
                        {
                            label: 'Humidité',
                            backgroundColor: 'grey',
                            borderColor: 'grey',
                            data: [],
                            fill: false
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                },
                loaded: false
            }
        },
        methods: {
            updateTableData(telemetricData) {
                this.tableData = [{
                    temperature: telemetricData.temperature,
                    pression: telemetricData.pressure,
                    humidite: telemetricData.humidity,
                    IAQ: telemetricData.IAQ
                }]
            },

            updateChartDataAndLabel(datas){
                this.chartdata.labels = datas.map(data => data.date)   
                this.chartdata.datasets[0].data = datas.map(data => data.IAQ)
                this.chartdata.datasets[1].data = datas.map(data => data.temperature)
                this.chartdata.datasets[2].data = datas.map(data => data.pressure)
                this.chartdata.datasets[3].data = datas.map(data => data.humidity)

            },

            getData() {
                this.loaded = false
                console.log("getData call")
                const path = `http://localhost:5000/salle/${this.id}`;
                axios.get(path)
                    .then(res => {
                        const telemetricData = res.data.datas[0]
                        const chartDataAndLabel = res.data.datas
                        
                        this.donnees = res.data
                        this.updateTableData(telemetricData)
                        this.updateChartDataAndLabel(chartDataAndLabel)
                        this.loaded = true
                    })
                    .catch(error => console.log(error))
            },
        },
        created() {
            this.getData();
            console.log(this.$data.chartdata.datasets.data)

        },

    }
</script>

<style>

</style>