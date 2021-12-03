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
                만기 처리
            </v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='12'>
                <ExpirationItem v-for="(item, index) in contractList"  :key="index" 
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
import ExpirationItem from './ExpirationItem.vue'
export default {
    name : 'expiration',
    components : {
        ExpirationItem
    },
    created (){
        this.getContract();
    },
    computed : {
        employeeData : function(){
            return this.$store.getters.get_employee_data;
        },
        contractList : function(){
            return this.$store.getters.get_contract_expiration;
        }
    },
    
    methods: {
        async getContract(){
            try{
                await this.$store.dispatch('get_contract_expiration', {
                })
            }catch(err){
                console.log(err)
            }
        },
    },
}    
</script>