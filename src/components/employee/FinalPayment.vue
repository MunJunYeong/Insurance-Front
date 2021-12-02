<template>
    <v-container>
        <v-row justify='center'>
            <v-col cols='1' class="table">
                계약 번호
            </v-col>
            <v-col cols='2' class="table">
                이름
            </v-col>
            <v-col cols='3' class="table">
                이메일
            </v-col>
            <v-col cols='1' class="table">
                나이
            </v-col>
            <v-col cols='1' class="table">
                성별
            </v-col>
            <v-col cols='2' class="table">
                연락처
            </v-col>
            <v-col cols="1" class="table" >
                수령 확인
            </v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='12'>
                <AccidentItem v-for="(item, index) in contractList"  :key="index" 
                :contractIdx="item.contractIdx" 
                :name="item.client.name" 
                :email="item.client.email" 
                :age="item.client.age"
                :sex="item.client.sex"
                :tel="item.client.tel"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import AccidentItem from './AccidentItem.vue';
export default {
    name : 'finalPayment',
    components : {
        AccidentItem
    },
    created (){
        this.getContract();
    },
    computed : {
        employeeData : function(){
            return this.$store.getters.get_employee_data;
        },
        contractList : function(){
            return this.$store.getters.get_contract_money_list;
        }
    },
    methods: {
        async getContract(){
            try{
                await this.$store.dispatch('get_contract_check_money', {
                })
            }catch(err){
                console.log(err)
            }
        },
    },
}
</script>