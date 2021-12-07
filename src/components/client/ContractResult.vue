<template>
    <v-container>
        <v-row justify='center'>
            <br><br>
            <v-col cols='12'  class="table" style="font-size:1.4em; font-weight: 600;">
                계약 대기 건
            </v-col>
        </v-row>
        <br><br>
        <v-row justify='center'>
            <NotContractItem v-for="(item, index) in notContract"  :key="index" 
            :contractIdx="item.contractIdx" 
            :checkForm="item.checkForm" 
            :checkMoney="item.checkMoney" 
            :employeeIdx="item.employee.employeeIdx" 
            :insuranceType="item.insurance.decriminatorValue"
            />
        </v-row>

        <br><br><br>
        <v-row justify='center'>
            <br><br>
            <v-col cols='12'  class="table" style="font-size:1.4em; font-weight: 600;">
                계약 완료 건
            </v-col>
        </v-row><br><br>
        <v-row justify='center'>
            <ProveContractItem v-for="(item, index) in proveContract"  :key="index" 
            :contractIdx="item.contractIdx" 
            :checkForm="item.checkForm" 
            :checkMoney="item.checkMoney" 
            :employeeIdx="item.employee.employeeIdx" 
            :insuranceType="item.insurance.decriminatorValue"
            />
        </v-row>
    </v-container>
</template>

<script>
import NotContractItem from './NotContract.vue';
import ProveContractItem from './ProveContractItem.vue';
export default {
    created (){
        this.getContractList();
    },
    components : {
        NotContractItem, ProveContractItem
    },
    computed : {
        notContract : function(){
            return this.$store.getters.get_not_prove_my_contract;
        },
        proveContract : function(){
            return this.$store.getters.get_prove_contract;
        },
        userData : function(){
            return this.$store.getters.get_client_data;
        },
    },
    methods: {
        async getContractList(){
            try{
                await this.$store.dispatch('show_all_contract', {
                    clientIdx : this.userData.clientIdx
                })
            }catch(err){
                console.log(err)
            }
            console.log(this.notContract)
        },
    },
}
</script>