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
                최종 계약
            </v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='12'>
                <FinalContractItem v-for="(item, index) in contractList"  :key="index" 
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
import FinalContractItem from './FinalContractItem.vue';
export default {
    name : 'finalPayment',
    components : {
        FinalContractItem
    },
    created (){
        this.getContract();
    },
    computed : {
        employeeData : function(){
            return this.$store.getters.get_employee_data;
        },
        contractList : function(){
            return this.$store.getters.get_final_contract_list;
        }
    },
    methods: {
        async getContract(){
            try{
                await this.$store.dispatch('get_contract_final_contract', {
                })
            }catch(err){
                console.log(err)
            }
        },
    },
}
</script>