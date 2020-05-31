<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand>
      <b-img src="/images/logoUC.jpg" class="brand-image" fluid alt="Responsive image"></b-img>
    </b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact>Inicio</b-nav-item>
        <b-nav-item to="/buy">¿Cómo comprar?</b-nav-item>
        <b-nav-item to="/products">Nuestros Productos</b-nav-item>
        <b-nav-item to="/nuestras-telas">Nuestras Telas</b-nav-item>
        <b-nav-item to="/about">Sobre Umami_cottons</b-nav-item>
        <b-nav-item to="/contact-us">Contáctanos</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
.brand-image {
  height:50px;
}
</style>
