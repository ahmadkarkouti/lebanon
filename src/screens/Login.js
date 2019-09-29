import React from "react";
import styled from "styled-components";
import firebase from "../components/Firestore";

class Login extends React.Component {
  login = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(r => {
        alert(r);
      });
  };

  componentWillMount() {
    document.body.style = "background: #282c34;";
  }
  render() {
    return (
      <View>
        <Logo src={require("../assets/tree.png")}></Logo>
        <Container>
          <Label>البريد الالكتروني</Label>
          <Input id="email"></Input>
          <Label>كلمة السر</Label>
          <Input id="password" type="password"></Input>
          <Button onClick={() => this.login()}>تسجيل الدخول</Button>
        </Container>
      </View>
    );
  }
}

export default Login;

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 4px;
  border-style: none;
  font-size: 24px;
  margin-bottom: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Label = styled.h2`
  color: white;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 32px;
  margin-top: 160px;
`;

const Button = styled.button`
  width: 250px;
  height: 40px;
  border-radius: 4px;
  border-style: none;
  background-color: lightgrey;
  color: black;
  font-weight: bold;
  font-size: 22px;
`;
