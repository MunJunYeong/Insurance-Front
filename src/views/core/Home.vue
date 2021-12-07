<template>
    <v-container >
      <v-row justify="center" style="text-align:center">
        <v-col cols="6">
          <div id="car">  </div>
          <div>
            <h2>자동차 보험</h2> 
          </div> <br>
          <div>
            {{carInsurance.guaranteedContent}}
          </div>
          <div>
          <span style="color : red; font-size:1.4em">제한 사항 :</span>  {{carInsurance.restriction}}
          </div>
        </v-col>
        <v-col cols="6" >
          <div id="fire">  </div>
          <div>
            <h2>화재 보험</h2> 
          </div><br>
          <div>
            {{fireInsurance.guaranteedContent}}
          </div>
          <div>
            <span style="color : red; font-size:1.4em">제한 사항 :</span>  {{fireInsurance.restriction}}
          </div>
        </v-col>
      </v-row>
      <br><br>
      <v-row justify="center" style="text-align:center">
        <v-col cols="6">
          <div id="industrial">  </div>
          <div>
            <h2>산재 보험</h2> 
          </div><br>
          <div>
            {{industrialInsurance.guaranteedContent}}
          </div>
          <div>
           <span style="color : red;font-size:1.4em">제한 사항 :</span>  {{industrialInsurance.restriction}}
          </div>
        </v-col>
        <v-col cols="6">
          <div id="life">  </div>
          <div>
            <h2>생명 보험</h2> 
          </div><br>
          <div>
            {{lifeInsurance.guaranteedContent}}
          </div>
          <div>
           <span style="color : red; font-size:1.4em">제한 사항 :</span>  {{lifeInsurance.restriction}}
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" style="text-align:center">
        <v-col cols="6">
          단 금액은 계약의 제안서에 따라 수정될 수 있음을 상기하십시오
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

  export default {
    name: 'Home',
    created() {
      this.showInsurance();
    },
    components: {

    },
    data() {
        return {
            
        }
    },
    computed : {
      carInsurance : function(){
        return this.$store.getters.get_car;
      },
      fireInsurance : function(){
        return this.$store.getters.get_fire;
      },
      industrialInsurance : function(){
        return this.$store.getters.get_industrial;
      },
      lifeInsurance : function(){
        return this.$store.getters.get_life;
      },
    },
    methods: {
      async showInsurance(){
            try{
                await this.$store.dispatch('show_insurance', {
                })
            }catch(err){
                console.log(err)
            }
        },
    },

  }
</script>
<style>
  #car{
    height: 120px; width: 255px; margin-left: 370px;
    background-image: url('../../assets/car.png'); 
  }
  #fire{
    height: 120px; width: 255px; margin-left: 370px;
    background-image: url('../../assets/fire.png'); 
  }
  #industrial{
    height: 120px; width: 255px; margin-left: 370px;
    background-image: url('../../assets/industrial.png'); 
  }
  #life{
    height: 120px; width: 255px; margin-left: 370px;
    background-image: url('../../assets/life.png'); 
  }
</style>