<template>
    <v-container>
        <v-row>
            <v-col cols='2'>
                <br>
                <v-list>
                    <v-list-item-group v-model="no" >
                        <v-list-item v-for="(item, i) in items" :key="i"  v-on:click="menuActionClick(item.action)" >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
            
            <v-col cols='10'  v-if="no=== 0">
                <ClientList />
            </v-col>
            <v-col cols='10' v-else-if="no === 1" >
                <Suggestion />
            </v-col>
            <v-col cols='10' v-else-if="no === 2" >
                <Subcription />
            </v-col>
            <v-col cols='10' v-else>
                <FinalPayment />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ClientList from '../../components/employee/ClientList.vue'
import Suggestion from '../../components/employee/Suggestion.vue'
import Subcription from '../../components/employee/Subcription.vue'
import FinalPayment from '../../components/employee/FinalPayment.vue'

export default {
    name : 'employee',
    components : {
        ClientList,
        Suggestion,
        Subcription,
        FinalPayment
    },
    created(){
    },
    computed: {
        // no : function (){
        //     return this.num
        // }
    },
    data(){
        return {
            items : [
                {
                    icon: 'mdi-account',
                    text: '고객 리스트',
                    action : 0
                },
                {
                    icon: 'mdi-star',
                    text: '제안서 작성',
                    action : 1
                },
                {
                    icon: 'mdi-star',
                    text: '청약서 작성',
                    action : 2
                },
                {
                    icon: 'mdi-inbox',
                    text: '보험 수령 결제란',
                    action : 3
                },
            ],
            no : 0,
        }
    },
    methods: {
        menuActionClick(action){
            this.no = action; 
        }
    },
}
</script>