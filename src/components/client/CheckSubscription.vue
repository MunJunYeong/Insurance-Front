<template>
    <v-container>
        <v-row justify='center'>
            <br><br>
            <v-col cols='10'  class="table">
                청약서 내용
            </v-col>
        </v-row>
        <v-row justify='center'>
            <br><br><br>
            <v-col cols='8' >
                <Viewer ref="toastViewer" height="500px" />
            </v-col>
        </v-row>
        <v-row justify='center'>
            <vue-drawing-canvas v-model="image" style="border: 1px solid #000;"
              ref="VueCanvasDrawing"
            />
            
        </v-row>
        <v-row justify="center">
            <v-btn v-on:click="saveImage()">
                사인 저장하기
            </v-btn>
        </v-row>
        
    </v-container>
</template>
<script>
import {Viewer} from '@toast-ui/vue-editor'
import VueDrawingCanvas from 'vue-drawing-canvas';
export default {
    name : 'checkSubcription',
    components : {
        Viewer, VueDrawingCanvas
    },
    created(){
        this.showSubscription();
    },
    data(){
        return{
            image : '',
        }
    },
    computed : {
        userData : function(){
            return this.$store.getters.get_client_data;
        },
    },
    methods : {
        async showSubscription(){
            try{
                await this.$store.dispatch('show_subscription',{
                        clientIdx : this.userData.clientIdx
                    })
                    this.setContent(this.$store.getters.get_client_subscription);
                }catch(err){
                    console.log(err);
            }
            
        },
        setContent(content) {
          this.$refs.toastViewer.invoke('setMarkdown', content)
        },
        saveImage(){
            console.log(this.image)
        }
    }
}
</script>