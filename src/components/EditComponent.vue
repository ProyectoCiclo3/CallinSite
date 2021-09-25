<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update User</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Documento</label>
          <input
            type="text"
            class="form-control"
            v-model="user.doc"
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
          <label>Phone</label>
          <input
            type="text"
            class="form-control"
            v-model="user.phone"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Actualizar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-user/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.user = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-user/${this.$route.params.id}`;

      axios
        .put(apiURL, this.user)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
