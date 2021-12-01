<template>
    <v-container>
        <v-row >
            <v-col cols='1' class="table">
                번호
            </v-col>
            <v-col cols='2' class="table">
                이름
            </v-col>
            <v-col cols='3' class="table">
                주민번호
            </v-col>
            <v-col cols='1' class="table">
                나이
            </v-col>
            <v-col cols='1' class="table">
                연락처
            </v-col>
            <v-col cols='2' class="table">
                주소
            </v-col>
            <v-col cols='1' class="table">
                인수검사
            </v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='12'>
                <UwClientItem v-for="(item, index) in clientList"  :key="index" 
                :clientIdx="item.clientIdx" 
                :name="item.name" 
                :ssn="item.ssn" 
                :age="item.age"
                :tel="item.tel"
                :address="item.address"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import UwClientItem from '../../components/uw/UwClientItem.vue'
export default {
    name : 'uw',
    components : {
        UwClientItem
    },
    created (){
        this.getClientList();
    },
    computed : {
        clientList : function(){
            return this.$store.getters.get_uw_client_list;
        }
    },
    methods: {
        async getClientList(){
            try{
                await this.$store.dispatch('show_uw_client_list', {
                })
            }catch(err){
                console.log(err)
            }
        },

    },
}
</script>