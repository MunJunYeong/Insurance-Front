<template>
    <v-container>
        <br>
        <v-row justify='center' >
            <v-col cols="2" style="font-size : 1.5em">
                사고 번호 : {{accideantData.accidentIdx}}
            </v-col>
            <v-col cols="2">
                사고 날짜 : {{accideantData.date}}
            </v-col>
            <v-col cols="2">
                피해 금액 : {{accideantData.damagePrice}}
            </v-col>
            <v-col cols="2">
                보험 종류 : {{accideantData.insurance.decriminatorValue}}
            </v-col>
            <v-col cols="2" style="font-size : 1.5em">
                이름 : {{accideantData.client.name}}
            </v-col>
        </v-row>
        <br><br><hr><br>
        <v-row justify="center">
            <v-col cols="2 " style="font-size : 2em; color: gray;">사고 내용</v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='8' >
                <Viewer ref="toastViewer" height="500px" />
            </v-col>
        </v-row>
        <br><hr><br><br><br>
        <v-row >
            <v-col cols="2"></v-col>
            <v-col cols='4'>
                <v-text-field
                label="산정 금액"
                type='number'
                v-model="measuredPrice">
                </v-text-field>
            </v-col>
            <v-col cols='3'>
                <v-btn  block elvation="2" v-on:click="save()">
                    사고 처리 완료
                </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
import {Viewer} from '@toast-ui/vue-editor'

export default {
    created(){
            this.showIdea();
    },
    mounted(){
       
    },
    components : {
        Viewer
    },
    data() {
        return {
            accidentIdx: this.$route.params.accidentIdx,
            measuredPrice : '',
        }
    },
    computed: {
        accideantData : function(){
            return  this.$store.getters.get_click_accident;
        },
        employeeData : function(){
            return this.$store.getters.get_employee_data;
        },
    },
    methods: {
        async showIdea(){
            try{
                await this.$store.dispatch('click_accident',{
                    accidentIdx : this.accidentIdx,
                })
                this.setContent(this.accideantData.content);
            }catch(err){
                console.log(err);
            }
        },
        setContent(content) {
            this.$refs.toastViewer.invoke('setMarkdown', content)
        },
        async save(){
            try{
                await this.$store.dispatch('finish_accident',{
                    accidentIdx : this.accidentIdx,
                    employeeIdx : this.employeeData.employeeIdx,
                    measuredPrice : this.measuredPrice
                })
                this.setContent(this.accideantData.content);
                this.$router.go('#/');
                history.back();
                // location.href = document.referrer;
            }catch(err){
                console.log(err);
            }
        }
    },
}
</script>