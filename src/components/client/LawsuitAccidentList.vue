<template>
    <v-container>
        <v-row justify='center' >
            <v-col cols='1' class="table2">
                사고 번호 : {{accidentIdx}} 
            </v-col>
            <v-col cols='2' class="table2" >
                피해 금액 :{{damagePrice}}
            </v-col>
            <v-col cols='2' class="table2">
                날짜 : {{date}}
            </v-col>
            <v-col cols='2' class="table2">
                보험 : {{insuranceType}}
            </v-col>
            <v-col cols='1' class="table2">
                관리자 : {{employeeIdx}}
            </v-col>
            <v-col cols='2' class="table2">
                산정 금액 : {{measuredPrice}}
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'clientList',
    props: [
       "accidentIdx",
        "damagePrice",
        "email",
        "date",
        "insuranceType",
        "employeeIdx",
        "measuredPrice",
    ],
    methods : {
        
    }
}
</script>
<style >
    .table2 {
        
        text-align: center;
    }
</style>