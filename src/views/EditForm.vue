<template>
    <div >
        <h1 class ="title">Edit form</h1>
        <form class="form">
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

    </div>

</template>

<script>
    import { mapFields } from 'vuex-map-fields';
    import router from '../router';

    export default {

        name: 'EditForm',
        props: ['id'],

        mounted()
        {
            this.$store.dispatch('showUsers');
            this.$store.getters.getUser( this.$route.params);
        },
        computed:{

            ...mapFields([
                'updatedUser.id',
                'updatedUser.name',
                'updatedUser.surname',
                'updatedUser.age'

            ])
        },
        methods:{
            submit(){
                this.$store.dispatch('editUser')
                router.push( {path: '/'})
            }
        }
    };
</script>

<style scoped>
    .form{
        alignment: center;
        margin-left: 600px;
        width: 200px;
    }
    .title{
        text-align: center;

    }
</style>