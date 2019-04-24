<template>
    <div class="container-fluid">
        <b-breadcrumb :items="items"></b-breadcrumb>

        <div class="container">
            <h1>{{ donnees.name }}</h1>
            <p>Température : {{donnees.datas[0].temperature}}°</p>
            <p>Pression : {{donnees.datas[0].pressure}}</p>
            <p>Humidité : {{donnees.datas[0].humidity}}</p>
            <p>IAQ : {{donnees.datas[0].IAQ}}</p>

            <b-button class="btn btn-info" @click="getData">Recharger</b-button>

        </div>

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
                donnees: [],
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
                chartdata: {
                    labels: [],
                    datasets: [
                        {
                        label: 'IAQ',
                        backgroundColor: '#f87979',
                        data: []
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                },
                loaded: false
            }
        },
        methods: {
            getData() {
                this.loaded = false
                console.log("getData call")
                const path = `http://localhost:5000/salle/${this.id}`;
                axios.get(path)
                    .then(res => {
                        this.donnees = res.data
                        this.chartdata.labels = res.data.datas.map(data => data.date)   
                        this.chartdata.datasets[0].data = res.data.datas.map(data => data.IAQ)

                        console.log(this.chartdata.datasets.data)
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