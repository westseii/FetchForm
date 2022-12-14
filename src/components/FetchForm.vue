<script setup>
  import { onBeforeMount, onMounted, reactive, ref } from "vue";
  import FetchFormField from "./FetchFormField.vue";

  const endpoint = "https://frontend-take-home.fetchrewards.com/form";
  const endpointData = ref();

  const userValues = reactive({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
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
      v-model="userValues.name"
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
    <br />

    <select
      id=""
      name=""
    >
      <option
        :value="job"
        v-for="job in endpointData.occupations"
        v-if="endpointData"
      >
        {{ job }}
      </option>
    </select>
    <br /><br />
    <select
      id=""
      name=""
    >
      <option
        :value="state.abbreviation"
        v-for="state in endpointData.states"
        v-if="endpointData"
      >
        {{ state.abbreviation }} &#8211; {{ state.name }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
