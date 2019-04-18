<template>
    <div>
        <div id="loginForm">
            <h1>Accès à la partie administration</h1>
            <form >
                <div class="form-group">
                    <label for="identifiant">Identifiant :</label>
                    <input type="name" class="form-control" id="identifiant" placeholder="Identifiant administrateur">
                </div>
                <div class="form-group">
                    <label for="mdp">Mot de passe :</label>
                    <input type="password" class="form-control" id="mdp" placeholder="Mot de passe administrateur">
                </div>

                <button type="submit" class="btn btn-info">Envoyer</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginForm'
        
    }
</script>

<style scoped>
    #loginForm {
        width: 40%;
        margin: auto;
        margin-top: 3%;
    }
</style>