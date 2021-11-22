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
            
        </v-row>
    </v-container>
</template>
<script>
export default {
    data(){
        return {
            items : [
                {
                    icon: 'mdi-account',
                    text: '인수정책 수립??',
                    action : 0
                },
                {
                    icon: 'mdi-star',
                    text: '인수검사',
                    action : 1
                },
            ],
            model : 0,
        }
    },
}
</script>