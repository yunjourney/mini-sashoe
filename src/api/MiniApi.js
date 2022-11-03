import axios from "axios";
const HEADER = "application/json";
const MINI_DOMAIN = "http://localhost:8010/mini_prj/";

const MiniApi =  {

    // 회원가입
    signUp: async function(id, pw, pwdCheck, name, email, emailName, phone1, phone2, phone3, phoneNum, addrNum, addr1, addr2) {
        const signupObj = {
            id: id,
            pwd: pw,
            pwdCheck: pwdCheck,
            memName: name,
            email: email,
            emailName: emailName,
            phone1: phone1,
            phone2: phone2,
            phone3: phone3,
            phoneNum: phoneNum,
            addrNum: addrNum,
            addr1: addr1,
            addr2: addr2
        }
        return await axios.post(MINI_DOMAIN + "SignUpServlet", signupObj, HEADER);
    },

    // 로그인 기능
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(MINI_DOMAIN + "LoginServlet", loginObj, HEADER);
    },

    // id 찾기 기능
    researchId: async function(name, mail) {
        const findIdObj = {
            memName: name,
            email: mail
        }
        return await axios.post(MINI_DOMAIN + "IdServlet", findIdObj, HEADER);
    },

    // pwd 찾기 기능
    researchPwd: async function(id) {
        const findPwdObj = {
            id: id
        }
        return await axios.post(MINI_DOMAIN + "PwdServlet", findPwdObj, HEADER);
    },

    // 상품 불러오기
    itemInfo: async function(brand, sort) {
        const itemCmd = {
            cmd : "ItemInfo",
            brand : brand,
            sort : sort
        }
        return await axios.post(MINI_DOMAIN + "ItemServlet", itemCmd, HEADER);
    },

    // 게시글 불러오기
    boardInfo: async function(docNum) {
        const boardCmd = {
            cmd: "boardInfo",
            docNum: docNum
        }
        return await axios.post(MINI_DOMAIN + "ItemServlet", boardCmd, HEADER);
    }
        
}

    
export default MiniApi;