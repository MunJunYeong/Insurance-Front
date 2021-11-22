<template>
    <v-container>
        <v-row>
            <v-col cols='2'>
                <br>
                <v-list>
                    <v-list-item-group v-model="model" >
                        <v-list-item v-for="(item, i) in items" :key="i" @click="menuActionClick(item.action)" >
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
            <v-col cols='10'  v-if="model=== '0'">
                <ClientList />
            </v-col>
            <v-col cols='10' v-else-if="model === '1'" >
                <Suggestion />
            </v-col>
            <v-col cols='10' v-else-if="model === '2'" >
                <Subcription />
            </v-col>
            <v-col cols='10' v-else >
                <FinalPayment />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ClientList from '../../components/ClientList.vue'
import Suggestion from '../../components/Suggestion.vue'
import Subcription from '../../components/Subcription.vue'
import FinalPayment from '../../components/FinalPayment.vue'

export default {
    name : 'employee',
    components : {
        ClientList,
        Suggestion,
        Subcription,
        FinalPayment
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
            model : 0,
        }
    },
    methods: {
        menuActionClick(action){
            if(action === 0){
                this.model = 0;
            }else if(action === 1){
                this.model = 1;
            }else if(action === 2){
                this.model = 2;
            }else {
                this.model = 3;
            }
        }
    },
}
</script>