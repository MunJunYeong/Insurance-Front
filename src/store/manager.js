import axios from "axios";

const managerModule = {
    state : {
        userData : {}
    },
    mutations : {
        
    },
    getters : {

    },
    actions : {
        async add_contract_rule({commit}, data){
            let res;
            if(data.content === ''){alert('계약 관리 지침 내용을 입력해주세요.');return;}
            console.log(data)
            try {
                res = await axios.post('http://localhost:8082/manager/addContractRule', {
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
    }
}

export default managerModule

