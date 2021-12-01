<template>
    <v-container>
        <v-row>
            <v-col cols='1' class="table2">
                {{clientIdx}}
            </v-col>
            <v-col cols='2' class="table2" >
                {{name}}
            </v-col>
            <v-col cols='3' class="table2">
                {{ssn}}
            </v-col>
            <v-col cols='1' class="table2">
                {{age}}
            </v-col>
            <v-col cols='1' class="table2">
                {{tel}}
            </v-col>
            <v-col cols='2' class="table2">
                {{address}}
            </v-col>
            <v-col cols='1' class="table2">
                <v-btn v-on:click="checkUw()">
                    인수검사
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'uwClientItem',
    props: [
            "clientIdx",
            "name",
            "ssn",
            "age",
            "tel",
            "address",
    ],
    methods : {
        async checkUw(){
            try{
                await this.$store.dispatch('check_uw', {
                    clientIdx : this.clientIdx
                })
            }catch(err){
                console.log(err)
            }
            this.$router.go('#/home');
        }
    }
}
</script>
<style >
    .table2 {
        text-align: center;
    }
</style>