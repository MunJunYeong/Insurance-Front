<template>
    <v-container>
        <v-row justify='center'>
            <v-col cols='1' class="table2">
                {{contractIdx}}
            </v-col>
            <v-col cols='2' class="table2" >
                {{name}}
            </v-col>
            <v-col cols='3' class="table2">
                {{email}}
            </v-col>
            <v-col cols='1' class="table2">
                {{age}}
            </v-col>
            <v-col cols='1' class="table2">
                {{sex}}
            </v-col>
            <v-col cols='2' class="table2">
                {{tel}}
            </v-col>
            <v-col cols="1" class="table2">
                <v-btn v-on:click="finalContract">
                    계약 수립
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'accidentItem',
    props: [
        "contractIdx",
        "name",
        "email",
        "age",
        "sex",
        "tel",
    ],
    methods : {
        async finalContract(){
            try{
                await this.$store.dispatch('post_final_contract', {
                    contractIdx : this.contractIdx
                })
            }catch(err){
                console.log(err)
            }
            // this.$router.go('#/home');
        },
    }

}
</script>