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
                <Claim />
            </v-col>
            <v-col cols='10' v-else-if="no === 1" >
                <CheckSuggest />
            </v-col>
            <v-col cols='10' v-else-if="no === 2" >
                <CheckSubscription />
            </v-col>
            <v-col cols='10' v-else-if="no === 3">
                <CheckAccidentResult />
            </v-col>
            <v-col cols='10' v-else-if="no === 4">
                <Lawsuit />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import CheckSubscription from '../../components/client/CheckSubscription.vue';
import Claim from '../../components/client/Accident.vue';
import CheckSuggest from '../../components/client/CheckSuggest.vue';
import CheckAccidentResult from '../../components/client/CheckAccidentResult.vue';
import Lawsuit from '../../components/client/Lawsuit.vue';
export default {
    components : {
        CheckSubscription,
        Claim,
        CheckSuggest,
        CheckAccidentResult,
        Lawsuit
    },
    data(){
        return {
            items : [
                {
                    icon: 'mdi-account',
                    text: '사고 신고',
                    action : 0
                },
                {
                    icon: 'mdi-star',
                    text: '제안서 확인',
                    action : 1
                },
                {
                    icon: 'mdi-star',
                    text: '청약서 확인',
                    action : 2
                },
                {
                    icon: 'mdi-inbox',
                    text: '사고 결과 확인',
                    action : 3
                },
                {
                    icon: 'mdi-inbox',
                    text: '소송 진행',
                    action : 4
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