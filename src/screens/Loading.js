import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animations/loading.json";
import styled from "styled-components";

class Loading extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <View>
        <Container>
          <Lottie options={defaultOptions} width={400} />
        </Container>
      </View>
    );
  }
}

export default Loading;

const View = styled.div`
  width: ${window.innerWidth + "px"};
  height: ${window.innerHeight + "px"};
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: inline-block;
`;
