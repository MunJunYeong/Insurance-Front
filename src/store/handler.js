import axios from "axios";

const handlerModule = {
    state : {
        accidentList : [],
    },
    mutations : {
        accident_list_set_data(state, list){
            state.accidentList = [];
            state.accidentList.push(list);
        }
    },
    getters : {
        get_accident_list(state){
            return state.accidentList[0];
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
    }
}

export default handlerModule

