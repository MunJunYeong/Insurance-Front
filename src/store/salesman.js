import axios from "axios";

const salesmanModule = {
    state : {
        clientList : [],
        contractMoneyList : [],
        finalContractList : [],
    },
    mutations : {
        client_list_set_data(state, list){
            state.clientList = [];
            state.clientList.push(list);
        },
        contract_set_check_money(state, list){
            state.contractMoneyList = [];
            state.contractMoneyList.push(list);
        },
        set_final_contract_list(state, list){
            state.finalContractList = [];
            state.finalContractList.push(list);
        }
    },
    getters : {
        get_client_list(state){
            return state.clientList[0];
        },
        get_contract_money_list(state){
            return state.contractMoneyList[0];
        },
        get_final_contract_list(state){
            return state.finalContractList[0];
        },
    },
    actions : {
        //고객정보 가져오기
        async show_client({commit}){
            let res;
            try {
                res = await axios.get('http://localhost:8082/salesman/clientList', {
            });
            } catch (err) {
                console.log(err);
            }
            commit('client_list_set_data', res.data);
        },
        async get_contract_check_money({commit}){
            let res;
            try {
                res = await axios.get('http://localhost:8082/salesman/contractCheckMoney', {
            });
            } catch (err) {
                console.log(err);
            }
            commit('contract_set_check_money', res.data);
        },
        async final_payment({commit}, data){
            let res;
            try {
                res = await axios.post('http://localhost:8082/salesman/finalPayment', {
                    contractIdx : data.contractIdx
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert(`${res.data}번의 계약에서 보험금 수령 확인을 완료했습니다.`)
            }
            commit
        },
        async get_contract_final_contract({commit}, data){
            let res;
            try {
                res = await axios.get('http://localhost:8082/salesman/getfinalContract', {
                    contractIdx : data.contractIdx
            });
            } catch (err) {
                console.log(err);
            }
            
            commit('set_final_contract_list', res.data);
        },
        async post_contract_final_contract({commit}, data){
            let res;
            try {
                res = await axios.post('http://localhost:8082/salesman/finalContract', {
                    contractIdx : data.contractIdx
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert(`${res.data}번의 최종 계약이 체결됐습니다.`)
            }
            commit
        },
        //제안서 작성
        async add_suggest({commit}, data){
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
            console.log(res.data);
            if(res.data === 0){
                alert('잘못된 고객 번호 입니다.');
                return;
            }
            if(res.data === -1){
                alert('해당 고객은 이미 제안서가 작성되어져 있습니다.');
                return;
            }
            if(res.data === -2){
                alert('제안서 내용 사이즈가 5MB를 초과');
                return;
            }
            if(res.data){
                alert(`${res.data}번 계약의 제안서가 작성이 저장되었습니다.`);
                return;
            }
            commit
        },
        //청약서 작성
        async add_subscription({commit}, data){
            let res;
            if(data.contractIdx === ''){alert('계약서 번호를 입력해주세요.'); return;}
            if(data.clientIdx === ''){alert('고객 번호를 입력해주세요.'); return;}
            if(data.content === ''){alert('청약서 내용을 입력해주세요.');return;}
            if(res.data === -2){
                alert('청약서 내용 사이즈가 5MB를 초과');
                return;
            }
            try {
                res = await axios.post('http://localhost:8082/salesman/addSubscription', {
                    employeeIdx : data.employeeIdx,
                    contractIdx : data.contractIdx,
                    clientIdx : data.clientIdx,
                    content : data.content
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data === 1){
                alert('잘못된 계약 번호 입니다.');
                return;
            }
            if(res.data === 0){
                alert('잘못된 고객 번호 입니다.');
                return;
            }
            if(res.data === -1){
                alert('해당 고객의 제안서부터 작성해주세요.');
                return;
            }
            if(res.data === -2){
                alert('해당 고객에 대한 청약서가 이미 존재합니다.');
                return;
            }
            if(res.data){
                alert(`${res.data}번 계약의 청약서가 작성이 저장되었습니다.`);
                this.$router.go('#/home');
            }
            commit
        }
    }
}

export default salesmanModule

