import axios from "axios";
import madeModule from '../module/index'

const clientModule = {
    state : {
        suggestion : {},
        subscription : {},
        notProveAccidentList : [],
        proveAccidentList : [],
        lawsuitAccidentList : []
    },
    mutations : {
        set_suggestion(state, data) {
            state.suggestion = data;
        },
        set_subscription(state, data){
            state.subscription = data;
        },
        not_prove_set_accident(state, list){
            state.notProveAccidentList = [];
            state.notProveAccidentList.push(list);
        },
        prove_set_accident(state, list){
            state.proveAccidentList = [];
            state.proveAccidentList.push(list);
        },
        lawsuit_set_accident(state, list){
            state.lawsuitAccidentList = [];
            state.lawsuitAccidentList.push(list);
        },
        
    },
    getters : {
        get_client_suggestion(state){
            return state.suggestion;
        },
        get_client_subscription(state){
            return state.subscription;
        },
        get_not_prove_my_accident(state){
            return state.notProveAccidentList[0];
        },
        get_prove_my_accident(state){
            return state.proveAccidentList[0];
        },
        get_lawsuit_my_accident(state){
            return state.lawsuitAccidentList[0];
        }
    },
    actions : {
        //사고 처리
        async add_accident({commit}, data){
            let res;
            if(data.date === ''){ alert('날짜를 입력해주세요.');return; }
            if(!madeModule.checkValidateDate(data.date)){alert('날짜 형식에 알맞게 입력해주세요.');return;}
            if(data.content === ''){alert('사고 내용 및 사진을 입력해주세요.'); return;}
            if(data.price === ''){alert('사고 피해 금액을 입력해주세요.'); return; }
            try {
                res = await axios.post('http://localhost:8082/client/addAccident', {
                    date : data.date,
                    content : data.content,
                    damagePrice : data.price,
                    insuranceType : data.insurance,
                    clientIdx : data.clientIdx
            });
            } catch (err) {
                console.log(err);
            }
            console.log(res);
            if(res.data === "성공"){
                alert('사고 접수가 완료 되었습니다.')
            }
            commit
        },
        async show_suggestion({commit}, data){
            let res;
            try {
                res = await axios.get(`http://localhost:8082/client/suggestion`, {
                    params : {
                        clientIdx : data.clientIdx
                    }
                });
            } catch (err) {
                console.log(err);
            }
            commit('set_suggestion', res.data)
        },
        async show_subscription({commit}, data){
            let res;
            try {
                res = await axios.get(`http://localhost:8082/client/subscription`, {
                    params : {
                        clientIdx : data.clientIdx
                    }
                });
            } catch (err) {
                console.log(err);
            }
            commit('set_subscription', res.data)
        },
        async show_all_accident({commit}, data){
            let res;
            try {
                res = await axios.get('http://localhost:8082/client/accidentList', {
                    params : {
                        clientIdx : data.clientIdx
                    }    
            });
            } catch (err) {
                console.log(err);
            }
            let temp = res.data;
            let notProve = [];
            let prove = [];
            let lawsuit = [];
            for(var i=0; i<temp.length; i++){
                if(temp[i].employee === null){
                    notProve.push(temp[i]);
                }else if(temp[i].lawsuit === null){
                    prove.push(temp[i]);
                }else{
                    lawsuit.push(temp[i]);
                }
            }
            commit('not_prove_set_accident', notProve);
            commit('prove_set_accident', prove);
            commit('lawsuit_set_accident', lawsuit);
        },
        async client_lawsuit({commit}, data){
            let res;
            console.log(data)
            try {
                res = await axios.post('http://localhost:8082/client/addLawsuit', {
                    accidentIdx : data.accidentIdx,
                    lawsuit : data.lawsuit,
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert(`${res.data}번 사고 소송을 진행하겠습니다.`)
            }
            commit
        },
    }
}

export default clientModule

