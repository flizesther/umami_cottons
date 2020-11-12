<template>
  <b-card v-if="!isAuth" title="Log In">
    <b-form @submit="login">
      <b-form-group id="emailGroup" label="Email" label-for="emailInput">
        <b-form-input
          id="emailInput"
          v-model="email"
          name="email"
          type="email"
          required
          autofocus
          placeholder="Email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="passwordGroup" label="Password" label-for="passwordInput">
        <b-form-input
          id="passwordInput"
          v-model="password"
          name="password"
          type="password"
          required
          placeholder="Password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>

    <b-alert v-if="error" show variant="warning">Error</b-alert>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      email: '',
      password: '',
      error: false,
    }
  },
  computed: {
    ...mapGetters('cms', ['isAuth']),
  },
  mounted() {
    if (this.isAuth) {
      this.redirect()
    }
  },
  methods: {
    async login(evt) {
      evt.preventDefault()
      await this.$store.dispatch('cms/login', {
        email: this.email,
        password: this.password,
      })
      if (this.isAuth) {
        this.redirect()
      } else {
        this.email = ''
        this.password = ''
        this.error = true
      }
    },
    redirect() {
      this.$router.push('/cms')
    },
  },
}
</script>
