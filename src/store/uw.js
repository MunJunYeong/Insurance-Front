import axios from "axios";

const uwModule = {
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
        get_uw_client_list(state){
            return state.clientList[0];
        }
    },
    actions : {
        async add_uw({commit}, data){
            let res;
            if(data.content === ''){alert('제안서 내용을 입력해주세요.');return;}
            try {
                res = await axios.post('http://localhost:8082/uw/addUw', {
                    employeeIdx : data.employeeIdx,
                    content : data.content,
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert(`${res.data}번의 인수정책 작성이 저장되었습니다.`);
            }else{
                alert('저장에 실패 했습니다.');
            }
            commit
        },
        async show_uw_client_list({commit}){
            let res;
            try {
                res = await axios.get('http://localhost:8082/uw/clientList', {
            });
            } catch (err) {
                console.log(err);
            }
            commit('client_list_set_data', res.data);
        },
        async check_uw({commit}, data){
            let res;
            try {
                res = await axios.post('http://localhost:8082/uw/checkUw', {
                    clientIdx : data.clientIdx
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert(`${data.clientIdx}번 고객의 인수 검사가 완료되었습니다.`);
            }
            commit
        },
    }
}

export default uwModule

