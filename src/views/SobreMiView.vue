<template>
    <!-- Page Header Start -->
    <div class="container py-5 px-2 bg-primary">
        <div class="row py-5 px-4">
            <div class="col-sm-6 text-center text-md-left">
                <h1 class="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">Sobre mí</h1>
            </div>
            <div class="col-sm-6 text-center text-md-right">
                <div class="d-inline-flex pt-2">
                    <h4 class="m-0 text-white">
                        <!-- <a class="text-white" href="#">Inicio</a> -->
                        <RouterLink to="/" class="text-white">Inicio</RouterLink>
                    </h4>
                    <h4 class="m-0 text-white px-2">/</h4>
                    <h4 class="m-0 text-white">Sobre mí</h4>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- About Start -->
    <div class="container bg-white pt-5">
        <div class="row px-3 pb-5">
            <div class="col-md-12">
                <h2 class="mb-4 font-weight-bold">Dev fullstack con amplia experiencia</h2>
                <img class="img-fluid float-left w-50 mr-4 mb-3" src="/persona.png" alt="Image">
                <p class="m-0">
                    Como desarrollador Full Stack con amplia experiencia, he navegado por las profundidades del desarrollo de software, explorando tanto el front-end como el back-end con destreza y pasión. Mi viaje comenzó en las líneas de código, donde tejí interfaces de usuario elegantes y funcionales utilizando HTML, CSS y JavaScript. La creación de experiencias de usuario fluidas y cautivadoras es mi especialidad.
                    <br>
                    En el back-end, he forjado soluciones robustas y escalables. Mi cinturón de herramientas incluye lenguajes como Python, Java, PHP y Node.js. He construido y mantenido bases de datos, implementado lógica empresarial y asegurado la integridad de las aplicaciones.
                    <br>
                    Además de mi dominio técnico, soy un apasionado de la gestión de servidores, la implementación en la nube y las pruebas automatizadas. Mi enfoque holístico me permite abordar proyectos desde la concepción hasta la implementación, garantizando la calidad y la eficiencia en cada paso.
                    <br>
                    En resumen, soy un arquitecto de soluciones versátil, capaz de tejer hilos de código en una sinfonía funcional. Mi objetivo es crear experiencias digitales excepcionales que impacten positivamente a los usuarios y las empresas.
                </p>
            </div>
            <div class="col-md-12 pt-4">
                <div class="d-flex flex-column skills">
                    <div class="progress w-100 mb-4">
                        <div class="progress-bar" role="progressbar" style="width: 90%;" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">HTML</div>
                    </div>
                    <div class="progress w-100 mb-4">
                        <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">CSS</div>
                    </div>
                    <div class="progress w-100 mb-4">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">JavaScript</div>
                    </div>
                    <div class="progress w-100 mb-4">
                        <div class="progress-bar" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">Vue.js</div>
                    </div>
                    <div class="progress w-100 mb-4">
                        <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">PHP</div>
                    </div>
                    <div class="progress w-100 mb-4">
                        <div class="progress-bar" role="progressbar" style="width: 80%;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Laravel</div>
                    </div>
                    <div class="progress w-100 mb-4">
                        <div class="progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">API REST</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->


</template>

<script>
    export default {
        setup() {
            return {

            }
        }
    }
</script>
