
 <template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class = "elevation-1">

  </v-data-table>
 </template>


<script>
import axios from 'axios';

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
    { text: 'Actions', value: 'action', sortable: false },
   ],
   users: []
  }
 },

 methods: {
  showUsers() {
   const path = 'http://localhost:8888/api/user/';
   axios.get(path)
           .then((res) => {
            console.log(res.data)
            this.users = res.data;
            console.log(this.users)

           })
           .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
           });
  },
 },

 created() {
  this.showUsers();
 },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

