<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Iniciar Registro</h3>
      <form @submit.prevent="handleSubmitForm">
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
            type="email"
            class="form-control"
            v-model="user.lastname"
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
        
        <div class="form-group">
          <label>Correo Electronico</label>
          <input
            type="text"
            class="form-control"
            v-model="user.email"
            required
          />
        </div>
        <div>
          _________________________________________________________________________________________________
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
      student: {
        name: "",
        lastname:"",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/view");
          this.student = {
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

