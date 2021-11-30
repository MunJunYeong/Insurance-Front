<template>
    <v-container>
        <v-row justify='center'>
            <br><br>
            <v-col cols='10'  class="table">
                제안서 내용
            </v-col>
        </v-row>
        <v-row justify='center'>
            <br><br><br>
            <v-col cols='8' >
                <Viewer ref="toastViewer" height="500px" />
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
import {Viewer} from '@toast-ui/vue-editor'

export default {
    name : 'suggest',
    components : {
        Viewer,
    },
    created(){
        this.showSuggestion();
    },
    data(){
        return{

        }
    },
    computed : {
        userData : function(){
            return this.$store.getters.get_client_data;
        },
    },
    methods : {
        async showSuggestion(){
            try{
                await this.$store.dispatch('show_suggestion',{
                        clientIdx : this.userData.clientIdx
                    })
                    this.setContent(this.$store.getters.get_client_suggestion);
                }catch(err){
                    console.log(err);
            }
        },
        setContent(content) {
          this.$refs.toastViewer.invoke('setMarkdown', content)
        },
    }
}
</script>