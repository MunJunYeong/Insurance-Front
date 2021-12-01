<template>
    <v-container>
        <v-row justify='center'>
            <v-col cols='1' />
            <v-col cols='1' class="table">
                사고 번호
            </v-col>
            <v-col cols='1' class="table">
                고객 번호
            </v-col>
            <v-col cols='2' class="table">
                고객 이름
            </v-col>
            <v-col cols='2' class="table">
                피해 금액
            </v-col>
            <v-col cols='2' class="table">
                보험 종류
            </v-col>
            <v-col cols='3' class="table">
                날짜
            </v-col>
            <v-col cols='1'></v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='12'>
                <AccidentList v-for="(item, index) in accidentList"  :key="index"
                :accidentIdx="item.accidentIdx" 
                :clientIdx="item.client.clientIdx"
                :name="item.client.name"
                :damagePrice="item.damagePrice"
                :insuranceType="item.insurance.decriminatorValue"
                :date="item.date"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import AccidentList from '../../components/handler/AccidentList.vue';
export default {
    created (){
        this.getClientList();
    },
    components : {
        AccidentList
    },
    data() {
        return {
            
        }
    },
    computed : {
        employeeData : function(){
            return this.$store.getters.get_employee_data;
        },
        accidentList : function(){
            return this.$store.getters.get_accident_list;
        }
    },
    methods: {
        async getClientList(){
            try{
                await this.$store.dispatch('show_accident', {
                })
            }catch(err){
                console.log(err)
            }
        },

    },
}
</script>
<style >
    .table {
        border-top: black solid 1px; border-bottom: black solid 1px;
        text-align: center;
    }
</style>