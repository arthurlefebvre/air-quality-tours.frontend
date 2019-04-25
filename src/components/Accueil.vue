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
                <h5>Projet DII4 Smart System</h5>
                <br>
            </div>
        
            <b-row align-h="around" >
                <b-col cols="4" v-for="data in donnees" v-bind:key="data.id">
                    <b-link :to="{ name: 'salle', params: { id: data.id } }" title="Cliquez pour plus de détails" >
                        <b-card
                            header-tag="header"
                            style="max-width: 20rem;"
                            class="mb-5"
                        >

                            <b-card-title slot="header">{{ data.name }}
                                <span v-if="data.IAQ < 40">
                                      <b-badge variant="success">statut</b-badge>
                                </span>
                                <span v-else>
                                      <b-badge variant="warning">statut</b-badge>
                                </span>

                            </b-card-title>
                            <b-card-text>Temp : {{ data.datas[0].temperature }}°</b-card-text>
                            <b-card-text>IAQ : {{ data.datas[0].IAQ }}</b-card-text>

                        </b-card>
                    </b-link>
                </b-col>
            </b-row>
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
                donnees: []
            };
        },
        methods: {
            getDatas() {
                const path = 'http://localhost:5000/';
                axios.get(path)
                    .then(res => this.donnees = res.data)
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

    a {
    color: #212529
    }


</style>
