<template>
    <v-app-bar app="app" color="#CFD8DC">
        <v-row justify='center'>
            <v-col cols='2'>
                신동아화재   보험회사
            </v-col>
            <v-col cols='1' class="navItem">
                <router-link to="/home">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        home
                    </v-btn>
                </router-link>
            </v-col>
            <v-col cols='1' class="navItem" v-if="checkSalesMan()">
                <router-link to="/employee">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        영업사원
                    </v-btn>
                </router-link>          
            </v-col>
            <v-col cols='1' class="navItem">
                <router-link to="/client" v-if="checkClient()">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        고객
                    </v-btn>
                </router-link>          
            </v-col>
            <v-col cols='1' class="navItem" v-if="checkUw()">
                <router-link to="/uw">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        UW
                    </v-btn>
                </router-link>          
            </v-col>
            <v-col cols='1' class="navItem" v-if="checkDesigner()">
                <router-link to="/designer">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        보험설계사
                    </v-btn>
                </router-link>          
            </v-col>
            <v-col cols='1' class="navItem" v-if="checkAdmin()">
                <router-link to="/manager">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        보험관리자
                    </v-btn>
                </router-link>          
            </v-col>
            <v-col cols='1' class="navItem" v-if="checkHandler()">
                <router-link to="/handler">
                    <v-btn text="text" rounded="rounded" color="#455A64" style="margin-top:10px;">
                        사고처리사
                    </v-btn>
                </router-link>          
            </v-col>
            <v-spacer />
            
            <v-col cols='3' v-if="checkLogin()">
                <router-link to="/auth/signin"   >
                    <v-btn elevation="2" class="btn_loginEnter" outlined="outlined" rounded="rounded">로그인</v-btn>
                </router-link>
                <router-link to="/auth/signup"  >
                    <v-btn elevation="2" class="btn_loginEnter" outlined="outlined" rounded="rounded">회원가입</v-btn>
                </router-link>
            </v-col>

            <v-col cols='3' id="loginWelcomeWrapper"   v-else>
                <span id="loginWelcome" >{{nickName}} <p id="showRole">[{{role}}]</p></span>&nbsp;&nbsp;&nbsp;
                <v-btn id="logoutBtn" elevation="2" outlined="outlined" rounded="rounded" v-on:click="logout" >로그아웃</v-btn>
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
                nickName : '',
                role : '',
                token : localStorage.getItem('role'),
            }
        },
        computed: {
            userData : function(){
                return this.$store.getters.get_client_data;
            },
            employeeData : function(){
                return this.$store.getters.get_employee_data;
            }
        },
        methods : {
            checkLogin(){
                if(this.token){
                    if(this.token === "client"){
                        this.nickName = this.userData.name,
                        this.role = "고객";
                        return false;
                    }
                    this.nickName = this.employeeData.name,
                    this.role = this.employeeData.role;
                    return false;
                }
                return true
            },
            logout(){
                localStorage.removeItem('role');
                localStorage.removeItem('vuex');
                location.href='#/home'
                this.$router.go('#/home'); //새로고침
            },
            checkSalesMan(){
                if(this.token === "salesman"){
                    return true;
                }
            },
            checkClient(){
                if(this.token === "client"){
                    return true;
                }
            },
            checkUw(){
                if(this.token === "uw"){
                    return true;
                }
            },
            checkDesigner(){
                if(this.token === "designer"){
                    return true;
                }
            },
            checkAdmin(){
                if(this.token === "manager"){
                    return true;
                }
            },
            checkHandler(){
                if(this.token === "handler"){
                    return true;
                }
            },
        }
    }
</script>
<style scoped>
    #loginWelcome{
        font-weight: 400; font-size: 1.5em; color: black;
    }
    #showRole{
        font-size: 0.6em; display: inline; color: darkgreen;
    }
    
</style>