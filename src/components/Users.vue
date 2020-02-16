
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

export default{
  data () {
    return {
     
      headers: [
        {
        text: 'Users',
        align: 'left', 
        sortable: false,
        value: 'name'
        }, 
        {text: 'Surname', value: 'surname'},
        {text: 'Age', value: 'age'}
      ],
      users:[{
        name: 'Lilla',
        surname: 'Lilka', 
        age: 22
      },{
        name: 'Dorota',
        surname: 'Doris', 
        age: 42
      },
      {
        name: 'Ola',
        surname: 'Olekx', 
        age: 44
      },
      {
        name: 'Jana',
        surname: 'Janeczka', 
        age: 54
      },
        {
        name: 'Patrycja',
        surname: 'Pati', 
        age: 34
      },
      {
        name: 'Michał',
        surname: 'Mis', 
        age: 34
      },
      ],
    }
  },
  methods: {
    showUsers(user){
      axios
          .get('localhost:5000', {
            params:{

            }
          })
          .then(response => {
            response = response.data;
            this
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

