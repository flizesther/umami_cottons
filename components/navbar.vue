<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-navbar-brand>
      <a href="/">
        <b-img src="/images/logoUC.jpg" class="brand-image" fluid alt="Responsive image" />
      </a>
    </b-navbar-brand>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav class="nav-titles">
        <b-nav-item to="/" exact>Inicio</b-nav-item>
        <b-nav-item to="/comprar">¿Cómo comprar?</b-nav-item>
        <b-nav-item to="/productos">Nuestros Productos</b-nav-item>
        <b-nav-item to="/nuestras-telas">Nuestras Telas</b-nav-item>
        <b-nav-item to="/sobre-umami">Sobre Umami_cottons</b-nav-item>
        <b-nav-item to="/contacta">Contáctanos</b-nav-item>
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
.nav-titles{
  font-size:20px;
}
</style>
