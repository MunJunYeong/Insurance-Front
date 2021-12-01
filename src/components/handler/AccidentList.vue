<template>
    <v-container>
        <v-row justify='center'>
            <v-col cols='1' />
            <v-col cols='1' class="table2">
                {{accidentIdx}}
            </v-col>
            <v-col cols='1' class="table2">
                {{clientIdx}}
            </v-col>
            <v-col cols='2' class="table2">
                {{name}}
            </v-col>
            <v-col cols='2' class="table2">
                {{damagePrice}}
            </v-col>
            <v-col cols='2' class="table2">
                {{insuranceType}}
            </v-col>
            <v-col cols='3' class="table2">
                {{date}}
            </v-col>
            <v-col cols='1'></v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'accidentList',
    props: [
            "accidentIdx",
            "clientIdx",
            "name",
            "damagePrice",
            "insuranceType",
            "date",
        ],
}
</script>