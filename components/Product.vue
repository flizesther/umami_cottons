<template>
    <div class="card h-100">
        <!-- <b-button> -->
        <a :href="`/producto/${product.title}`">
            <a><img class="card-img-top" :src="product.image" :alt="product.image"></a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">{{ product.title }}</a>
                    </h4>
                    <h5>{{ product.price }}</h5>
                    <p class="card-text">{{ product.shortDescription }}</p>
                </div>
            <!-- <b-modal :id="`modal-center-${product.title}`" centered :title="product.title" hide-footer>
                <div class="col-lg-12">
                <div class="card mt-4">
                    <img class="card-img-top img-fluid" :src="product.modalImage" :alt="product.modalImage">
                    <div class="card-body">
                    <h3 class="card-title"> {{ product.title }}</h3>
                    <h4>{{ product.price }}</h4>
                    <p class="card-text">{{ product.modalDescriptionOne }}</p>
                    </div>
                </div> -->
            <!-- /.card -->
                <!-- <div class="card card-outline-secondary py-4">
                <div class="card-body">
                    <p>{{ product.modalDescriptionTwo }}</p>
                    <hr>
                    <p class="bold text-center">{{ product.modalDescriptionThree }}</p>
                </div>
                </div>
            </div>
            </b-modal> -->
        <!-- </b-button> -->
        </a>
    </div>
</template>

<script>

export default {
    props: ['product']
}
</script>

<style lang="scss" scoped>
::v-deep .btn-primary {
    background-color:$umami-pink;
    border-color: unset;
}
::v-deep .btn-secondary {
    background-color: $grey;
}
// .modal-backdrop {
//   background-color: rgba(0,0,0,.0001) !important;
// }
.card-body {
  box-shadow: 0px 0px 38px 0px rgba(53, 59, 62, 0.24);
}
.card-text {
    font-family: 'Montserrat', sans-serif;
}
</style>