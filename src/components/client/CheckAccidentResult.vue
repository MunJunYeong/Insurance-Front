<template>
    <v-container>
        <v-row justify='center'>
            <br><br>
            <v-col cols='12'  class="table">
                사고 신고 대기건
            </v-col>
        </v-row>
        <br><br>
        <v-row justify='center'>
            <NotProveAccidentList v-for="(item, index) in notProveAccident"  :key="index" 
            :accidentIdx="item.accidentIdx" 
            :damagePrice="item.damagePrice" 
            :date="item.date" 
            :insuranceType="item.insurance.decriminatorValue"
            />
        </v-row>

        <br><br><br>
        <v-row justify='center'>
            <br><br>
            <v-col cols='12'  class="table">
                사고 신고 승인건
            </v-col>
        </v-row><br><br>
        <v-row justify='center'>
            <ProveAccidentList v-for="(item, index) in proveAccident"  :key="index" 
            :accidentIdx="item.accidentIdx" 
            :damagePrice="item.damagePrice" 
            :date="item.date" 
            :insuranceType="item.insurance.decriminatorValue"
            :employeeIdx="item.employee.employeeIdx" 
            :measuredPrice="item.measuredPrice" 
            />
        </v-row>
    </v-container>
</template>

<script>
import ProveAccidentList from '../../components/client/ProveAccidentList.vue';
import NotProveAccidentList from '../../components/client/NotProveAccidentList.vue';
export default {
    created (){
        this.getClientList();
    },
    components : {
        ProveAccidentList , NotProveAccidentList
    },
    computed : {
        notProveAccident : function(){
            return this.$store.getters.get_not_prove_my_accident;
        },
        proveAccident : function(){
            return this.$store.getters.get_prove_my_accident;
        },
        userData : function(){
            return this.$store.getters.get_client_data;
        },
    },
    methods: {
        async getClientList(){
            try{
                await this.$store.dispatch('show_all_accident', {
                    clientIdx : this.userData.clientIdx
                })
            }catch(err){
                console.log(err)
            }
            console.log(this.proveAccident)
        },
    },
}
</script>