<template>
    <v-container>
        <v-row justify="center">
          <v-col cols='4'>
            <v-text-field
              label="아이디 입력"
              v-model="id"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols='4'>
            <v-text-field
              label="이메일 입력"
              v-model="email"
              hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="4" >
            <v-btn
              elevation="2" block v-on:click="findPw">
              비밀번호 찾기
            </v-btn>
          </v-col>      
        </v-row>
        <v-row justify="center">
          <v-col cols='4'>
            <div style="text-align: center;">
              <router-link to="/auth/findId">아이디찾기</router-link> ㅣ
              <router-link to="/auth/signIn">로그인하기</router-link> ㅣ 
              <router-link to="/auth/signUp">회원가입하기</router-link>

            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols='5'>
            <div style="text-align: center;">© 2021 MetaphorForInvesting.com. All rights reserved.</div>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name : 'findPw',
    data() {
      return {
        id : '',
        email : '',
      }
    },
    methods: {
      async findPw(){
        try {
            await this.$store.dispatch('client_find_pw', {
              id : this.id,
              email : this.email
            })
          } catch (err) {
            console.log(err)
          }
      },
    },
}
</script>