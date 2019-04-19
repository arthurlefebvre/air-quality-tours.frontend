<template>
    <div>
        <p>My id is {{ id }}</p>
        <p>Temperature {{ donnees.name }}</p>
        <p>Temperature {{ donnees.temperature }}</p>
        <p>Temperature {{ donnees.pression }}</p>
        <p>Temperature {{ donnees.IAQ }}</p>
        <p>Temperature {{ donnees.img }}</p>



    </div>
</template>

<script>
    import axios from 'axios';


    export default {
        name: "Salle",
        props: ['id'],
        data() {
            return {
                donnees: []
            }
        },
        methods: {
            getData() {
                const path = `http://localhost:5000/salle/${this.id}`;
                axios.get(path)
                    .then(res => this.donnees = res.data.data)
                    .catch(error => console.log(error))
            },
        },
        created() {
            this.getData();
        }
    }
</script>

<style>

</style>