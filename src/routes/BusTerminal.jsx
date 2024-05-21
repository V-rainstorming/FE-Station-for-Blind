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
    width: 100%;
`;

const BusImg = styled.img`
    position: fixed;
    left: 50%;
    top: 50%;
    width: 935px;
    transform: translate(-45%, -50%);
`;
const RouteImg = styled.img`
    position: fixed;
    left: 50%;
    top: 50%;
    height: 54%;
    transform: translate(90%, -50%);
`;
const LineUpper = styled.img`
    width: 165px;
    position: fixed;
    top: 6%;
    left: 50%;
    transform: translateX(-70%) rotate(18deg);
    ${props => !(props.$getOn || props.$getOff) && 'display: none;'}
`;
const LineLower = styled.img`
    width: 210px;
    position: fixed;
    top: 18%;
    transform: translateX(-32%) rotate(5deg);
    ${props => !(props.$getOn || props.$getOff) && 'display: none;'}
`;

const Routes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(20%, -50%);
    width: 30%;
`;
const RouteName = styled.div`
    font-size: 26px;
    font-weight: 400;
    font-family: Pretendard;
    padding: 9.5%;
    position: relative;
    color: ${props => props.$prev ? '#777' : 'black'};
    & > p {
        position: absolute;
        font-size: 18px;
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