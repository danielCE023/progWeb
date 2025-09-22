<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Clave</th>
                    <th>Materia</th>
                    <th>Creditos</th>
                    <th>Horas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,Indice) in materias">
                    <td>{{ item.Clave }}</td>
                    <td>{{ item.Nombre }}</td>
                    <td>{{ item.Creditos }}</td>
                    <td>{{ item.Horas }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default{
        name: 'ListaMaterias',
        data(){
            return{
                materias:[{
                    Clave: '001',
                    Nombre: 'Calculo1',
                    Creditos: 4,
                    Horas: 4
            }]
            }
        }
    }
</script>