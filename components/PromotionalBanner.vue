<template>
  <b-container fluid class="fluid promotional-banner"
    >Pedidos de más de 50 euros, los gastos de envíos son
    gratuitos!</b-container
  >
</template>

<script>
export default {}
</script>

<style lang="scss">
.promotional-banner {
  width: 100%;
  height: 50px;
  font-size: 22px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: $umami-pink;
  @media (min-height: 800px) {
    font-size: 18px;
    text-align: center;
    padding: 10px 5px;
    color: white;
  }
}
</style>
