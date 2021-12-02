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
            <v-col cols="2" style="font-size : 1.5em">
                이름 : {{accideantData.client.name}}
            </v-col>
            <v-col cols="2">
                보험 종류 : {{accideantData.insurance.decriminatorValue}}
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
        <v-row justify="center">
            <v-col cols="2" style="font-size : 1.5em">
                관리자 번호 : {{accideantData.employee.employeeIdx}}
            </v-col>
            <v-col cols="2" style="font-size : 1.5em">
                산정 금액 : {{accideantData.measuredPrice}}
            </v-col>
        </v-row>
        <br><br><br><br>
        <v-row >
            <v-col cols="1"></v-col>
            <v-col cols='8'>
                <v-text-field
                label="소송 내용"
                v-model="lawsuit">
                </v-text-field>
            </v-col>
            <v-col cols='2'>
                <v-btn  block elvation="2" v-on:click="save()">
                    소송하기
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
                await this.$store.dispatch('client_lawsuit',{
                    accidentIdx : this.accidentIdx,
                    lawsuit : this.lawsuit
                })
                
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