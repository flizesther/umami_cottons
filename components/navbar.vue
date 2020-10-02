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

<style lang="scss">
.brand-image {
  height:50px;
}
.nav-titles{
  font-size:20px;
}
.navbar {
  box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  z-index: 10;
  width:100%;
  @media (max-height:800px){
    padding: 1.5em 3em 1.5em 3em;
  }
}
</style>
