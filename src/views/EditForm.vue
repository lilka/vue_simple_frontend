<template>

    <form>
        <v-text-field
                v-model="name"
                label="Name"

                required
        ></v-text-field>
        <v-text-field
                v-model="surname"
                label="Surname"
                required


        ></v-text-field>
        <v-text-field
                v-model="age"
                label="Age"
                required
                type="number"

        ></v-text-field>

        <v-btn class="mr-4" @click="submit">submit</v-btn>

    </form>



</template>

<script>
    import { mapFields } from 'vuex-map-fields';

    export default {

        name: 'EditForm',
        props: ['id'],
        data() {
            return {

                editedUser: this.getUser
            }
        },
        mounted()
        {
            this.$store.dispatch('showUsers');
            this.$store.getters.getUser( this.$route.params);
        },
        computed:{
            getUser(){
                return this.$store.getters.getUser( this.$route.params);
            },
            ...mapFields([
                'updatedUser.id',
                'updatedUser.name',
                'updatedUser.surname',
                'updatedUser.age'

            ])
        },
        methods:{
            submit(){
                this.$store.actions.editedUser(this.$route.params)
            }
        }
    };
</script>

<style scoped>

</style>