<template>
    <v-container>
        <Editor :initialValue="editorText" ref="toastEditor" initialEditType="wysiwyg"  height="700px" />
        
        <v-row justify='center'>
            <v-col cols='4'>
                <v-btn  block elvation="2" v-on:click="save">
                    인수정책 추가하기
                </v-btn>
            </v-col>
            <v-col cols='4'>
                <v-btn  block elvation="2" v-on:click="goIdeaPage">
                    인수정책 취소하기
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
                await this.$store.dispatch('add_uw', {
                    employeeIdx : this.employeeData.employeeIdx,
                    content : this.editorText,
                })
            }catch(err){
                console.log(err)
            }
            this.$router.go('#/home');
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
        setInsurance(value){
            this.insurance = value;
        }
    },
}
</script>