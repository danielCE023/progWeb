import { createRouter, createWebHistory } from 'vue-router'
import Componente1 from '@/Componente1.vue'
import Domicilio from '../../Domicilio.vue'
import Alumno from '../../Alumno.vue'
import ListaMaterias from '../../ListaMaterias.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //path: '/',            
      //name: 'Componente1',
      //component: Componente1

      path: '/domicilio',
      name: 'Domicilio',
      component: Domicilio
    },
    {
      path: '/alumno',
      name: 'Alumno',
      component: Alumno
    },
    {
      path: 'listaMaterias',
      name: 'ListaMaterias',
      component: ListaMaterias
    }
    
  ],
})

export default router
