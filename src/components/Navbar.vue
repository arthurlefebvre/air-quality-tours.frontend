<template>
    <div id="main-container">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/"><img src="../../static/logo_orange.png" style="width: 10%"/>  AQ Tours</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/" right>Accueil</b-nav-item>
                    <b-nav-item to="/administration/login" right>Administration</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name:"Navbar"

    }
</script>

<style scoped>
    #main-container {
        box-shadow: 0px 2px 7px #383737;
    }

    a {
        font-size: 1.1em;
    }
</style>

