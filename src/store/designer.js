import axios from "axios";

const designerModule = {
    state : {
        userData : {}
    },
    mutations : {
        
    },
    getters : {

    },
    actions : {
        async add_car({commit}, data){
            let res;
            console.log(data);
            try {
                res = await axios.post('http://localhost:8082/designer/car', {
                    dtype : data.dtype,
                    fee : data.fee,
                    rate : data.rate,
                    period : data.period,
                    maximumReward : data.maximumReward,
                    restriction : data.restriction,
                    guaranteedContent : data.content, // 여기까지 공통되는 insurance
                    accidentCount : data.accidentCount,
                    carno : data.carno,
                    employeeIdx : data.employeeIdx
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert('보험 등록 완료');
            }
            commit
        },
        async add_fire({commit}, data){
            let res;
            console.log(data);
            try {
                res = await axios.post('http://localhost:8082/designer/fire', {
                    dtype : data.dtype,
                    fee : data.fee,
                    rate : data.rate,
                    period : data.period,
                    maximumReward : data.maximumReward,
                    restriction : data.restriction,
                    guaranteedContent : data.content, // 여기까지 공통되는 insurance
                    buildingCount : data.buildingCount,
                    buildingPrice : data.buildingPrice,
                    employeeIdx : data.employeeIdx
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert('보험 등록 완료');
            }
            // commit('client_list_set_data', res.data);/
            commit
        },
        async add_industrial({commit}, data){
            let res;
            console.log(data);
            try {
                res = await axios.post('http://localhost:8082/designer/industrial', {
                    dtype : data.dtype,
                    fee : data.fee,
                    rate : data.rate,
                    period : data.period,
                    maximumReward : data.maximumReward,
                    restriction : data.restriction,
                    guaranteedContent : data.content, // 여기까지 공통되는 insurance
                    businessNo : data.businessNo,
                    safeGrade : data.safeGrade,
                    workplaceType : data.workplaceType,
                    workplacePosition : data.workplacePosition,
                    workplaceAddress : data.workplaceAddress,
                    employeeIdx : data.employeeIdx
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert('보험 등록 완료');
            }
            // commit('client_list_set_data', res.data);
            commit
        },
        async add_life({commit}, data){
            console.log(data);
            let res;
            try {
                res = await axios.post('http://localhost:8082/designer/life', {
                    dtype : data.dtype,
                    fee : data.fee,
                    rate : data.rate,
                    period : data.period,
                    maximumReward : data.maximumReward,
                    restriction : data.restriction,
                    guaranteedContent : data.content, // 여기까지 공통되는 insurance
                    healthGrade : data.healthGrade,
                    employeeIdx : data.employeeIdx
            });
            } catch (err) {
                console.log(err);
            }
            if(res.data){
                alert('보험 등록 완료');
            }
            // commit('client_list_set_data', res.data);
            commit
        },
    }
}

export default designerModule

