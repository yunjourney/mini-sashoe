import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "./kream-logo.PNG"

const StyledHeaderTop = styled.header`
  background-color: #222831;
  width: 100%;
  padding: 10px 12px 15px 12px;
  display: flex;
  justify-content: right;
  .nav-top {
    margin-right: 30px;
    .mypage-link, .mypage-like, .cs-link {
      text-decoration: none;
      font-size: 13px;
      color: #ffffff;
    }
  }
`;

const StyledHeader = styled.header`
  background-color: #ffffff;
  width: 100%;
  padding: 25px 12px 25px 12px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  .nav-logo .nav-logo-link {
    /* width: 150px;
    height: 30px;
    text-decoration: none;
    font-size: 30px;
    color: #00ADB5;
    font-weight: bold; */
  }
  .category {
    .itemlist, .board {
    text-decoration: none;
    font-size: 20px;
    color: #222831;
    }
  }
  .search {
    border: 1px solid #222831;
  }
`;


const Header = () => {

  return (
    <>
      <StyledHeaderTop>
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
          <Link to = {"/"} className="nav-logo-link">
          <img src={logo} alt="logo"/></Link>
        </div>
        <div className="category">
          <Link to = {"/ItemList"} className="itemlist">SNEAKERS</Link>
        </div>
        <div className="category">
          <Link to = {"/Board"} className="board">커뮤니티</Link>
        </div>
        <div>
          <span className="search">이만큼검색창자리임</span>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;