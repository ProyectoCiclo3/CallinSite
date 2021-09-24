<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Ingresar Registro</h3>
      <div>
        ________________________________________________________________________________________________
      </div>

      <form @submit.prevent="handleSubmitForm">
        
        <div class="form-group">
          <label id="dropdown-label" for="select" class="font-medium text-gray-600">Tipo de Documento</label>
          <select id="dropdown" type="button"  class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 text-gray-400 focus:outline-none focus:border-black">
            <option>Seleccione...</option>
            <option>Cedula de Cuidadania</option>
            <option>Cedula de Extrangeria</option>
            <option>Pasaporte</option>
          </select>
        </div>

        <div class="form-group">
          <label>Documento</label>
          <input
            type="text"
            class="form-control"
            v-model="user.id"
            required
          />
        </div>

        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Apellido</label>
          <input
            type="text"
            class="form-control"
            v-model="user.lastname"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Telefono</label>
          <input
            type="text"
            class="form-control"
            v-model="user.phone"
            required
          />
        </div>
        <div>
          ________________________________________________________________________________________________
        </div>
        <center>
          <div class="form-group">
            <button type="button" class="btn btn-warning btn-lg btn-block">Guardar</button>
          </div>
        </center>
        
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-user";

      axios
        .post(apiURL, this.user)
        .then(() => {
          this.$router.push("/view");
          this.user = {
            name: "",
            lastname: "",
            email: "",
            phone: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>