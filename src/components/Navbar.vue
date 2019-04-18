<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-info">
            <div class="container">
                <router-link to="/" class="nav-item">
                    <a class="navbar-brand" href="#"><img src="../../static/logo_orange.png" style="width: 10%"/>  AQ Tours</a>
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <router-link tag="li" to="/" class="nav-item">
                            <a class="nav-link">Accueil</a>
                        </router-link>
                        <router-link tag="li" to="/historique" class="nav-item">
                            <a class="nav-link">Historique</a>
                        </router-link>
                        <router-link tag="li" to="/administration/login" class="nav-item">
                            <a class="nav-link">Administration</a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name:"Navbar"

    }
</script>
