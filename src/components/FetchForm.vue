<script setup>
  import { onBeforeMount, reactive, ref } from "vue";
  import FetchFormField from "./FetchFormField.vue";
  import { userFormSubmit } from "../js/user_form_f.js";

  // TODO: form validation? suspense? component/css library? maybe Axios

  const email = "westseii8919@gmail.com"; // test
  const formSubmitCo = `https://formsubmit.co/${email}`; // test
  const fetchEndpoint = "https://frontend-take-home.fetchrewards.com/form"; // same for post
  const fetchEndpointData = ref();

  const userData = reactive({
    name: "",
    email: "",
    password: "",

    // selectable
    occupation: "",
    state: "",
  });

  // functionality
  // TODO: explore async components/suspense api
  const fetchData = async () => {
    const response = await fetch(fetchEndpoint);
    const data = await response.json();
    // console.log(response.ok);
    // console.log(response.status);
    fetchEndpointData.value = data;
  };

  const showDataModel = ref(false);
  const toggleDataModel = () => (showDataModel.value = !showDataModel.value);

  // lifecycle
  onBeforeMount(() => fetchData());
</script>

<template>
  <div>
    <h2>User form</h2>

    <form>
      <!-- full name, email, and password -->
      <FetchFormField
        input-name="name"
        input-placeholder="First Last"
        label-text="Full Name"
        v-model="userData.name"
      /><br />
      <FetchFormField
        input-name="email"
        input-type="email"
        label-text="Email"
        v-model="userData.email"
      /><br />
      <FetchFormField
        input-name="password"
        input-type="password"
        label-text="Password"
        v-model="userData.password"
      /><br />

      <!-- occupation and state -->
      <div>
        <label for="occupation">Occupation</label><br />
        <select
          id="occupation"
          name="occupation"
          v-model="userData.occupation"
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
            v-for="job in fetchEndpointData.occupations"
            v-if="fetchEndpointData"
          >
            {{ job }}
          </option>
        </select>
      </div>
      <br />

      <div>
        <label for="state">State</label><br />
        <select
          id="state"
          name="state"
          v-model="userData.state"
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
            v-for="state in fetchEndpointData.states"
            v-if="fetchEndpointData"
          >
            {{ state.abbreviation }} &#8211; {{ state.name }}
          </option>
        </select>
      </div>
      <br />

      <button
        @click.prevent="userFormSubmit(userData, fetchEndpoint)"
        type="submit"
      >
        Submit
      </button>
    </form>
    <hr class="fetch-rule-thin" />

    <!-- toggle data object display -->
    <button @click="toggleDataModel">Data model show/hide</button>
    <div
      class="display-binds"
      v-show="showDataModel"
    >
      <pre>{{ userData }}</pre>
    </div>
  </div>
</template>

<style scoped>
  .display-binds {
    color: hsl(0, 0%, 67%);
    font-size: 1.2rem;
    user-select: none;
  }
</style>
