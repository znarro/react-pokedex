/** @jsx jsx */
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const LeftSide = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 400px;
  height: 600px;
  background-color: #ff0000;
`;

const RightSide = styled.div`
  width: 400px;
  height: 500px;
  background-color: #c42c2c;
  border: 2px solid black;
  border-radius: 10px;
  padding: 30px 40px;
`;

const Circle = styled.div`
  border: solid ${(props) => (props.big ? "5px whitesmoke" : "2px black")};
  border-radius: 50%;
  background-color: skyblue;
  width: ${(props) => (props.big ? "55px" : "20px")};
  height: ${(props) => (props.big ? "55px" : "20px")};
  margin-right: ${(props) => (props.big ? "20px" : "5px")};
`;

const Screen = styled.div`
  width: 90%;
  /* maybe I'll remove height */
  height: 250px;
  background-color: black;
  border: 20px solid whitesmoke;
  border-radius: 10px;
  margin: 20px auto;
`;

const CrossButton = styled.div`
  background: #4d4a4a;
  border-radius: 5px;
  box-shadow: 3px 2px 0 black;
  height: 100px;
  position: relative;
  width: 20px;
  &:after {
    background: #4d4a4a;
    border-radius: 5px;
    box-shadow: 3px 0 0 black;
    content: "";
    height: 20px;
    left: -40px;
    position: absolute;
    top: 40px;
    width: 100px;
  }
`;

const GreenButton = styled.div`
  width: 100px;
  height: 50px;
  background-color: #11c011;
  border: 2px solid black;
  border-radius: 10px;
`;

const BlueButton = styled.div`
  width: 20%;
  height: 30px;
  background-color: #6cbbff;
  border: 1px solid black;
  box-shadow: 2px 3px 2px black;
`;

const StyledInput = styled.input`
  background-color: #33b433;
  color: black;
  padding: 30px 10px;
  outline: none;
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export {
  Container,
  LeftSide,
  RightSide,
  Circle,
  Screen,
  CrossButton,
  GreenButton,
  BlueButton,
  StyledInput,
};
