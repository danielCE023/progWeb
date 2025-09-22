<template>
    <div>
        <h1>Domicilio</h1>
        <form>
            <label for="calle">Calle:</label>
            <input type="text" id="calle" v-model="Calle">
            <label for="nExt">Numero Ext:</label>
            <input type="text" id="nExt" v-model="NumeroExt">
            <label for="nInt">Numero Int:</label>
            <input type="text" id="nInt" v-model="NumeroInt">
            <label for="colonia">Colonia:</label>
            <input type="text" id="colonia" v-model="Colonia">
            <label for="CP">CP:</label>
            <input type="text" id="CP" v-model="CP">
            <label for="ciudad">Ciudad:</label>
            <input type="text" id="ciudad" v-model="Ciudad">
        </form>
        <p>{{ Calle }}</p>
        <p>{{ NumeroExt }}</p>
        <p>{{ NumeroInt }}</p>
        <p>{{ Colonia }}</p>
        <p>{{ CP }}</p>
        <p>{{ Ciudad }}</p>
    </div>
</template>
<script>
    export default{
        name:'Domicilio',
        data(){
            return{
                Calle: '',
                NumeroExt: '',
                NumeroInt: '',
                Colonia: '',
                CP: '53490',
                Ciudad: ''

            }
        }
    }
</script>