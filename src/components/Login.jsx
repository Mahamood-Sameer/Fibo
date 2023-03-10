import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import image from "../Images/loginimage.png";
import logo from "../Images/logo.png";
import google from "../Images/googlelogo.png";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
// For dark mode
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { auth, provider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Login() {
  // user
  // User login
  const navigate = useNavigate();
  const loginUser = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className={style.login_container}>
        <div className={style.login_left}>
          <img src={image} alt="loginimage" />
          <h1>Fitness Made Easy</h1>
          <p>
            FiBO helps you track your fitness goals, and manage your gyms,
            clients and branches in a one stop solution, saving you time and
            money!
          </p>
        </div>
        <div className={style.login_right}>
          <div className={style.image_container}>
            <img src={logo} alt="logo" />
            <h1>FITNESS</h1>
          </div>
          <div className={style.login_heading}>
            <h1>Login to your Account</h1>
            <p>Your Own Digital Campaign</p>
          </div>
          <form className={style.login_form}>
            <TextField
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              className={style.inputbox}
            />
            <Button type="submit" className={style.submit_btn}>
              Login to Your Account
            </Button>
          </form>
          <br />
          OR
          <br />
          <div
            className={style.login_google}
            onClick={() => {
              loginUser();
            }}
          >
            <img src={google} alt="google" />
            <p>Log in with Google</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Login;
