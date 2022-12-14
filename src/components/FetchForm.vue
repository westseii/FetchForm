<script setup>
  import { onBeforeMount, reactive, ref } from "vue";
  import FetchFormField from "./FetchFormField.vue";

  const endpoint = "https://frontend-take-home.fetchrewards.com/form";
  const endpointData = ref();

  const userValues = reactive({
    fullName: "",
    email: "",
    password: "",
  });

  // functionality
  const fetchData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    endpointData.value = data;
  };

  // lifecycle
  onBeforeMount(() => fetchData());
</script>

<template>
  <div>
    <h2>Form</h2>
    <hr class="fetch-rule-thin" />
    <!-- full name, email, password, occupation, and state -->
    <FetchFormField
      input-placeholder="First Last"
      label-text="Full Name"
      v-model="userValues.fullName"
    />
    <br />
    <FetchFormField
      input-type="email"
      label-text="Email"
      v-model="userValues.email"
    />
    <br />
    <FetchFormField
      input-type="password"
      label-text="Password"
      v-model="userValues.password"
    />
  </div>
</template>

<style scoped></style>
