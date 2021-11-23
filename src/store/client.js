import axios from "axios";

const clientModule = {
    state : {
        userData : {}
    },
    mutations : {
        
    },
    getters : {

    },
    actions : {
        //사고 처리
        async add_accident({commit}, data){
            // let token = localStorage.getItem('token');
            let res;
            if(data.date === ''){
                alert('날짜를 입력해주세요.')
                return;
            }
            if(data.content === ''){
                alert('사고 내용 및 사진을 입력해주세요.')
                return;
            }
            if(data.price === ''){
                alert('사고 피해 금액을 입력해주세요.')
                return;
            }
            try {
                res = await axios.post('http://localhost:8080/addAccident', {
                    date : data.date,
                    content : data.content,
                    price : data.price
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
    }
}

export default clientModule

