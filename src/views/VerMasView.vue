<template>
    <!-- Page Header Start -->
    <div class="container py-5 px-2 bg-primary">
        <div class="row py-5 px-4">
            <div class="col-sm-6 text-center text-md-left">
                <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Detalle</h1>
            </div>
            <div class="col-sm-6 text-center text-md-right">
                <div class="d-inline-flex pt-2">
                    <h4 class="m-0 text-white">
                        <!-- <a class="text-white" href="#">Inicio</a> -->
                        <RouterLink to="/" class="text-white">Inicio</RouterLink>
                    </h4>
                    <h4 class="m-0 text-white px-2">/</h4>
                    <h4 class="m-0 text-white">Detalle</h4>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- Blog Detail Start -->
    <div class="container py-5 px-2 bg-white">
        <div class="row px-4">
            <div class="col-12">
                <img class="img-fluid mb-4" :src="post.imagen" alt="Image">
                <h2 class="mb-3 font-weight-bold">{{ post.titulo }}</h2>
                <div class="d-flex">
                    <p class="mr-3 text-muted"><i class="fa fa-calendar-alt"></i> {{ post.fecha_publicacion }}</p>
                    <p class="mr-3 text-muted"><i class="fa fa-folder"></i> {{ (post.categoria) ? post.categoria.nombre : '' }}</p>
                    <p class="mr-3 text-muted"><i class="fa fa-comments"></i> {{ post.cant_comentarios }} Comentarios</p>
                </div>
                <p>{{ post.resumen }}</p>
                <div v-html="post.contenido"></div>
            </div>
            <div class="col-12 py-4">
                <button v-for="tag in post.tags" :key="tag" @click="filtrar(tag)" class="btn btn-sm btn-outline-primary mb-1">{{ tag }}</button>
            </div>

            <div class="col-12 py-4">
                <div class="btn-group btn-group-lg w-100">
                    <button @click="cambiarPost('anterior')" type="button" class="btn btn-outline-primary">
                        <i class="fa fa-angle-left mr-2"></i> Anterior
                    </button>
                    <button @click="cambiarPost('siguiente')" type="button" class="btn btn-outline-primary">
                        Siguiente <i class="fa fa-angle-right ml-2"></i>
                    </button>
                </div> 
            </div>

            <div class="col-12 py-4">
                <h3 class="mb-4 font-weight-bold">{{ post.cant_comentarios }} Comentarios</h3>
                <div v-for="coment in post.comentarios" :key="coment" class="media mb-4">
                    <img :src="'https://ui-avatars.com/api/?name='+ coment.usuario.name +'&background=007bff&color=fff'" alt="Image" class="mr-3 mt-1 rounded-circle" style="width:60px;">
                    <div class="media-body">
                        <h4>{{ coment.usuario.name }} <small><i>{{ coment.fecha }}</i></small></h4>
                        <p>{{ coment.comentario }}</p>
                        <!-- <button class="btn btn-sm btn-light">Reply</button> -->
                    </div>
                </div>
            </div>
            <div class="col-12">
                <h3 class="mb-4 font-weight-bold">Leave a comment</h3>
                <form>
                    <div class="form-group">
                        <label for="name">Name *</label>
                        <input type="text" class="form-control" id="name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email *</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="form-group">
                        <label for="website">Website</label>
                        <input type="url" class="form-control" id="website">
                    </div>

                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Leave Comment" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Blog Detail End -->


    <div>

        kabscjabscjkkbas {{ idPost }}
    </div>
</template>

<script>
    import axios from 'axios';
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router';

    export default {
        setup() {
            const router = useRouter();
            const post = ref({});
            let idPost = router.currentRoute.value.params.id;
            const baseUrl = 'http://hamiloblog.test/api';
            
            onMounted(() => {
                console.log(idPost);
                obtenerDatos();
            })

            const obtenerDatos = async () => {
                try{
                    const { data } = await axios.get(baseUrl + '/posts/' + idPost);
                    post.value = data.datos;
                    console.log(data.datos);
                    window.scrollTo(0,0);
                } catch (error){
                    console.log(error);
                }
            }

            const filtrar = (param) => {
                router.push({path: '/blog/' + param});
            }

            const cambiarPost = async (param) => { // param: anterior, siguiente
                try {
                    const { data } = await axios.get(baseUrl + '/posts/' + idPost + '/' + param);
                    // console.log(data);
                    let nuevoId = data.postId;
                    if(nuevoId != idPost){
                        router.push({path: '/vermas/'+ nuevoId});
                        idPost = nuevoId;
                        obtenerDatos();
                    } else {
                        alert('No hay más Posts!');
                    }
                } catch (error) {
                    console.log(error);   
                }
            }

            return {
                idPost,
                post,
                filtrar,
                cambiarPost,
            }
        }
    }
</script>

<style scoped>

</style>