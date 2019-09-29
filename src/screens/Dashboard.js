import React from "react";
import styled from "styled-components";
import NavBar from "../components/Nav";

class Dashboard extends React.Component {
  componentWillMount() {
    document.body.style = "background: white;";
  }
  render() {
    return (
      <View>
        <NavBar Dashboard={this.props.Dashboard} />
        <Container>
          <Logo src={require("../assets/tree.png")}></Logo>
          <br />
        </Container>
        <Container>
          <Card>
            <Title>الجلسات السابقة</Title>
          </Card>
          <Card>
            <Title>البنود المعروضة لإبداء الرآي</Title>
          </Card>
        </Container>
        <Container>
          <Card>
            <Title>جدول نهائي</Title>
          </Card>
          <Card>
            <Title>مشروع جدول</Title>
          </Card>
        </Container>
      </View>
    );
  }
}

export default Dashboard;

const View = styled.div``;
const Logo = styled.img`
  height: 200px;
`;

const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: "DroidKufiBold", bold;
  text-align: center;
`;

const Card = styled.div`
  width: 250px;
  height: 200px;
  margin: 0 16px;
  background-color: lightgrey;
  border-radius: 5px;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
