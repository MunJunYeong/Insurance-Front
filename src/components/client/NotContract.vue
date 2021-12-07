<template>
    <v-container>
        <v-row justify='center'>
            <v-col cols='1' class="table2">
                계약 번호 : {{contractIdx}} 
            </v-col>
            <v-col cols='2' class="table2" >
                인수검사 여부 :{{checkForm}}
            </v-col>
            <v-col cols='2' class="table2">
                수령확인 여부 : {{checkMoney}}
            </v-col>
            <v-col cols='2' class="table2">
                담당자 : {{employeeIdx}}
            </v-col>
            <v-col cols='2' class="table2">
                보험종류 : {{insuranceType}}
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: '',
    props: [
       "contractIdx",
        "checkForm",
        "checkMoney",
        "employeeIdx",
        "insuranceType",
    ],
    methods : {
        // clickIdea(accidentIdx){
        //     this.$router.push({path: `client/${accidentIdx}`});
        // },
    }
}
</script>
<style >
    .table2 {
        
        text-align: center;
    }
</style>