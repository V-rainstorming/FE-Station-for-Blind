import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 60vw;
    height: 60vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20vh 20vw;
`;
const BtnTo = styled(Link)`
    box-sizing: border-box;
    display: block;
    padding: 20px 40px;
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    border-radius: 50px;
    font-size: 36px;
    font-weight: 300;
    background-color: #266fef;
    color: white;
    transition: all 0.2s ease;
    &:hover {
        background-color: #1553d3;
    }
`;

function SelectMode() {
    return (
        <Container>
            <BtnTo to="/control">관제 시스템</BtnTo>
            <BtnTo to="/busterminal">버스 단말기</BtnTo>
        </Container>
    );
}

export default SelectMode;