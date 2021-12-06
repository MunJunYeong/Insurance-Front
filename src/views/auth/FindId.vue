<template>
    <v-container>
        <v-row justify="center">
          <v-col cols='4'>
            <v-text-field
                label="이름 입력"
                v-model="name"
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
              elevation="2" block
              v-on:click="findId()">
              아이디 찾기
            </v-btn>
          </v-col>      
        </v-row>
        <v-row justify="center">
          <v-col cols='4'>
            <div style="text-align: center;">
              <router-link to="/auth/findPw">비밀번호찾기</router-link> ㅣ
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
    name : 'findId',
    data() {
      return {
        name : '',
        email : '',
      }
    },
    methods: {
      async findId(){
        try {
            await this.$store.dispatch('client_find_id', {
              name : this.name,
              email : this.email
            })
          } catch (err) {
            console.log(err)
          }
          
      },
      
    },
}
</script>