import { Link } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {

    const onClickSignup = () => {
        console.log("회원 가입으로 이동");
        window.location.replace("/Signup");
    }

    return(
        <>
            <h1>Home</h1>
        </>
    )
}
export default Home;