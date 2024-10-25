<template>
  <footer class="bg-dark text-body-secondary py-4 ">
    <div class="container">
      <p class="float-end mb-1">
        <a href="#" class="voltar link-offset-2 link-underline link-underline-opacity-0">Voltar para o topo</a>
      </p>
      <div class="footer-color">
        <p class="mb-1">Netflix Brasil&copy; pagina feita consumindo API do TMDB!</p>
        <p>info@account.netflix.com</p>
        <p>Dúvidas? Ligue 0800 591 2876</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style scoped>
.voltar {
  color: #e9292c;
}

p{
  color:white;
}

footer{
  margin-top:70px;
}
</style>