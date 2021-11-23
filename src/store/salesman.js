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
            if(data.userIdx === ''){
                alert('고객 번호를 입력해주세요.')
                return;
            }
            if(data.content === ''){
                alert('제안서 내용을 입력해주세요.')
                return;
            }
            try {
                res = await axios.post('http://localhost:8080/addSuggest', {
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
        },
        //청약서 작성
        async add_subscription({commit}, data){
            // let token = localStorage.getItem('token');
            let res;
            if(data.userIdx === ''){
                alert('고객 번호를 입력해주세요.')
                return;
            }
            if(data.content === ''){
                alert('청약서 내용을 입력해주세요.')
                return;
            }
            try {
                res = await axios.post('http://localhost:8080/addSuggest', {
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

