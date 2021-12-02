import axios from "axios";
import madeModule from '../module/'
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
            if(data.fee === ''){alert('요금을 입력해주세요.'); return;}
            if(data.rate === ''){alert('요율을 입력해주세요.'); return;}
            if(!madeModule.checkValidateDate(data.period)){alert('날짜 형식에 알맞게 입력해주세요.');return;}
            if(data.maximumReward === ''){alert('최대금액을 입력해주세요.'); return;}
            if(data.restriction === ''){alert('제한 사항을 입력해주세요.'); return;}
            if(data.content === ''){alert('보험 내용을 입력해주세요.'); return;}

            if(data.accidentCount === ''){alert('사고 횟수를 입력해주세요.'); return;}
            if(data.carno === ''){alert('자동차 개수 입력해주세요.'); return;}
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
            if(data.fee === ''){alert('요금을 입력해주세요.'); return;}
            if(data.rate === ''){alert('요율을 입력해주세요.'); return;}
            if(!madeModule.checkValidateDate(data.period)){alert('날짜 형식에 알맞게 입력해주세요.');return;}
            if(data.maximumReward === ''){alert('최대금액을 입력해주세요.'); return;}
            if(data.restriction === ''){alert('제한 사항을 입력해주세요.'); return;}
            if(data.content === ''){alert('보험 내용을 입력해주세요.'); return;}

            if(data.buildingCount === ''){alert('건물 번호를 입력해주세요.'); return;}
            if(data.buildingPrice === ''){alert('건물 가격을 입력해주세요.'); return;}
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
            if(data.fee === ''){alert('요금을 입력해주세요.'); return;}
            if(data.rate === ''){alert('요율을 입력해주세요.'); return;}
            if(!madeModule.checkValidateDate(data.period)){alert('날짜 형식에 알맞게 입력해주세요.');return;}
            if(data.maximumReward === ''){alert('최대금액을 입력해주세요.'); return;}
            if(data.restriction === ''){alert('제한 사항을 입력해주세요.'); return;}
            if(data.content === ''){alert('보험 내용을 입력해주세요.'); return;}

            if(data.businessNo === ''){alert('건물 개수를 입력해주세요.'); return;}
            if(data.safeGrade === ''){alert('안전 등급을 입력해주세요.'); return;}
            if(data.workplaceType === ''){alert('직장 유형를 입력해주세요.'); return;}
            if(data.workplacePosition === ''){alert('직장 내 직위를 입력해주세요.'); return;}
            if(data.workplaceAddress === ''){alert('직장 주소를 입력해주세요.'); return;}
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
            commit
        },
        async add_life({commit}, data){
            let res;
            if(data.fee === ''){alert('요금을 입력해주세요.'); return;}
            if(data.rate === ''){alert('요율을 입력해주세요.'); return;}
            if(!madeModule.checkValidateDate(data.period)){alert('날짜 형식에 알맞게 입력해주세요.');return;}
            if(data.maximumReward === ''){alert('최대금액을 입력해주세요.'); return;}
            if(data.restriction === ''){alert('제한 사항을 입력해주세요.'); return;}
            if(data.content === ''){alert('보험 내용을 입력해주세요.'); return;}

            if(data.healthGrade === ''){alert('건강 등급을 입력해주세요.'); return;}
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

