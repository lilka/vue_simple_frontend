<template>
 <v-data-table
         :headers="headers"
         :items="usersList"
         :items-per-page="5"
         class="elevation-1"
 >
  <template v-slot:item.action="{ item }">
   <td @click.stop class="non-clickable">
    <v-btn small :to="`/users/${item.id}`">Edit</v-btn>
   </td>
  </template>
 </v-data-table>
</template>

<script>
 export default {
  data() {
   return {
    dialog: false,
    headers: [
     {
      text: 'Name',
      align: 'left',
      sortable: true,
      value: 'name'
     },
     { text: 'Surname', value: 'surname' },
     { text: 'Age', value: 'age' },
     { text: 'Actions', value: 'action', sortable: false }
    ]
   };
  },

  mounted() {
   this.$store.dispatch('showUsers');
  },
  updated(){
   this.$store.dispatch('showUsers');
  },
  computed: {
   usersList() {
    return this.$store.getters.getUsers;
   }
  }
 };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .elevation-1{
  width: 800px;
  margin-left: 350px;
 }
</style>
