<template>
    <div>
        <div id="polytechBanner" class="container-fluid">
            <div class="jumbotron text-center" style="background-image: url(../static/polytech.jpg); background-size: cover;">
                <!-- <h1>Qualité de l'air Tours</h1>
                <p>Projet DII4 Smart System </p> -->
                <br><br><br><br><br>
            </div>
            <hr>
        </div>
        <div class="container">
            <div class="text-center">
                <h1>Qualité de l'air Tours</h1>
                <p>Projet DII4 Smart System</p>
            </div>
        
            <div class="card" v-for="data in datas" v-bind:key="data.id">
                <div class="card-body text-center">
                    <p class="card-title ">{{ data.name }}</p>
                    <div class="row">
                        <p class="card-subtitle col text-muted">Température : {{ data.temperature }}°</p>
                        <p class="card-subtitle col text-muted">Pression : {{ data.pression }}Hp</p>
                        <p class="card-subtitle col text-muted">IAQ : {{ data.IAQ }}/500</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {

        name: 'Accueil',
        data() {
            return {
                msg: '',
                datas: []
            };
        },
        methods: {
            getDatas() {
                const path = 'http://localhost:5000/datas';
                axios.get(path)
                    .then(res => this.datas = res.data.datas)
                    .catch(error => console.log(error))
            },
        },
        created() {
                this.getDatas();
        }
    };
</script>

<style scoped>
    #polytechBanner{ 
        width: 90%; 
        margin: auto;
    }
</style>
