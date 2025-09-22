<template>
    <div>
        <h1>Alumno</h1>
        <form>
            <label for="id">id:</label>
            <input type="text" id="id" v-model="id"></input>
            <label for="paterno">Paterno:</label>
            <input type="text" id="paterno" v-model="Paterno"></input>
            <label for="nombre">Materno:</label>
            <input type="text" id="materno" v-model="Materno"></input>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="Nombre"></input>
            <label for="nombre">Carrera:</label>
            <input type="text" id="carrera" v-model="Carrera"></input>
            <label for="nombre">Materias:</label>
            <input type="text" id="materias" v-model="Materias"></input>
        </form>
        <p>{{ id }}</p>
        <p>{{ paterno }}</p>
        <p>{{ materno }}</p>
        <p>{{ nombre }}</p>
        <p>{{ carrera }}</p>
        <p>{{ materias }}</p>
        <Domicilio />
    </div>
</template>
<script>
import Domicilio from './Domicilio.vue';
    export default{
        name: 'Alumno',
        components:{
            Domicilio
        },
        data(){
            return{
                id: '',
                Paterno: '',
                Materno: '',
                Nombre: '',
                Carrera: '',
                Materias: ''
            }
        }
    }
</script>
