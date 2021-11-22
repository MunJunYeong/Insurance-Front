<template>
  <v-container>
    <v-row justify="center">
      <v-col cols='3'>
        <v-text-field
            label="아이디 입력"
            v-model="id"
            :rules="idRules"
            hide-details="auto"
            :readonly="overlapId"
          ></v-text-field>
      </v-col>
      <v-col cols='1'>
        <v-btn
            elevation="2" block
            v-on:click="checkId"
          >중복확인</v-btn>
      </v-col>
    </v-row>
    <br>

    <v-row justify="center">
      <v-col cols='4'>
        <div>
          <v-text-field
            label="비밀번호 입력"
            v-model="pw"
            :rules="pwRules"
            hide-details="auto"
            :type="show1 ? 'text' : 'password'"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            label="비밀번호 재확인"
            v-model="checkPw"
            :rules="checkPwRules"
            hide-details="auto"
            :type="show2 ? 'text' : 'password'"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show2 = !show2"
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols='4'>
        <v-text-field
            label="이름 입력"
            v-model="name" 
            :rules="checknickNameRules"
            hide-details="auto"
          ></v-text-field>
      </v-col>
    </v-row>
    <br>
    <v-row justify="center">
      <v-col cols='4'>
        <v-text-field
          label="이메일 입력"
          v-model="email"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <br>
    <v-row justify="center">
      <v-col cols='4'>
        <v-text-field
          label="주민번호 입력"
          v-model="ssn"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>
    <br>
    <v-row justify="center">
      <v-col cols='4'>
        <v-text-field
        label = "전화번호"
        v-model="tel"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <br>
    <v-row justify="center">
      <v-col cols='4'>
        <v-text-field
        label = "주소"
        v-model="address"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <br>
    <v-row justify="center">
      <v-col cols='4'>
        <v-text-field
        label = "나이"
        v-model="age"
        >
        </v-text-field>
      </v-col>
    </v-row>
    
    <br>
    <v-row justify="center">
      <v-col cols='1'>
        <v-radio-group v-model="sex">
          <v-radio
          label = "남성"
          color="blue"
          value="male"
          >
          </v-radio>
          <v-radio
          label = "여성"
          color="red"
          value="female"
          >
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>
    <br>

    <v-row justify="center">
      <v-col cols='4'>
        <div style="text-align: center;">
          <router-link to="/auth/findId">아이디찾기</router-link> ㅣ
          <router-link to="/auth/findPw">비밀번호찾기</router-link> ㅣ 
          <router-link to="/auth/signIn">로그인하기</router-link>
        </div>
      </v-col>
    </v-row>
        <v-row justify="center">
      <v-col cols="4" >
        <v-btn
          elevation="2" block
           v-on:click="signUp()" >
          회원가입 하기
        </v-btn>
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

  const checkEng = /[a-zA-Z]/;
  const checkNum = /[0-9]/; 
  const checkSpe = /[~!@#$%^&*()_+|<>?:{}]/;

  export default {
    name: 'signUp',
    data () {
      return {
        id : '',
        pw : '',
        checkPw : '',
        name : '',
        email : '',
        ssn : '',
        tel : '',
        address : '',
        age : '',
        sex : '',
        show1: false, show2 : false,
        idRules: [
          value => !!value || '영어, 숫자 합쳐서 6글자 이상 만들어주세요.',
          value => (checkEng.test(value) && checkNum.test(value) && value.length >= 6) || '영어,숫자 6글자 이상',
          // value =>this.checkIdDuplicate(value)
        ],
        pwRules : [
          value => !!value || '영어, 숫자, 특수기호를 합쳐서 6글자 이상 만들어주세요.',
          value => (checkEng.test(value) && checkNum.test(value) && checkSpe.test(value) && value.length >= 6) || '영어,숫자, 특수기호 6글자 이상',
        ],
        checkPwRules : [
          value => !!value || '비밀번호가 일치하지 않습니다.',
          value => value  === this.pw || '비밀번호가 일치하지 않습니다.'
        ],
        checknickNameRules : [
          value => !!value || '3글자 이상 만들어주세요.',
          value => (value.length >= 3) || '3글자 이상 만들어주세요.',
        ],
        overlapId: false,
        overlapNickName: false,
      }
    },

    methods : {
      async signUp(){
        try{
          await this.$store.dispatch('sign_up', {
            id : this.id,
            pw : this.pw,
            name : this.name,
            email : this.email,
            ssn : this.ssn,
            tel : this.tel,
            address : this.address,
            age : this.age,
            sex : this.sex,
          })
        }catch(err){
          console.log(err);
        }
      },
    },
  }
</script>
<style>
  v-textarea[readonly="readonly"] {
    background-color: yellowgreen
}
</style>