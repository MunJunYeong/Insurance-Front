import axios from "axios";

const salesmanModule = {
    state : {
        clientList : [],
    },
    mutations : {
        client_list_set_data(state, list){
            state.clientList = [];
            state.clientList.push(list);
        }
    },
    getters : {
        get_client_list(state){
            return state.clientList[0];
        }
    },
    actions : {
        async show_client({commit}){
            let res;
            try {
                res = await axios.get('http://localhost:8082/salesman/clientList', {
            });
            } catch (err) {
                console.log(err);
            }
            commit('client_list_set_data', res.data);
            commit
        },
        //제안서 작성
        async add_suggest({commit}, data){
            // let token = localStorage.getItem('token');
            let res;
            if(data.userIdx === ''){alert('고객 번호를 입력해주세요.');return;}
            if(data.content === ''){alert('제안서 내용을 입력해주세요.');return;}
            
            try {
                res = await axios.post('http://localhost:8082/salesman/addSuggest', {
                    employeeIdx : data.employeeIdx,
                    clientIdx : data.clientIdx,
                    content : data.content,
                    insuranceType : data.insuranceType
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data === 1){
                alert('제안서 작성이 저장되었습니다.');
            }else{
                alert('고객번호가 존재하지 않습니다.');
            }
            console.log(res);
            commit
        },
        //청약서 작성
        async add_subscription({commit}, data){
            // let token = localStorage.getItem('token');
            let res;
            if(typeof(data.userIdx) === "string"){alert('고객 번호를 숫자로 입력해주세요.'); return;}
            if(data.userIdx === ''){alert('고객 번호를 입력해주세요.'); return;}
            if(data.content === ''){alert('청약서 내용을 입력해주세요.');return;}
            
            try {
                res = await axios.post('http://localhost:8080/addSubscription', {
                    userIdx : data.userIdx,
                    content : data.content
            },
            {
                headers : {
                    // 'Authorization' : token
                }
            });
            } catch (err) {
                console.log(err);
            }
            console.log(res);
            commit
        }
    }
}

export default salesmanModule

