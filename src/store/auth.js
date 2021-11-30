import axios from "axios";

const authModule = {
    state : {
        clientData : {},
        employeeData : {},
    },
    mutations : {
        client_set_data(state, data){
            state.clientData = {...data}
        },
        employee_set_data(state, data){
            state.employeeData = {...data};
        }
    },
    getters : {
        get_client_data(state){
            return state.clientData;
        },
        get_employee_data(state){
            return state.employeeData;
        },

    },
    actions : {
        //회원가입
        async sign_up ({commit}, data){
            let res;
            try {
                res = await axios.post('http://localhost:8082/signUp', {
                    id : data.id,
                    pw : data.pw,
                    name : data.name,
                    email : data.email,
                    ssn : data.ssn,
                    tel : data.tel,
                    address : data.address,
                    age : data.age,
                    sex : data.sex,
                });
            } catch (err) {
                console.log(err);
            }
            console.log(res);
            if(res.data === "성공"){
                alert('회원가입에 성공했습니다.');
                location.href='#/home'
            }
            res
            commit
        },
        //고객 로그인
        async client_sign_in({commit}, data){
            let res;
            try{
                res = await axios.post('http://localhost:8082/client/signIn', {
                    id : data.id,
                    pw : data.pw,
                    
                });
            }catch(err){
                console.log(err);
            }
            commit
            if(res.data){
                localStorage.setItem("role", "client");
                commit('client_set_data', res.data);
                alert('로그인을 성공했습니다.');
                location.href='#/home'
            }else {
                alert('로그인을 실패했습니다.');
            }
        },
        //관리자 로그인
        async admin_sign_in({commit}, data){
            let res;
            try{
                res = await axios.post('http://localhost:8082/admin/signIn', {
                    id : data.id,
                    pw : data.pw
                });
            }catch(err){
                console.log(err);
            }
            if(res.data){
                localStorage.setItem("role", res.data.role);
                commit('employee_set_data', res.data);
                alert('로그인을 성공했습니다.');
                location.href='#/home'
            }else {
                alert('로그인을 실패했습니다.');
            }
        }
    }
}

export default authModule

