<template>
    <header data-bs-theme="dark">
        <div class="collapse text-bg-dark" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4>Sobre</h4>
                        <p class="text-body-secondary">Bem-vindo à nossa página de catálogo de filmes, onde você
                            pode explorar uma vasta seleção de títulos de todos os gêneros! Descubra novas
                            histórias, reveja clássicos e encontre recomendações personalizadas para a sua próxima
                            sessão de cinema. Aqui, cada filme conta uma história, e estamos aqui para ajudar você a
                            encontrá-las!</p>
                    </div>
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4>Contatos</h4>
                        <ul class="list-unstyled">
                            <li><a href="https://x.com/NetflixBrasil?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                                    target="_blank" class="text-white">Twitter</a></li>
                            <li><a href="https://www.facebook.com/netflixbrasil/?locale=pt_BR" target="_blank"
                                    class="text-white">Facebook</a></li>
                            <li><a href="https://www.instagram.com/netflixbrasil/" target="_blank"
                                    class="text-white">Instagram</a></li>
                            <li><a href="https://www.youtube.com/channel/UCc1l5mTmAv2GC_PXrBpqyKQ" target="_blank"
                                    class="text-white">YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a href="#" class="navbar-brand d-flex align-items-center">
                    <img src="../../public/images/Netflix_Logo_RGB.png" alt="logo" width="100">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Navbar',

}
</script>

<style>

</style>