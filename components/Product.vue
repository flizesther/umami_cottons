<template>
    <div class="card h-100">
        <b-button v-b-modal="`modal-center-${product.title}`">
            <a href="#"><img class="card-img-top" :src="product.image" :alt="product.image"></a>
                <div class="card-body">
                    <h4 class="card-title">
                    <a href="#">{{ product.title }}</a>
                    </h4>
                    <h5>{{ product.price }}</h5>
                    <p class="card-text">{{ product.shortDescription }}</p>
                </div>
            <b-modal :id="`modal-center-${product.title}`" centered :title="product.title" >
                <div class="col-lg-12">
                <div class="card mt-4">
                    <img class="card-img-top img-fluid" :src="product.modalImage" :alt="product.modalImage">
                    <div class="card-body">
                    <h3 class="card-title"> {{ product.title }}</h3>
                    <h4>{{ product.price }}</h4>
                    <p class="card-text">{{ product.modalDescriptionOne }}</p>
                    </div>
                </div>
            <!-- /.card -->
                <div class="card card-outline-secondary py-4">
                <div class="card-body">
                    <p>{{ product.modalDescriptionTwo }}</p>
                    <hr>
                    <p class="bold text-center">{{ product.modalDescriptionThree }}</p>
                </div>
                </div>
            </div>
            </b-modal>
        </b-button>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style>

</style>