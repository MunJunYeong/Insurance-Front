import axios from "axios";

const managerModule = {
    state : {
        expirationContract : []
    },
    mutations : {
        set_contract_expiration(state, data){
            state.expirationContract = [];
            state.expirationContract.push(data);
        },
    },
    getters : {
        get_contract_expiration(state){
            return state.expirationContract[0];
        }
    },
    actions : {
        async add_contract_rule({commit}, data){
            let res;
            if(data.content === ''){alert('계약 관리 지침 내용을 입력해주세요.');return;}
            console.log(data)
            try {
                res = await axios.post('http://localhost:8082/manager/contractRule', {
                    employeeIdx : data.employeeIdx,
                    content : data.content,
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert(`${res.data}번의 계약 관리 지침에 대한 작성이 저장되었습니다.`);
            }else{
                alert('저장에 실패 했습니다.');
            }
            console.log(res);
            commit
        },
        async get_contract_expiration({commit}){
            let res;
            try {
                res = await axios.get('http://localhost:8082/manager/expirationContract', {
                    
            });
            } catch (err) {
                console.log(err);
            }
            console.log(res.data)
            commit('set_contract_expiration', res.data);
        },
        async delete_contract({commit}, data){
            let res;
            console.log(data);
            try {
                res = await axios.post('http://localhost:8082/manager/deleteContract', {
                    contractIdx : data.contractIdx
            });
            } catch (err) {
                console.log(err);
            }
            console.log(res.data)
            commit
        }
    }
}

export default managerModule

