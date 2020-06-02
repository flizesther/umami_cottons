<template>
  <b-container>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4">Productos Umami</h1>
          <div class="list-group">
            <a href="#" class="list-group-item">Upenda</a>
            <a href="#" class="list-group-item">Meraki</a>
            <a href="#" class="list-group-item">Muselina</a>
            <a href="#" class="list-group-item">Bandanas</a>
            <a href="#" class="list-group-item">Sobres</a>
            <a href="#" class="list-group-item">Chupeteros</a>
            <a href="#" class="list-group-item">Toallitas Ü</a>
            <a href="#" class="list-group-item">Baberos</a>
            <a href="#" class="list-group-item">Mascarillas</a>
            <a href="#" class="list-group-item">Toalla con Goma</a>
            <a href="#" class="list-group-item">Toalla cambiador</a>
            <a href="#" class="list-group-item">Cestos de Algodón</a>
          </div>
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-9 products-row">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4 upenda">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-upenda>
                    <a href="#"><img class="card-img-top" src="/images/upenda/upenda-1.jpg" alt="upenda"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">Upenda</a>
                          </h4>
                          <h5>35 euros</h5>
                          <p class="card-text">Las Upendas son nuestras toallas, diseñadas para hacer más fácil la vida de papá y mamá</p>
                        </div>
                    <b-modal id="modal-center-upenda" centered title="Upenda">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top img-fluid" src="/images/upenda/upenda-2.jpg" alt="upenda">
                          <div class="card-body">
                            <h3 class="card-title">Upenda</h3>
                            <h4>35 Euros</h4>
                            <p class="card-text">Fueron clave en mi maternidad. Estas toallas miden 80x80cm y son tan útiles porque se colocan al cuello con un fácil snap.</p>
                          </div>
                        </div>
                  <!-- /.card -->
                      <div class="card card-outline-secondary my-4">
                        <div class="card-body">
                          <p>Así empiezas a disfrutar de bañar a tu bebé con dos manos, sin que acabes mojada con los chapoteos y secarlo es tan fácil!</p>
                          <p>Solo tienes que coger a tu bebé para abrazarlo y cubrirlo con los laterales de la Upenda para que esté protegido y seco.</p>
                          <p>Además, la Upenda lleva capucha pensando sobretodo en esos primeros meses tan delicados.</p>
                          <p>Las telas son de algodón 100%: una toall suave, y una tela de tu elección para hacer que tu toalla sea personalmente bonita.</p>
                          <hr>
                          <p class="bold text-center">Si no la tienes es porque aún no la has probado.</p>
                        </div>
                      </div>
                    </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 meraki">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-meraki>
                    <a href="#"><img class="card-img-top" src="/images/meraki/meraki-1.jpg" alt="meraki-1"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">Meraki</a>
                          </h4>
                          <h5>55 euros</h5>
                          <p class="card-text">Los Meraki son los poncho toallas para niñ@s más originales y gustosos!</p>
                        </div>
                    <b-modal id="modal-center-meraki" centered title="Meraki">
                    <div class="col-lg-12">
                      <div class="card mt-4">
                        <img class="card-img-top img-fluid" src="/images/meraki/meraki-2.jpg" alt="meraki-2">
                        <div class="card-body">
                          <h3 class="card-title">Meraki</h3>
                          <h4>55 euros</h4>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                        </div>
                      </div>
                  <!-- /.card -->
                      <div class="card card-outline-secondary my-4">
                        <div class="card-body">
                          <p>Para nosotros, su nombre lo dice todo. Meraki es una palabra que proviene del griego moderno, y signfica "hacer algo con amor y creatividad, poniendo el alma en ello".</p>
                          <p>El Meraki está diseñado para que gracias a su forma de poncho y su abertura amplia en el cuello sea fácil de poner y quitar. Además, hemos incorporado unos snaps laterales para poder ajustar el Meraki al cuerpo, y una amplia capucha para proteger la delicada cabecita de tu pequeñ@</p>                          <hr>
                          <hr>
                          <p>Están hechas en Algodón 100% y talla de alta de calidad, y están disponibles en dos tallas:</p>
                          <p>- Talla 1: de 1 a 4 años</p>
                          <p>- Talla 2: de 4 a 7 años</p>
                        </div>
                      </div>
                    </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 muselina">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-muselina>
                    <a href="#"><img class="card-img-top" src="/images/muselina/muselina-1.jpg" alt="muselina"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">Muselina</a>
                          </h4>
                          <h5>15 euros</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                    <b-modal id="modal-center-4" centered title="Muselina">
                    <div class="col-lg-12">
                      <div class="card mt-4">
                        <img class="card-img-top img-fluid" src="/images/muselina/muselina-2.jpg" alt="muselina">
                        <div class="card-body">
                          <h3 class="card-title">Muselina</h3>
                          <h4>15  euros</h4>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                        </div>
                      </div>
                      <div class="card card-outline-secondary my-4">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                          <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                          <hr>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                          <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                          <hr>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                          <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                          <hr>
                        </div>
                      </div>
                    </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 bandana">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-bandana>
                    <a href="#"><img class="card-img-top" src="/images/bandanas/bandana-1.jpg" alt=""></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">Bandana</a>
                          </h4>
                          <h5>8 euros</h5>
                          <p class="card-text">Adiós a las babas en la ropa!</p>
                        </div>
                    <b-modal id="modal-center-bandana" centered title="bandana">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top img-fluid" src="/images/bandanas/bandana-2.jpg" alt="">
                          <div class="card-body">
                            <h3 class="card-title">bandana</h3>
                            <h4>8 euros</h4>
                            <p class="card-text">Las bandanas, nuestras aliadas contra las babas y reflujos de nuestro bebé!</p>
                          </div>
                        </div>
                        <div class="card card-outline-secondary my-4">
                          <div class="card-body">
                          <p>Al igual que las upenda, las bandanas son de tela algodón 100% de tu elección y tela toalla por el reverso.</p>
                          <p> Se ponen en el cuello de tu bebé con un fácil snap y hace que tu bebé luzca precios@ a la vez que protege la ropita de ensuciarse.</p>
                          <p> Es una prenda más para llevar cada día, sobretodo si tu bebé está en periodo de salir dientes (habrás notado que produce más baba de lo normal) o si tu bebé tiene reflujos de leche, muy común en periodo de lactancia y bibes.</p>
                          <hr>
                          </div>
                        </div>
                      </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 sobres">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-sobres>
                    <a href="#"><img class="card-img-top" src="/images/sobres/sobre-1.jpg" alt="sobre"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">Sobres</a>
                          </h4>
                          <h5>12 euros</h5>
                          <p class="card-text">uno de nuestros MUST!</p>
                        </div>
                    <b-modal id="modal-center-sobres" centered title="Sobres de Muda">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top img-fluid" src="/images/sobres/sobre-2.jpg" alt="Sobre de Muda 2">
                          <div class="card-body">
                            <h3 class="card-title">Sobres</h3>
                            <h4>12 euros</h4>
                            <p class="card-text">Son bolsitas hechas de tela Algodón 100% (a tu elección), forrados y con un snap para el cierre.</p>
                          </div>
                        </div>
                        <!-- /.card -->
                        <div class="card card-outline-secondary my-4">
                          <div class="card-body">
                            <p>Antes no sabía que eran, y ahora no puedo salir sin ellos.</p>
                            <hr>
                            <p>Nuestros sobres de muda son primero usados para llevar "a salvo" y "bien organizado" las mudas de la primera puesta en el momento del parto, y también las cosas de la futura mamá</p>
                            <p>Pero luego su utilidad es tan amplia como tu imaginación: llevar la muda en el carro o en tu bolso, pañales, juguetes, tu ropa interior cuando te vas de viaje, y un largo etcétera.</p>
                          </div>
                        </div>
                    </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 chupeteros">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-chupeteros>
                    <a href="#"><img class="card-img-top" src="/images/chupetero.jpg" alt="chupetero"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">Chupeteros</a>
                          </h4>
                          <h5>8 euros</h5>
                          <p class="card-text">Se acabó perder más chupeteros!</p>
                        </div>
                    <b-modal id="modal-center-chupeteros" centered title="chupeteros">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top img-fluid" src="/images/chupetero.jpg" alt="chupetero">
                          <div class="card-body">
                            <h3 class="card-title">chupeteros</h3>
                            <h4>8 euros</h4>
                            <p class="card-text">Son tan molones, que las mamás y papás nos gustan, pero l@s peques lo adoran!</p>
                          </div>
                        </div>
                        <div class="card card-outline-secondary my-4">
                          <div class="card-body">
                            <p>Se acabó perder más chupetes!</p>
                            <hr>
                            <p>Cuélgate uno y no me perderás!</p>
                          </div>
                        </div>
                        <!-- /.card -->
                      </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 toallitas-u">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-toallitas-u>
                    <a href="#"><img class="card-img-top" src="/images/toallitas-u/toallitas-u-1.jpg" alt="toallitas-u-1"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">toallitas Ü</a>
                          </h4>
                          <h5>12 euros</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                    <b-modal id="modal-center-toallitas-u" centered title="toallitas Ü">
                    <div class="col-lg-12">
                      <div class="card mt-4">
                        <img class="card-img-top img-fluid" src="/images/toallitas-u/toallitas-u-2.jpg" alt="toallitas-u-2">
                        <div class="card-body">
                          <h3 class="card-title">toallitas Ü</h3>
                          <h4>12 euros</h4>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                        </div>
                      </div>
                      <div class="card card-outline-secondary my-4">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                          <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                          <hr>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                          <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                          <hr>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                          <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                          <hr>
                        </div>
                      </div>
                      </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 baberos">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-baberos>
                    <a href="#"><img class="card-img-top" src="/images/baberos/babero-1.jpg" alt="baberos-1"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">baberos</a>
                          </h4>
                          <h5>12 euros</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                    <b-modal id="modal-center-baberos" centered title="baberos">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top img-fluid" src="/images/baberos/babero-2.jpg" alt="">
                          <div class="card-body">
                            <h3 class="card-title">baberos</h3>
                            <h4>12 euros</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                          </div>
                        </div>
                        <div class="card card-outline-secondary my-4">
                          <div class="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                          </div>
                        </div>
                    </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 mascarillas">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-mascarillas>
                    <a href="#"><img class="card-img-top mascarilla" src="/images/mascarilla/mascarilla-1.jpg" alt="mascarillas"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">mascarillas</a>
                          </h4>
                          <h5>8 euros</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                    <b-modal id="modal-center-mascarillas" centered title="Mascarillas">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top mascarilla img-fluid" src="/images/mascarilla/mascarilla-2.jpg" alt="mascarillas">
                          <div class="card-body">
                            <h3 class="card-title">mascarillas</h3>
                            <h4>8 euros</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                          </div>
                        </div>
                  <!-- /.card -->
                        <div class="card card-outline-secondary my-4">
                          <div class="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                          </div>
                        </div>
                  <!-- /.card -->
                    </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 toalla-goma">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-4>
                    <a href="#"><img class="card-img-top" src="/images/upenda/upenda-11.jpg" alt=""></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">toalla-goma</a>
                          </h4>
                          <h5>12 euros</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                    <b-modal id="modal-center-toalla-goma" centered title="toalla-goma">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top img-fluid" src="/images/upenda/upenda-12.jpg" alt="">
                          <div class="card-body">
                            <h3 class="card-title">toalla-goma</h3>
                            <h4>12 euros</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                          </div>
                        </div>
                  <!-- /.card -->

                        <div class="card card-outline-secondary my-4">
                          <div class="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                          </div>
                        </div>
                  <!-- /.card -->

                    </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 toalla-cambiador">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-toalla-cambiador>
                    <a href="#"><img class="card-img-top" src="/images/upenda/upenda-14.jpg" alt=""></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">toalla-cambiador</a>
                          </h4>
                          <h5>12 euros</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                    <b-modal id="modal-center-toalla-cambiador" centered title="toalla-cambiador">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top img-fluid" src="/images/upenda/upenda-15.jpg" alt="">
                          <div class="card-body">
                            <h3 class="card-title">toalla-cambiador</h3>
                            <h4>12 euros</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                          </div>
                        </div>
                  <!-- /.card -->
                  <div class="card card-outline-secondary my-4">
                    <div class="card-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                      <hr>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                      <hr>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                      <hr>
                    </div>
                  </div>
                  <!-- /.card -->

                </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4 cestos-de-algodon">
              <div class="card h-100">
                <b-button v-b-modal.modal-center-cestos-de-algodon>
                    <a href="#"><img class="card-img-top" src="/images/cestas.jpg" alt="cesta"></a>
                        <div class="card-body">
                          <h4 class="card-title">
                            <a href="#">cestos-de-algodon</a>
                          </h4>
                          <h5>20 euros</h5>
                          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                        </div>
                    <b-modal id="modal-center-cestos-de-algodon" centered title="cestos-de-algodon">
                      <div class="col-lg-12">
                        <div class="card mt-4">
                          <img class="card-img-top img-fluid" src="/images/cestas.jpg" alt="cesta">
                          <div class="card-body">
                            <h3 class="card-title">cestos-de-algodon</h3>
                            <h4>20 euros</h4>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                          </div>
                        </div>
                  <!-- /.card -->
                        <div class="card card-outline-secondary my-4">
                          <div class="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                            <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                            <hr>
                          </div>
                        </div>
                  <!-- /.card -->
                    </div>
                  </b-modal>
                </b-button>
              </div>
            </div>
          </div>
          <!-- /.row -->
        </div>
      </div>
      <!-- /.row -->
    </div>
    <footer class="footer-distributed">
			<div class="footer-left">
				<h3>Umami Cottons</h3>
				<p class="footer-links">
					<a href="/">Nuestros Productos</a>
					|
					<a href="/">Sobre Umami</a>
					|
					<a href="/">Contáctanos</a>
					|
					<a href="/">Contact</a>
				</p>
			</div>
			<div class="footer-center">
				<div class="d-flex justify-content-center">
          <img class="w-50" src="/images/logoUC.jpg">
				</div>
        <div class="d-flex justify-content-center mx-auto my-4">Síguenos en:</div>
          <div class="footer-icons d-flex justify-content-center mx-auto">
					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-instagram"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-youtube"></i></a>
				</div>
        <p class="footer-company-name d-flex justify-content-center">© 2020 Umami Cottons Company.</p>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
            Síguenos en:
          <div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:umamicottons@gmail.com">umamicottons@gmail.com</a></p>
				</div>
			</div>
		</footer>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: "Nuestros productos"
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
.btn-secondary {
    color: #fff;
    background-color: #d6d8da;
    border-color: #bfc0c2;
}
a {
    color: #2c292f;
}
.products-row {
  margin-top: 98px;
}
.mascarilla {
  border: 15px solid white;
}
footer{
	bottom: 0;
}
 
@media (max-height:800px){
	footer { position: static; }
	header { padding-top:40px; }
}
 
 
.footer-distributed{
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;
	padding: 50px 50px 60px 50px;
  padding-top: 80px;
  & a {
    color: $umami-pink;
  }
}
 
.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}
 
/* Footer left */
 
.footer-distributed .footer-left{
	width: 30%;
}
 
.footer-distributed h3{
	color:  $black;
	font: normal 36px;
	margin: 0;
}
 
/* The company logo */
 
.footer-distributed .footer-left img{
	width: 30%;
}
 
/* Footer links */
 
.footer-distributed .footer-links{
	color:  $grey;
	margin: 20px 0 12px;
}
 
.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}
 
.footer-distributed .footer-company-name{
	color:  $grey;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}
 
/* Footer Center */
 
.footer-distributed .footer-center{
	width: 35%;
}
 
 
.footer-distributed .footer-center i{
	background-color:  $grey;
	color: $grey;
	font-size: 25px;
	width: 38px;
	height: 38px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}
 
.footer-distributed .footer-center i.fa-envelope{
	font-size: 17px;
	line-height: 38px;
}
 
.footer-distributed .footer-center p{
	display: inline-block;
	color: #8f9296;
	vertical-align: middle;
	margin:0;
}
 
.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}
 
.footer-distributed .footer-center p a{
	color:  #e0ac1c;
	text-decoration: none;;
}
 
 
/* Footer Right */
 
.footer-distributed .footer-right{
	width: 30%;
}
 
.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  $grey;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}
 
.footer-distributed .footer-company-about span{
	display: block;
	color:  #8f9296;
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 20px;
}
 
.footer-distributed .footer-icons{
	margin-top: 25px;
}
 
.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	background-color:  $grey;
	border-radius: 2px;
 
	font-size: 20px;
	color: #8f9296;
	text-align: center;
	line-height: 35px;
 
	margin-right: 3px;
	margin-bottom: 5px;
}
 
/* Here is the code for Responsive Footer */
/* You can remove below code if you don't want Footer to be responsive */
 
 
@media (max-width: 880px) {
 
	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}
 
	.footer-distributed .footer-center i{
		margin-left: 0;
	}
 
}
</style>