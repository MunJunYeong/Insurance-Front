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
                <CheckAccident />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import CheckAccident from '../../components/handler/CheckAccident.vue';
export default {
    components : {
        CheckAccident,
    },
    data(){
        return {
            items : [
                {
                    icon: 'mdi-account',
                    text: '사고 접수',
                    action : 0
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