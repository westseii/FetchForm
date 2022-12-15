<script setup>
  import { onBeforeMount, reactive, ref } from "vue";
  import FetchFormField from "./FetchFormField.vue";

  const endpoint = "https://frontend-take-home.fetchrewards.com/form";
  const endpointData = ref();

  const userValues = reactive({
    name: "",
    email: "",
    password: "",

    // selectable
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

    <!-- full name, email, and password -->
    <FetchFormField
      input-placeholder="First Last"
      label-text="Full Name"
      v-model="userValues.name"
    /><br />
    <FetchFormField
      input-type="email"
      label-text="Email"
      v-model="userValues.email"
    /><br />
    <FetchFormField
      input-type="password"
      label-text="Password"
      v-model="userValues.password"
    /><br />

    <!-- occupation and state -->
    <label for="occupation">Occupation</label><br />
    <select
      id="occupation"
      name=""
      v-model="userValues.occupation"
    >
      <option
        disabled
        selected
        value=""
      >
        Select an Occupation
      </option>
      <option
        :value="job"
        v-for="job in endpointData.occupations"
        v-if="endpointData"
      >
        {{ job }}
      </option>
    </select>
    <br /><br />

    <label for="state">State</label><br />
    <select
      id="state"
      name=""
      v-model="userValues.state"
    >
      <option
        disabled
        selected
        value=""
      >
        Select a State
      </option>
      <option
        :value="state.abbreviation"
        v-for="state in endpointData.states"
        v-if="endpointData"
      >
        {{ state.abbreviation }} &#8211; {{ state.name }}
      </option>
    </select>
    <br /><br />

    <!-- view data object -->
    <div>{{ userValues }}</div>
  </div>
</template>

<style scoped></style>
