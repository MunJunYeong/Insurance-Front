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
    </v-container>
</template>
<script>
import {Viewer} from '@toast-ui/vue-editor'
export default {
    name : 'checkSubcription',
    components : {
        Viewer,
    },
    created(){
        this.showSubscription();
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
    }
}
</script>