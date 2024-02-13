import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '@/components/Inicio.vue';
import Registro from '@/components/Registro.vue';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro,
  },
  // Otras rutas de tu aplicación, si las tienes
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
