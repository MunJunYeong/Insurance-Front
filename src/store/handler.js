import axios from "axios";

const handlerModule = {
    state : {
        accidentList : [],
        clickAccident : [],
    },
    mutations : {
        accident_list_set_data(state, list){
            state.accidentList = [];
            state.accidentList.push(list);
        },
        click_accident_set_data(state, list){
            state.clickAccident = [];
            state.clickAccident.push(list);
        }
    },
    getters : {
        get_accident_list(state){
            return state.accidentList[0];
        },
        get_click_accident(state){
            return state.clickAccident[0];
        }
    },
    actions : { 
        async show_accident({commit}){
            let res;
            try {
                res = await axios.get('http://localhost:8082/handler/accidentList', {
            });
            } catch (err) {
                console.log(err);
            }
            commit('accident_list_set_data', res.data);
        },

        async click_accident({commit}, data){
            let res;
            try {
                res = await axios.get('http://localhost:8082/handler/clickAccident', {
                    params : {
                        accidentIdx : data.accidentIdx,
                    }    
            });
            } catch (err) {
                console.log(err);
            }
            commit('click_accident_set_data', res.data);
        },
        
        async finish_accident({commit}, data){
            let res;
            try {
                res = await axios.post('http://localhost:8082/handler/finishAccident', {
                    accidentIdx : data.accidentIdx,
                    employeeIdx : data.employeeIdx,
                    measuredPrice : data.measuredPrice    
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert('사고 처리가 완료되었습니다.');
            }
            commit
        },
    }
}

export default handlerModule

