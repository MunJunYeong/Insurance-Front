<template>
    <v-container>
        <v-row >
            <v-col cols='5'>
                <v-text-field
                type='number'
                label="계약서 번호 입력"
                v-model="contractIdx">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row >
            <v-col cols='5'>
                <v-text-field
                type='number'
                label="고객 번호 입력"
                v-model="clientIdx">
                </v-text-field>
            </v-col>
        </v-row>
        <Editor :initialValue="editorText" ref="toastEditor" initialEditType="wysiwyg"  height="500px" />
        
        <v-row justify='center'>
            <v-col cols='4'>
                <v-btn  block elvation="2" v-on:click="save">
                    청약서 추가하기
                </v-btn>
            </v-col>
            <v-col cols='4'>
                <v-btn  block elvation="2" v-on:click="goIdeaPage">
                    청약서 취소하기
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
            contractIdx : ''
        }
    },
    components : {
        Editor
    },
    computed: {
        employeeData : function(){
            return this.$store.getters.get_employee_data;
        },
    },
    methods: {
        async save(){
            this.editorText = this.getContent();
            try {
                await this.$store.dispatch('add_subscription', {
                    contractIdx : this.contractIdx,
                    employeeIdx : this.employeeData.employeeIdx,
                    clientIdx : this.clientIdx,
                    content : this.editorText
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
                location.href='#/home'
            }
            
        },
    },
}
</script>