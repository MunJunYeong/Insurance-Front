<template>
    <v-container>
        <v-row>
            <v-col cols='2'>
                <br>
                <v-list>
                    <v-list-item-group v-model="no" >
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
            <v-col cols='10'  v-if="no=== 0">
                <ContractRule />
            </v-col>
            <v-col cols='10'  v-if="no=== 1">
                <Installment />
            </v-col>
            <v-col cols='10'  v-if="no=== 2">
                <Expiration />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import ContractRule from '../../components/manager/ContractRule.vue'
import Installment from '../../components/manager/Installment.vue'
import Expiration from '../../components/manager/Expiration.vue'
export default {
    components : {
        ContractRule, Installment, Expiration
    },
    data(){
        return {
            items : [
                {
                    icon: 'mdi-account',
                    text: '계약 관리 지침',
                    action : 0
                },
                {
                    icon: 'mdi-star',
                    text: '분납/수금',
                    action : 1
                },
                {
                    icon: 'mdi-star',
                    text: '만기 계약',
                    action : 2
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