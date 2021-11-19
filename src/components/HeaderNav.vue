<template>
    <v-app-bar app="app" color="#CFD8DC">
        <v-row justify='center'>
            <v-col cols='3'>
                신동아화재   보험회사
            </v-col>
            <v-col cols='1' class="navItem">
                <router-link to="/home">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        home
                    </v-btn>
                </router-link>
            </v-col>
            <v-col cols='1'>
                <div></div>
            </v-col>
            <v-col cols='1' class="navItem">
                <router-link to="/about">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        about
                    </v-btn>
                </router-link>          
            </v-col>
            <!-- 5 cols -->
            <v-spacer />
            
            <v-col cols='3'>
                <router-link to="/auth/signin"   >
                    <v-btn elevation="2" class="btn_loginEnter" outlined="outlined" rounded="rounded">로그인</v-btn>
                </router-link>
                <router-link to="/auth/signup"  >
                    <v-btn elevation="2" class="btn_loginEnter" outlined="outlined" rounded="rounded">회원가입</v-btn>
                </router-link>
            </v-col>    
        </v-row>

    </v-app-bar>

</template>

<script>

    export default {
        name: 'HeaderNav',
        props: {
            
        },
        created(){
        },
        data(){
            return{
            }
        },
        computed: {
        },
        methods : {
            
        }
    }
</script>
<style scoped>

    
</style>