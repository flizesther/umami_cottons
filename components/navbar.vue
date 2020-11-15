<template>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle
      target="nav-text-collapse"
      :class="{ opened: opened }"
      :aria-expanded="{ true: opened }"
      aria-label="Main Menu"
      class="menu"
      @click="opened = !opened"
    >
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </b-navbar-toggle>
    <b-navbar-brand>
      <a href="/">
        <b-img src="/images/logoUC.jpg" class="brand-image" fluid alt="Responsive image" />
      </a>
    </b-navbar-brand>
    <b-collapse id="nav-text-collapse" :class="{ 'opened collapse show d-block': opened }" is-nav>
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
export default {
  data: () => ({
    opened: false,
  }),
  methods: {
    redirect(url) {
      this.opened = !this.opened
      return this.$router.push(url)
    },
  },
}
</script>

<style lang="scss">
.brand-image {
  height: 50px;
}
.nav-titles {
  font-size: 20px;
}
.navbar {
  box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  z-index: 10;
  width: 100%;
  @media (min-width: 800px) {
    padding: 1.5em 3em 1.5em 3em;
  }
}
.navbar-expand-sm .navbar-nav .nav-link {
  padding-right: 2.5rem;
}
.navbar .nav-link {
  @media (max-width: 800px) {
    padding: 1.5rem 1rem;
  }
  padding: 0.5rem 1rem;
}

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
