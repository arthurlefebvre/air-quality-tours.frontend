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
        
            <div class="card" v-for="donnee in donnees" v-bind:key="donnee.id">
                <div class="card-body text-center">
                    <p class="card-title ">{{ donnee.name }}</p>
                    <div class="row">
                        <p class="card-subtitle col text-muted">Température : {{ donnee.temperature }}°</p>
                        <p class="card-subtitle col text-muted">Pression : {{ donnee.pression }}Hp</p>
                        <p class="card-subtitle col text-muted">IAQ : {{ donnee.IAQ }}/500</p>
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
                donnees: [
                    {
                        id: 1,
                        name: 'Lovelace',
                        temperature: 19,
                        pression: 15,
                        IAQ: 19
                    },
                    {
                        id: 2,
                        name: 'Bool',
                        temperature: 18,
                        pression: 20,
                        IAQ: 50
                    },
                    {
                        id: 3,
                        name: 'Shannon',
                        temperature: 18,
                        pression: 20,
                        IAQ: 50
                    },
                    {
                        id: 4,
                        name: 'TP Systèmes',
                        temperature: 18,
                        pression: 20,
                        IAQ: 50
                    }
                ]
            };
        },
        methods: {
            getMessage() {
                const path = 'http://localhost:5000/ping';
                axios.get(path)
                    .then(res => this.msg = res.data)
                    .catch(error => console.log(error))
            },
        },
        created() {
                this.getMessage();
        }
    };
</script>

<style scoped>
    #polytechBanner{ 
        width: 90%; 
        margin: auto;
    }
</style>
