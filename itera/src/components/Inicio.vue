<template>
  <div class="navbar">
    <div class="background-image"></div>
    <div class="i-tera">
      <img src="https://i.ibb.co/ns0gQLh/Iter-a-1-removebg.png" alt="i-tera">
    </div>
    <div class="nav-links">
      <router-link class="nav-link" to="/">Inicio</router-link>
      <router-link class="nav-link" to="/registro">Registro</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  color: #f6f6f6;
  display: flex;
  flex-direction: column; /* Para alinear elementos verticalmente */
  justify-content: center; /* Para centrar verticalmente */
  align-items: center; /* Para centrar horizontalmente */
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 128%;
  background-image: url('https://cdn2.hubspot.net/hubfs/3416190/website/aniversario/wallpaper/wallpaper_descargable-04.jpg');
  background-size: cover; /* Ajusta el tamaño de la imagen de fondo */
  background-position: center; /* Centra la imagen de fondo */
  z-index: -1; /* Para asegurarse de que la imagen de fondo esté detrás de los otros elementos */
}

.i-tera img {
  max-height: 70vh; /* Ajusta el tamaño máximo de la imagen */
}

.nav-links {
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Añade un margen superior entre la imagen y los enlaces */
}

.nav-link {
  padding: 10px 30px;
  margin-top: 10px; /* Añade un margen entre los enlaces */
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none; /* Quita la decoración de subrayado */
  color: #f6f6f6;
  cursor: pointer;
}

.nav-link:hover {
  background-color: #423a38;
}
</style>
