<template>
  <b-container class="contain-width">
    <div>hola</div>
    <h1 class="d-flex justify-content-center py-4">Nuestro equipo</h1>
    <p class="d-flex justify-content-center text-center">
      El responsable de esta aventura tiene un nombre, Simón.
      Como mamá primeriza había mil cosas que han sido un auténtico descubrimiento.
      Entre otras, nadie me había explicado lo enternecedor, divertido y a la vez complicado que era bañar a un recién nacido.
      Con esta idea revoloteando en mi cabeza, puse mis manos, mi cabeza y mi lápiz a pensar en un patrón, solo hizo poner una pizca de amor y surgió la "upenda" que significa "amor" en swailii.
    </p>
    <p class="d-flex justify-content-center text-center">
      Así comenzó esta idea loca pero llena de pasión que quiero compartir con todos vosotros.
      Esta idea, la compartí con mi amiga Esther, a la que conocí en un viaje maravilloso en las tierras vikingas de Bergen (Noruega) y fue compartirlo con ella, cuando muchas ideas más empezaron a surgir.
    </p>
    <p class="d-flex justify-content-center text-center">
      Por supuesto, Valentina, no puede faltar en las personas que formamos umami_cottons. Sus consejos son sabios y sus manos son pura habilidad y amor. Cose como si todo fuera sencillo, como si lo hubiera hecho toda la vida... esperad!... lo que lleva haciendo toda la vida, es por eso que la sabiduría y la experiencia hacen que las prendas umami_cottons estén cosidas tan bien y con tanta delicadeza!
    </p>
    <p class="d-flex justify-content-center text-center">
      Las tres tenemos la misma ilusión, hacer la vida de la mamá/ el papá y el bebé más sencilla, más bonita y con más disfrute. y cómo se puede hacer? Teniendo las mejores telas del mercado: 100% algodón con el diseño más divertido y original, el modelo mas adaptable a tus necesidades y hechas con sentido, con amor y con paciencia.
      Queremos que la experiencia de tener un peque sobre tus brazos esté acompañado de lo mejor. 
    </p>
    <p class="d-flex justify-content-center text-center text-bold">
      Esto lo comprobarás, cuando tengas tu prenda de umami cottons, anímate y pide ya el tuyo!</p>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: "Sobre nosotros"
    };
  }
};
</script>

<style lang="scss" scoped>

@font-face {
  font-family: "merlodAutre";
  src: url("../assets/fonts/MerlodAutre-Regular.otf");
}
* {
  font-family: "merlodAutre";
}

.contain-width {
  max-width: 800px;
  font-size: 20px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
}
.text-bold {
  font-weight: bold;
  color: $umami-pink;
}
</style>
