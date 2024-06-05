import styled from 'styled-components';

import BtnStop from '../components/BtnStop';

import bus_background from '../assets/BusBackground.svg';
import bus_routes from '../assets/BusRoutes.svg';
import { useState } from 'react';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MainLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const BusImg = styled.img`
    width: 935px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
`;
const RouteImg = styled.img`
    height: 54%;
    width: 50px;
`;

const Routes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 400px;
`;
const RouteName = styled.div`
    font-size: 26px;
    font-weight: 400;
    font-family: Pretendard;
    padding: 47px;
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
            <div><p>text</p></div>
            <MainLayout>
                <BusImg src={bus_background}/>
                <RouteImg src={bus_routes}/>
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