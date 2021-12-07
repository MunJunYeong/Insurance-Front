import axios from "axios";

const authModule = {
    state : {
        clientData : {},
        employeeData : {},
        car : {},
        fire : {},
        industrial : {},
        life : {}
    },
    mutations : {
        client_set_data(state, data){
            state.clientData = {...data}
        },
        employee_set_data(state, data){
            state.employeeData = {...data};
        },
        set_car_insurance(state,data){
            state.car = data;
        },
        set_fire_insurance(state,data){
            state.fire = data;
        },
        set_industrial_insurance(state,data){
            state.industrial = data;
        },
        set_life_insurance(state,data){
            state.life = data;
        },
    },
    getters : {
        get_client_data(state){
            return state.clientData;
        },
        get_employee_data(state){
            return state.employeeData;
        },
        get_car(state){
            return state.car;
        },
        get_fire(state){
            return state.fire;
        },
        get_industrial(state){
            return state.industrial;
        },
        get_life(state){
            return state.life;
        },

    },
    actions : {
        async show_insurance({commit}){
            let res;
            try{
                res = await axios.get('http://localhost:8082/insurance', {
                });
            }catch(err){
                console.log(err);
            }
            let car = res.data[0];
            let fire = res.data[1];
            let industrial = res.data[2];
            let life = res.data[3];
            commit('set_car_insurance', car);
            commit('set_fire_insurance', fire);
            commit('set_industrial_insurance', industrial);
            commit('set_life_insurance', life);
        },
        //회원가입
        async sign_up ({commit}, data){
            let res;
            if(!data.id || !data.pw || !data.name || !data.email || !data.ssn || !data.tel || !data.address || !data.age || !data.sex){
                alert('회원가입에 필요한 모든 값을 넣어주세요.');
                return;
            }
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
        },
        async client_find_id({commit}, data){
            let res;
            try{
                res = await axios.post('http://localhost:8082/findId', {
                    name : data.name,
                    email : data.email
                });
            }catch(err){
                console.log(err);
            }
            if(res.data){
                alert(`찾으시는 ID는 : '${res.data}' 입니다.`);
            }else {
              alert('정보를 다시 입력해주세요 !')
            }
            commit
        },
        async client_find_pw({commit}, data){
            let res;
            try{
                res = await axios.post('http://localhost:8082/findPw', {
                    id : data.id,
                    email : data.email
                });
            }catch(err){
                console.log(err);
            }
            if(res.data){
                alert(`찾으시는 비밀번호는 : '${res.data}' 입니다.`);
            }else {
              alert('정보를 다시 입력해주세요 !')
            }
            commit
        },
        async duplicated_check_id({commit}, data){
            let res;
            try{
                res = await axios.post('http://localhost:8082/duplicatedCheckId', {
                    id : data.id,
                });
            }catch(err){
                console.log(err);
            }
            if(res.data){
                alert(`해당하는 아이디는 이미 존재합니다.`);
            }else {
              alert('입력 가능한 아이디 입니다 !')
            }
            commit
        },
        
    }
}

export default authModule

