import styled from "styled-components";
import route_image from "../assets/BusRoutes.svg"
import bus_image from "../assets/BusImg.png"
import arrow_right from "../assets/arrow_right.svg"
import arrow_left from "../assets/arrow_left.svg"
import { useEffect, useState } from "react";

const Background = styled.div`
    background-image: linear-gradient(90deg, #112e59 0, #2563bf 60%);
    width: 100vw;
    height: 100vh;
    font-family: Pretendard;
    position: fixed;
    left: 0;
    top: 0;
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
    & > p:nth-child(3) {
        font-size: 28px;
        font-weight: 500;
    }
`;
const OuterP = styled.p`
    margin: 0;
    font-size: 24px;
    position: relative;
    & > strong {
        position: absolute;
        top: 100%;
        left: 0;
        color: #cf4040;
        font-size: 18px;
        font-weight: 500;
        width: 200px;
        margin: 0;
    }
`;
const RightGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    position: fixed;
    height: 100%;
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
    border: solid 3px ${props => props.$primary ? '#FFAD62' : '#777'};
    border-radius: 10px;
    background-color: rgba(35, 37, 39, .7);
    margin: 15px;
    cursor: pointer;
    & > p {
        font-size: 28px;
        font-weight: 500;
        color: ${props => props.$primary ? '#FFAD62' : '#777'};
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
    const url = 'https://www.devhsb.com/busDeviceInfo?bus_id=';
    const [userOnboardInfo, setUserOnboardInfo] = useState({});
    const [busPosInfo, setBusPosInfo] = useState({});
    const [routeList, setRouteList] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [busId, setBusId] = useState(1);
    const [isUserWaiting, setIsUserWaiting] = useState(false);

    const [stationArray, setStationArray] = useState(['-', '-', '-', '-', '-']);
    const [onBoardArray, setOnBoardArray] = useState([0, 0, 0, 0, 0]);
    let data;

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const result = window.prompt('버스 id 입력');
        setBusId(result);
        fetchSSE(result);
    }, [])

    useEffect(() => {
        if(isLoading) return;
        const idx = busPosInfo.now_station_no;
        let userArr = [0, 0, 0, 0, 0];
        let tmpArr = ['-', '-', '-', '-', '-'];
        let j = 0;
        for(let i = idx - 2; i <= idx + 2; i++) {
            if (i < 0 || i >= routeList.length) continue;
            if (userOnboardInfo.user_onboard_station_id == i) {
                userArr[j] = 1;
            }
            tmpArr[j++] = routeList[i].station_name;
            setStationArray(tmpArr);
            setOnBoardArray(userArr);
        }
    }, [busPosInfo]);

    const fetchSSE = async (id) => {
        const eventSource = new EventSource(url + id);

        eventSource.onopen = () => {
            // 연결 직후
        };
        eventSource.onmessage = async (e) => {
            const res = await e.data;
            const parseData = JSON.parse(res);
            data = parseData;
            if (data.user_onboard_info == null || data.user_onboard_info == undefined)
                setIsUserWaiting(false);
            else {
                setIsUserWaiting(true);
            }
            setUserOnboardInfo(data.user_onboard_info)
            setBusPosInfo(data.bus_pos_info)
            setRouteList(data.route_list)
            setIsLoading(false);
            //
        };

        eventSource.onerror = (e) => {
            eventSource.close();
        }
    };

    const getYearMonthDateString = () => {
        const year = currentDateTime.getFullYear();
        const month = currentDateTime.getMonth() + 1;
        const today = currentDateTime.getDate();

        return `${year}.${month < 10 ? '0' + month : month}.${today < 10 ? '0' + today : today}`;
    }

    const getDayString = () => {
        const day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        return day[currentDateTime.getDay()];
    }

    const getTimeString = () => {
        const hours = currentDateTime.getHours();
        const minutes = currentDateTime.getMinutes();
        const seconds = currentDateTime.getSeconds();
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    const handleOnClick = async () => {
        if (userOnboardInfo == null || userOnboardInfo == undefined) return;
        console.log(userOnboardInfo.service_id);
        try {
            const btnUrl = "http://www.hsbdev.com:28900/onBoardPassenger";
            const response = await fetch(btnUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({'service_id': userOnboardInfo.service_id})
            })
            const data = await response.json();
            console.log(data);
            if (data?.status === "Y" && data?.code === 200) {
                console.log("The user got on the bus.")
            } else {
                console.log("POST method failed: status == N")
            }
        }
        catch {
            console.log("POST method failed: post failed");
        }
    }

    return (
        <>
        {!isLoading && (
        <Background>
            <RouteContainer>  
                <img src={route_image} style={{width: '40px'}}/>
                <StationList>
                    <OuterP>{stationArray[4]}<strong>{onBoardArray[4] === 1 && '시각장애인 승차'}</strong></OuterP>
                    <OuterP>{stationArray[3]}<strong>{onBoardArray[3] === 1 && '시각장애인 승차'}</strong></OuterP>
                    <OuterP>{stationArray[2]}<strong>{onBoardArray[2] === 1 && '시각장애인 승차'}</strong></OuterP>
                    <OuterP>{stationArray[1]}</OuterP>
                    <OuterP>{stationArray[0]}</OuterP>
                </StationList>
            </RouteContainer>
            <RightGroup>
                <CurrentStation>{routeList[busPosInfo.now_station_no].station_name}</CurrentStation>
                <BusImage>
                    <img src={bus_image} />
                    <BusNumber>
                        <p>차량번호</p>
                        <p>{busId == 1 ? '440' : '333'}</p>
                    </BusNumber>
                </BusImage>
                <GetInBtn onClick={handleOnClick} $primary={isUserWaiting}>
                    <p>승차</p>
                </GetInBtn>
            </RightGroup>
            <TimeViewer>
                <DateViewer>
                    <p>{getYearMonthDateString()}</p>
                    <p>{getDayString()}</p>
                </DateViewer>
                <p>{getTimeString()}</p>
            </TimeViewer>
            {userOnboardInfo && (
            <BottomLeftItems>
                <img src={busPosInfo.is_user_infront == 1 ? arrow_left : arrow_right} style={{width: '80px'}}/>
                <FrontOrBack>{busPosInfo.is_user_infront == 1 ? '전방' : '후방'}</FrontOrBack>
                <Distance>
                    <p>{busPosInfo.user_bus_dist >= 100 ? Math.floor(busPosInfo.user_bus_dist) / 100 : Math.floor(busPosInfo.user_bus_dist)}</p>
                    <p>{busPosInfo.user_bus_dist >= 100 ? 'm' : 'cm'}</p>
                </Distance>
            </BottomLeftItems>
            )}
        </Background>
        )}
        </>
    );
}

export default TerminalHome