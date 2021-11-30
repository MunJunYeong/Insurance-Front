import axios from "axios";
import madeModule from '../module/index'

const clientModule = {
    state : {
        suggestion : {},
        subscription : {}
    },
    mutations : {
        set_suggestion(state, data) {
            state.suggestion = data;
        },
        set_subscription(state, data){
            state.subscription = data;
        }
    },
    getters : {
        get_client_suggestion(state){
            return state.suggestion;
        },
        get_client_subscription(state){
            return state.subscription;
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
            commit
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
        }
    }
}

export default clientModule

