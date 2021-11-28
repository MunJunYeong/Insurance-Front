<template>
    <v-container>
        <v-row >
            <v-col cols='5'>
                <v-text-field
                label="사고 일자 입력 (형식 : mm/dd/yyyy)"
                v-model="date">
                </v-text-field>
            </v-col>
        </v-row>
        <Editor :initialValue="editorText" ref="toastEditor" initialEditType="wysiwyg"  height="500px" />
        <v-row >
            <v-col cols='5'>
                <v-text-field
                label="피해 금액 입력"
                v-model="price">
                </v-text-field>
            </v-col>
        </v-row>
        <v-row >
            <v-col cols='5'>
                보험 유형 선택
                <v-chip-group mandatory active-class="primary--text">
                    <v-chip v-for="(tag, idx) in tags" :key="idx"  @click="setInsurance(tag.value)">
                        {{ tag.text }}
                    </v-chip>
                </v-chip-group>
            </v-col>
        </v-row>
        <v-row justify='center'>
            <v-col cols='4'>
                <v-btn  block elvation="2" v-on:click="save">
                    사고신고 접수하기
                </v-btn>
            </v-col>
            <v-col cols='4'>
                <v-btn  block elvation="2" v-on:click="goIdeaPage">
                    사고신고 취소하기
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
            price : 0,
            subject : '',
            date : '',
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
    components : {
        Editor
    },
    methods: {
        async save(){
            this.editorText = this.getContent();
            try {
                await this.$store.dispatch('add_accident', {
                    date : this.date,
                    content : this.editorText,
                    price : this.price,
                    insurance : this.insurance
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
        setInsurance(value){
            this.insurance = value;
        }
    },
}
</script>