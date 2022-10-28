import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import logo from "./kream-logo.PNG"


const StyledHeaderTop = styled.header`
  background-color: #222831;
  width: 100%;
  padding: 10px 12px 15px 12px;
  display: flex;
  justify-content: right;
  .nav-top {
    margin-right: 30px;
    .mypage-link, .mypage-like, .cs-link, .login {
      text-decoration: none;
      font-size: 13px;
      color: #ffffff;
    }
  }
`;

const StyledHeader = styled.header`
  background-color: #ffffff;
  width: 100%;
  padding: 40px 30px 40px 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  .nav-logo .logo-home {
    margin-right: auto;
    width: 200px;
  }
  .category {
    .itemlist, .board {
      text-decoration: none;
      font-size: 20px;
      color: #222831;
    }
  }
  .search {
    box-sizing: border-box;
    border: 1px solid #222831;
    padding: 8px;
  }
`;


// 헤더 - TOP: 로그인(마이페이지), 관심상품, 고객센터
// 헤더 : 로고(home이동), SNEAKERS(상품목록), 검색창
const Header = () => {

  // 검색창
  const [search, setSearch] = useState("");
  
  const onChange = (e) => {
    setSearch(e.target.value)
  }  
  const onClick = () => {
    axios.get()
    .then(response => {
      setSearch(response.data);
    })
  }


  return (
    <>
      <StyledHeaderTop>
        <div className="nav-top">
          <Link to = {"/Login"} className="login">로그인</Link>
        </div>
        <div className="nav-top">
          <Link to = {"/Modify"} className="mypage-link">마이페이지</Link>
        </div>
        <div className="nav-top">
          <Link to = {"/Modify"} className="mypage-like">관심상품</Link>
        </div>
        <div className="nav-top">
          <Link to = {"/cs"} className="cs-link">고객센터</Link>
        </div>
      </StyledHeaderTop>
      <StyledHeader>
        <div className="nav-logo">
          <Link to = {"/"}>
            <img src={logo} className="logo-home" alt="logo"/>
          </Link>
        </div>
        <div className="category">
          <Link to = {"/ItemList"} className="itemlist">SNEAKERS</Link>
        </div>
        <div className="category">
          <Link to = {"/Board"} className="board">커뮤니티</Link>
        </div>
        <div className="searchBar">
          <input type="text" className="search" value={search} placeholder="검색어 입력" onChange={onChange}/>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;