<template>
    <v-app>
      
      
     <users></users> 
    </v-app>
</template>

<script>
import Users from './components/Users';

export default {
    name: 'App',

    components: {
        Users
     },

    data: () => ({
        //
    })
};
</script>
