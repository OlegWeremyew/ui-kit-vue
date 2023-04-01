<script setup lang="ts">
import {ref, computed, Ref} from 'vue'
import useVuelidate, {Validation} from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'

const nameField = ref<string>('')
const emailField = ref<string>('')
const luckyField = ref<string>('')
const passwordField = ref<string>('')
const confirmPasswordField = ref<string>('')
const frontendField = ref<string>('')

const mustBeFrontend = (value: string): boolean => value.includes('frontend')

const rules = computed(() => ({
  nameField: {
    minLength: helpers.withMessage(`Минимальная длина: 3 символа`, minLength(3))
  },
  emailField: {
    email: helpers.withMessage('Вы ввели неверный email', email)
  },
  luckyField: {
    maxLength: helpers.withMessage(`Максимальная длина: 2 символа`, maxLength(3)),
    numeric: helpers.withMessage('Вы можете ввести только цифры', numeric)
  },
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
  frontendField: {
    frontendField: helpers.withMessage('Строка должна содержать слово frontend', mustBeFrontend)
  },
}))

const validate: Ref<Validation> = useVuelidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

const submitForm = (): void => {
  validate.value.$touch()
  if (validate.value.$error) return
  alert('Form submitted')
}
</script>

<template>
  <h1 class="heading-1">Inputs</h1>

  <form @submit.prevent="submitForm">
    <Input
        label="Your name"
        name="name"
        placeholder="Input your name"
        v-model:value="validate.nameField.$model"
        :error="validate.nameField.$errors"
    />

    <Input
        label="Your email"
        name="email"
        placeholder="Input your email"
        v-model:value="validate.emailField.$model"
        :error="validate.emailField.$errors"
    />

    <Input
        label="Your lucky number"
        name="lucky"
        placeholder="Input your lucky number"
        v-model:value="validate.luckyField.$model"
        :error="validate.luckyField.$errors"
    />

    <Input
        label="Your password"
        name="password"
        placeholder="Please input password"
        v-model:value="passwordField"
        type="password"/>

    <Input
        label="Confirm password"
        name="confirm"
        placeholder="Please confirm password"
        v-model:value="validate.confirmPasswordField.$model"
        :error="validate.confirmPasswordField.$errors"
        type="password"
    />

    <Input
        label="Frontend string"
        name="frontend"
        placeholder="Input string with frontend"
        v-model:value="validate.frontendField.$model"
        :error="validate.frontendField.$errors"
    />

    <Button label="Submit" color="primary"></Button>
  </form>
</template>