import styled from "styled-components";
import route_image from "../assets/BusRoutes.svg"
import bus_image from "../assets/BusImg.png"
import arrow_right from "../assets/arrow_right.svg"
import arrow_left from "../assets/arrow_left.svg"

const Background = styled.div`
    background-image: linear-gradient(90deg, #112e59 0, #2563bf 60%);
    width: 100vw;
    height: 100vh;
`;
const RouteContainer = styled.div`
    background-color: white;
    box-shadow: rgba(0, 0, 0, .25) -10px 0 15px;
    width: 42vw;
    height: 100vh;
    position: fixed;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;
const StationList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 460px;
    padding-left: 20px;
    & > p {
        margin: 0;
        font-size: 24px;
    }
    & > p:nth-child(3) {
        font-size: 28px;
        font-weight: 500;
    }
`;
const RightGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    position: fixed;
    height: 100vh;
    right: 42vw;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 10;
`;
const CurrentStation = styled.p`
    font-size: 40px;
    color: white;
    font-weight: 500;
    margin: 15px;
`;
const BusImage = styled.div`
    position: relative;
    & > img {
        width: 360px;
    }
`;
const BusNumber = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    & > p {
        margin: 0;
        font-size: 28px;
        font-weight: 500;
    }
    & > p:nth-child(2) {
        font-weight: 700;
        font-size: 58px;
        color: #122F5A;
    }
`;
const GetInBtn = styled.div`
    width: 100px;
    height: 50px;
    border: solid 3px #FFAD62;
    border-radius: 10px;
    background-color: rgba(35, 37, 39, .7);
    margin: 15px;
    & > p {
        font-size: 28px;
        font-weight: 500;
        color: #FFAD62;
        margin: 0;
        text-align: center;
        line-height: 50px;
    }
`;

const TimeViewer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    margin: 15px;
    & > p {
        font-size: 40px;
        font-weight: 400;
        color: white;
        margin-top: 0;
    }
`;
const DateViewer = styled.div`
    display: flex;
    & > p {
        margin: 0;
        font-size: 20px;
        color: white;
        font-weight: 300;
    }
    & > p:nth-child(2) {
        margin-left: 5px;
        color: #FFAD62;
    }
`;
const BottomLeftItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    position: fixed;
    left: 30px;
    bottom: 15px;
`;
const FrontOrBack = styled.p`
    font-size: 36px;
    font-weight: 500;
    color: white;
    margin: 10px 0;
`;
const Distance = styled.div`
    display: flex;
    & > p {
        margin: 0;
        color: white;
        font-weight: 500;
        font-size: 52px;
    }
    & > p:nth-child(2) {
        color: #FFAD62;
    }
`;

function TerminalHome() {
    return (
        <Background>
            <RouteContainer>
                <img src={route_image} style={{width: '40px'}}/>
                <StationList>
                    <p>양곡도매시장</p>
                    <p>교대역</p>
                    <p>양곡도매시장</p>
                    <p>양곡도매시장</p>
                    <p>양곡도매시장</p>
                </StationList>
            </RouteContainer>
            <RightGroup>
                <CurrentStation>양곡도매시장</CurrentStation>
                <BusImage>
                    <img src={bus_image} />
                    <BusNumber>
                        <p>차량번호</p>
                        <p>511</p>
                    </BusNumber>
                </BusImage>
                <GetInBtn>
                    <p>승차</p>
                </GetInBtn>
            </RightGroup>
            <TimeViewer>
                <DateViewer>
                    <p>2024.06.08</p>
                    <p>토요일</p>
                </DateViewer>
                <p>18:05:46</p>
            </TimeViewer>
            <BottomLeftItems>
                <img src={arrow_right} style={{width: '80px'}}/>
                <FrontOrBack>후방</FrontOrBack>
                <Distance>
                    <p>1.7</p>
                    <p>m</p>
                </Distance>
            </BottomLeftItems>
        </Background>
    );
}

export default TerminalHome