<template>
  <section class="container">
    <div>
      <div class="logo">
        <div class="d-flex justify-content-center">
          <img class="d-none d-lg-block w-25" src="/images/logoUC.jpg">
        </div>
      </div>
      <h1 class="title">
        Umami Cottons
      </h1>
      <h2 class="subtitle">
        Content Management System
      </h2>
      <div class="links">
        <a
          href="https://umamicottons.com/"
          target="_blank"
          class="button--green">umamicottons.com</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'cms'
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  text-align: center;
  padding-bottom: 15px;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

