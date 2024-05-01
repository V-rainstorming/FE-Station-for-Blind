import styled from 'styled-components';

import BtnStop from '../components/BtnStop';

import bus_background from '../assets/BusBackground.svg';
import bus_routes from '../assets/BusRoutes.svg';
import line_upper from '../assets/line_top.png';
import line_lower from '../assets/line_bottom.png';
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const MainLayout = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
`;

const BusImg = styled.img`
    height: 100%;
    transform: translateX(10vh);
`;
const RouteImg = styled.img`
    height: 72%;
    transform: translateX(-52vh);
`;
const LineUpper = styled.img`
    position: absolute;
    top: 1vh;
    transform: translateX(-3vh);
    ${props => !(props.$getOn || props.$getOff) && 'display: none;'}
`;
const LineLower = styled.img`
    position: absolute;
    top: 12vh;
    transform: translateX(-7vh);
    ${props => !(props.$getOn || props.$getOff) && 'display: none;'}
`;

const Routes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    position: absolute;
    transform: translateX(40vh);
    width: 55vh;
`;
const RouteName = styled.div`
    font-size: 5vh;
    font-weight: 500;
    font-family: Pretendard;
    padding: 4.2vh;
    position: relative;
    color: ${props => props.$prev ? '#777' : 'black'};
    & > p {
        position: absolute;
        font-size: 3vh;
        font-weight: 700;
        color: #e04227;
        margin: 0;
    }
`;

function BusTerminal() {
    const [routeNames, setRouteNames] = useState(['양재역', '양재시민의공원', '교대역', '마곡나루', '인하대후문']);
    const [getOnRoute, setGetOnRoute] = useState([false, false, false, true, true]);
    const [getOffRoute, setGetOffRoute] = useState([false, false, false, true, false]);
    const [idx, setIdx] = useState(2);

    return (
        <Container>
            <MainLayout>
                <BusImg src={bus_background}/>
                <RouteImg src={bus_routes}/>
                <LineUpper src={line_upper} $getOn={getOnRoute[idx+2]} $getOff={getOffRoute[idx+2]}/>
                <LineLower src={line_lower} $getOn={getOnRoute[idx+1]} $getOff={getOffRoute[idx+1]}/>
                <Routes>
                    <RouteName $prev={false}>{routeNames[idx+2]}{(getOnRoute[idx+2] || getOffRoute[idx+2]) && (<p>시각장애인 {getOnRoute[idx+2] && '승'}{getOffRoute[idx+2] && '하'}차</p>)}</RouteName>
                    <RouteName $prev={false}>{routeNames[idx+1]}{(getOnRoute[idx+1] || getOffRoute[idx+1]) && (<p>시각장애인 {getOnRoute[idx+1] && '승'}{getOffRoute[idx+1] && '하'}차</p>)}</RouteName>
                    <RouteName $prev={false}>{routeNames[idx]}</RouteName>
                    <RouteName $prev={true}>{routeNames[idx-1]}</RouteName>
                    <RouteName $prev={true}>{routeNames[idx-2]}</RouteName>
                </Routes>
            </MainLayout>
            <BtnStop enable={true}></BtnStop>
        </Container>
    );
}

export default BusTerminal;