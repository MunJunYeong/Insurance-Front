import axios from "axios";

const salesmanModule = {
    state : {
        userData : {}
    },
    mutations : {
        
    },
    getters : {

    },
    actions : {
        //제안서 작성
        async add_suggest({commit}, data){
            // let token = localStorage.getItem('token');
            let res;
            console.log(typeof(data.userIdx))
            // if(typeof(data.userIdx) === "string"){alert('고객 번호를 숫자로 입력해주세요.'); return;}
            if(data.userIdx === ''){alert('고객 번호를 입력해주세요.');return;}
            if(data.content === ''){alert('제안서 내용을 입력해주세요.');return;}
            
            try {
                res = await axios.post('http://localhost:8082/addSuggest', {
                    userIdx : data.userIdx,
                    content : data.content,
                    insurance : data.insurance
            },
            {
                headers : {
                    // 'Authorization' : token
                }
            });
            } catch (err) {
                console.log(err);
            }
            console.log(res);
            commit
        },
        //청약서 작성
        async add_subscription({commit}, data){
            // let token = localStorage.getItem('token');
            let res;
            if(typeof(data.userIdx) === "string"){alert('고객 번호를 숫자로 입력해주세요.'); return;}
            if(data.userIdx === ''){alert('고객 번호를 입력해주세요.'); return;}
            if(data.content === ''){alert('청약서 내용을 입력해주세요.');return;}
            
            try {
                res = await axios.post('http://localhost:8080/addSubscription', {
                    userIdx : data.userIdx,
                    content : data.content
            },
            {
                headers : {
                    // 'Authorization' : token
                }
            });
            } catch (err) {
                console.log(err);
            }
            console.log(res);
            commit
        }
    }
}

export default salesmanModule

