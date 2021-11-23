<template>
    <v-container>
        <v-row justify='center'>
            <v-col cols='1' class="table">
                번호
            </v-col>
            <v-col cols='3' class="table">
                이름
            </v-col>
            <v-col cols='3' class="table">
                이메일
            </v-col>
            <v-col cols='2' class="table">
                나이
            </v-col>
            <v-col cols='1' class="table"></v-col>
        </v-row> 
    </v-container>
</template>
<script>
export default {
    name : 'clientList',
    created : {

    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>
<style >
    .table {
        border-top: black solid 1px; border-bottom: black solid 1px;text-align: center;
    }
</style>