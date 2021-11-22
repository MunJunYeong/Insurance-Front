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
        </v-row>
        <v-col cols='10'>
            <DevelopProduct />
        </v-col>
    </v-container>
</template>
<script>
import DevelopProduct from '../../components/designer/DevelopProduct.vue'
export default {
    components : {
        DevelopProduct
    },
    data(){
        return {
            items : [
                {
                    icon: 'mdi-account',
                    text: '상품 개발',
                    action : 0
                },
            ],
            no : 0,
        }
    },
}
</script>