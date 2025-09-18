<template>
    <div>
        <h1>Mi primer componente</h1>

        <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" v-model="nombre">
            <label for="edad">Edad:</label>
            <input type="number" id="edad" v-model="edad">
        </form>
        <p>{{ nombre }}</p>
        <p>{{ edad }}</p>
    </div>
</template>

<script>
export default{
    name:'Componente1',

   /*  props:{
        var1,
        var2,
    }, */

    data() {
        return {
            nombre:'Daniel',
            edad:0,
        };
    },
    methods:{
        imprime(){

        }
    }

}
</script>

<style>
</style>