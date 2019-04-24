<template>
    <div>
        <h1>Accès à la partie administration</h1>
        <div id="loginForm">
                <b-form >
                    <b-card header-tag="header" footer-tag="footer">
                    <h4 slot="header" class="mb-0">Formulaire</h4>
                    
                    <b-form-group
                        id="input-group-1"
                        label="Identifiant:"
                        label-for="input-1"
                    >
                        <b-form-input
                        id="input-1"
                        v-model="form.identifiant"
                        type="text"
                        required
                        placeholder="Identifiant administrateur"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2" label="Mot de passe :" label-for="input-2">
                        <b-form-input
                        id="input-2"
                        v-model="form.mdp"
                        required
                        placeholder="Mot de passe administrateur"
                        ></b-form-input>
                    </b-form-group>
                        

                

                    <em slot="footer"><b-button type="submit" variant="info">Envoyer</b-button></em>
                    </b-card>
                </b-form>


        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginForm',
        data() {
            return {
                form: {
                    identifant: '',
                    mdp: ''
                }
            }
        }
        
    }
</script>

<style scoped>
    #loginForm {
        width: 40%;
        margin: auto;
        margin-top: 3%;
    }

    h1 {
        text-align: center;
    }
</style>