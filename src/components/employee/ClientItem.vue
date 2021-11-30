<template>
    <v-container>
        <v-row justify='center'>
            <v-col cols='1' />
            <v-col cols='1' class="table2">
                {{clientIdx}}
            </v-col>
            <v-col cols='2' class="table2" >
                {{name}}
            </v-col>
            <v-col cols='3' class="table2">
                {{email}}
            </v-col>
            <v-col cols='1' class="table2">
                {{age}}
            </v-col>
            <v-col cols='1' class="table2">
                {{sex}}
            </v-col>
            <v-col cols='3' class="table2">
                {{tel}}
            </v-col>
            <v-col cols='1'></v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'clientList',
    props: [
            "clientIdx",
            "name",
            "email",
            "age",
            "sex",
            "tel",
        ],
}
</script>
<style >
    .table2 {
        
        text-align: center;
    }
</style>