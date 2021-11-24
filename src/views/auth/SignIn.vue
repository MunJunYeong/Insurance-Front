<template>
  <v-container>
    <v-row justify="center">
      <v-col cols='4'>
        <div>
          <v-text-field
            label="아이디 입력"
            v-model="id"
            hide-details="auto"
          >
          </v-text-field>
          <v-text-field
            label="비밀번호 입력"
            v-model="pw"
            hide-details="auto"
            :type="show1 ? 'text' : 'password'"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
          >
          </v-text-field>
          <v-row justify="center">
            <v-col cols='4'>
              <v-radio-group v-model="type">
                <v-radio
                label = "고객"
                color="blue"
                value="client"
                >
                </v-radio>
                <v-radio
                label = "관리자"
                color="red"
                value="admin"
                >
                </v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
          <!-- 로그인버튼 -->
          <v-btn
            elevation="2" block
            v-on:click="login()"
          >로그인</v-btn>              
        </div>
      </v-col>
    </v-row>
    <br><br>
    <v-row justify="center">
      <v-col cols='4'>
        <div style="text-align: center;">
          <router-link to="/auth/findId">아이디찾기</router-link> ㅣ
          <router-link to="/auth/findPw">비밀번호찾기</router-link> ㅣ 
          <router-link to="/auth/signUp">회원가입</router-link>
        </div>
      </v-col>
    </v-row>
    <br><br>
    <v-row justify="center">
      <v-col cols='4'>
        <div style="text-align: center;">© 2021 insurance.com. All rights reserved.</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'SignIn',
    
    props : {
      
    },
    data() {
      return{
        id : '',
        pw : '',
        show1: false, show2 : false,
        type : 'client',
      }
    },
    methods: {
      async login(){
        if(this.type === 'client'){
          try {
            await this.$store.dispatch('client_sign_in', {
              id : this.id,
              pw : this.pw
            })
          } catch (err) {
            console.log(err)
          }
        }else{
          try {
            await this.$store.dispatch('admin_sign_in', {
              id : this.id,
              pw : this.pw
            })
          } catch (err) {
            console.log(err)
          }
        }
        
      }
    },
  }
</script>
