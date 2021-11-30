<template>
    <v-container>
        <v-row justify='center'>
            <v-col cols='1' />
            <v-col cols='1' class="table">
                번호
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
            <v-col cols='3' class="table">
                연락처
            </v-col>
            <v-col cols='1'></v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='12'>
                <ClientItem v-for="(item, index) in clientList"  :key="index" 
                :clientIdx="item.clientIdx" 
                :name="item.name" 
                :email="item.email" 
                :age="item.age"
                :sex="item.sex"
                :tel="item.tel"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ClientItem from '../../components/employee/ClientItem.vue'
export default {
    created (){
        this.getClientList();
    },
    components : {
        ClientItem
    },
    data() {
        return {
            
        }
    },
    computed : {
        employeeData : function(){
            return this.$store.getters.get_employee_data;
        },
        clientList : function(){
            return this.$store.getters.get_client_list;
        }
    },
    methods: {
        async getClientList(){
            try{
                await this.$store.dispatch('show_client', {
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