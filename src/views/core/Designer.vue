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
                <Car />
            </v-col>
            <v-col cols='10' v-else-if="no === 1" >
                <Fire />
            </v-col>
            <v-col cols='10' v-else-if="no === 2" >
                <Industrial />
            </v-col>
            <v-col cols='10' v-else>
                <Life />
            </v-col>
        </v-row>
        
    </v-container>
</template>
<script>
import Car from '../../components/designer/Car.vue'
import Fire from '../../components/designer/Fire.vue'
import Life from '../../components/designer/Life.vue'
import Industrial from '../../components/designer/Industrial.vue'
export default {
    components : {
        Car, Fire, Life, Industrial
    },
    data(){
        return {
            items : [
                {
                    icon: 'mdi-star',
                    text: '자동차 보험 개발',
                    action : 0
                },
                {
                    icon: 'mdi-star',
                    text: '화재 보험 개발',
                    action : 1
                },
                {
                    icon: 'mdi-star',
                    text: '산업재해 보험 개발',
                    action : 2
                },
                {
                    icon: 'mdi-star',
                    text: '생명 보험 개발',
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