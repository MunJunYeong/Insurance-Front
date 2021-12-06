<template>
    <v-container>
        <v-row >
            <v-col cols='5'>
                <v-text-field
                type='number'
                label="고객번호 입력"
                v-model="clientIdx">
                </v-text-field>
            </v-col>
        </v-row>
        <Editor :initialValue="editorText" ref="toastEditor" initialEditType="wysiwyg"  height="500px" />
        <v-row >
            <v-col cols='5'>
                보험 유형 선택
                <v-chip-group mandatory active-class="primary--text">
                    <v-chip v-for="(tag, idx) in tags" :key="idx"   v-on:click="setInsurance(tag.value)">
                        {{ tag.text }}
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='4'>
                <v-btn  block elvation="2" v-on:click="save">
                    제안서 추가하기
                </v-btn>
            </v-col>
            <v-col cols='4'>
                <v-btn  block elvation="2" v-on:click="goIdeaPage">
                    제안서 취소하기
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
    
</template>
<script>
import 'codemirror/lib/codemirror.css'; 
import '@toast-ui/editor/dist/toastui-editor.css'; 
import { Editor } from '@toast-ui/vue-editor';


export default {
    nama : 'TextEditor',
    data() {
        return {
            editorText : '',
            clientIdx : '',
            insurance : 'car',
            tags : [
                {
                    text : '자동차 보험',
                    value : 'car',
                },
                {
                    text : '화재 보험',
                    value : 'fire',
                },
                {
                    text : '산업재해 보험',
                    value : 'industrial',
                },
                {
                    text : '생명 보험',
                    value : 'life',
                },
            ]
        }
    },
    computed: {
        employeeData : function(){
            return this.$store.getters.get_employee_data;
        },
    },
    components : {
        Editor
    },
    methods: {
        async save(){
            this.editorText = this.getContent();
            try {
                await this.$store.dispatch('add_suggest', {
                    employeeIdx : this.employeeData.employeeIdx,
                    clientIdx : this.clientIdx,
                    content : this.editorText,
                    insuranceType : this.insurance
                })
            }catch(err){
                console.log(err)
            }
            
        },
        getContent() {
          return this.$refs.toastEditor.invoke('getMarkdown')
        },
        goIdeaPage(){
            let result = confirm("취소하시겠습니까 ?");
            if(result){
                history.back();
            }
        },
        setInsurance(value){
            this.insurance = value;
        }
    },
}
</script>