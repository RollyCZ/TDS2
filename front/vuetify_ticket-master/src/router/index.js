import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sede from '../components/Sede.vue'
import Login from '../components/Login.vue'
import Usuario from '../components/Usuario.vue'
import Servicio from '../components/Servicio.vue'
import Equipo from '../components/Equipo.vue'
import Ticket from '../components/Ticket.vue'
import Tipoticket from '../components/Tipoticket.vue'
import AsigUsuario from '../components/AsigUsuario.vue'

Vue.use(VueRouter)
//se agregan las rutas para las vistas amigables, declaran su ruta de su crud
var router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      administrador: true 
    }
  },
  {
    path: '/AsigUsuario',
    name: 'AsigUsuario',
    component: AsigUsuario,
    meta:{
      libre: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      libre: true
    }
  },
  {
    path: '/sede',
    name: 'sede',
    component: Sede,
    meta:{
      administrador: true 
    }
  },
  {
    path: '/ticket',
    name: 'ticket',
    component: Ticket,
    meta:{
      administrador: true 
    }
  },
  {
    path: '/tipoticket',
    name: 'tipoticket',
    component: Tipoticket,
    meta:{
      administrador: true 
    }
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario,
    meta:{
      administrador: true 
    }
  },
  {
    path: '/servicio',
    name: 'servicio',
    component: Servicio,
    meta:{
      administrador: true 
    }
  },
  {
    path: '/equipo',
    name: 'equipo',
    component: Equipo,
    meta:{
      administrador: true 
    }
  }
]

});
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.libre)){
    next();
  } else if(store.state.usuario && store.state.usuario.rol =='admin'){
    if(to.matched.some(record=>record.meta.administrador)){
        next();
    } 
  }else{
    next({name : 'login'});
  }
});

export default router
