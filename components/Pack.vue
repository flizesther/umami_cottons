<template>
    <div class="card h-100">
        <!-- <b-button> -->
        <a :href="`/pack/${pack.title}`">
            <a><img class="card-img-top" :src="pack.image" :alt="pack.image"></a>
                <div class="card-body">
                    <h4 class="card-title font-weight-bold">
                    <a href="#">{{ pack.title }}</a>
                    </h4>
                    <h5>{{ pack.price }}</h5>
                    <p class="card-text">{{ pack.shortDescription }}</p>
                </div>
            <!-- <b-modal :id="`modal-center-${pack.title}`" centered :title="pack.title" hide-footer>
                <div class="col-lg-12">
                <div class="card mt-4">
                    <img class="card-img-top img-fluid" :src="pack.modalImage" :alt="pack.modalImage">
                    <div class="card-body">
                    <h3 class="card-title"> {{ pack.title }}</h3>
                    <h4>{{ pack.price }}</h4>
                    <p class="card-text">{{ pack.modalDescriptionOne }}</p>
                    </div>
                </div> -->
            <!-- /.card -->
                <!-- <div class="card card-outline-secondary py-4">
                <div class="card-body">
                    <p>{{ pack.modalDescriptionTwo }}</p>
                    <hr>
                    <p class="bold text-center">{{ pack.modalDescriptionThree }}</p>
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
    props: ['pack']
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