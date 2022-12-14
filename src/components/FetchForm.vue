<script setup>
  import { reactive } from "vue";
  import FetchFormField from "./FetchFormField.vue";

  const endpoint = "https://frontend-take-home.fetchrewards.com/form";

  const formValues = reactive({
    fullName: "Scott",
    email: "scott@mail.com",
    password: "abcxyz9",
  });
</script>

<template>
  <div>
    <h2>Form</h2>
    <div>{{ formValues }}</div>
    <br />
    <!-- full name, email, password, occupation, and state -->
    <FetchFormField
      input-placeholder="First Last"
      label-text="Full Name"
      v-model="formValues.fullName"
    />
    <br />
    <FetchFormField
      label-text="Email"
      v-model="formValues.email"
    />
    <br />
    <FetchFormField
      input-type="password"
      label-text="Password"
      v-model="formValues.password"
    />
  </div>
</template>

<style scoped></style>
