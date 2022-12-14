<script setup>
  const props = defineProps({
    labelText: {
      type: String,
      default: "Label",
    },
    inputType: {
      type: String,
      default: "text",
      validator: (value) => ["text", "email", "password"].includes(value),
    },
    inputPlaceholder: {
      type: String,
    },

    // for v-model; two-way data binding for this component
    modelValue: String,
  });

  const emit = defineEmits(["update:modelValue"]);

  // for v-model
  const updateValue = (e) => {
    emit("update:modelValue", e.target.value);
  };
</script>

<template>
  <div>
    <label :for="labelText">{{ labelText }}</label>
    <br />
    <input
      :id="labelText"
      :placeholder="inputPlaceholder"
      :type="inputType"
      :value="modelValue"
      @input="updateValue"
      name=""
    />
  </div>
</template>

<style scoped></style>
