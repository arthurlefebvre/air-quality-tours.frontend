<template>
    <div>
        <div class="container-fluid" style="width: 93%; margin: auto;">
            <div class="jumbotron text-center" style="background-image: url(../static/polytech.jpg); background-size: cover;">
                <!-- <h1>Qualité de l'air Tours</h1>
                <p>Projet DII4 Smart System </p> -->
                <br><br><br>
            </div>
            <hr>
        </div>
        <div class="container">
            <div class="text-center">
                <h1>Qualité de l'air Tours</h1>
                <p>Projet DII4 Smart System</p>
            </div>
        <p>{{ msg }}</p>
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

</style>
