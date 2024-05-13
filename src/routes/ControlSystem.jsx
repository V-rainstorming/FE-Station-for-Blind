import styled from 'styled-components'
import BusRouteMap from '../components/SingleRoute';

const Background = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f3f3f5;
`;

const ControlContainer = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 3vh;
    padding: 3vh;
    & > div {
        border-radius: 15px;
        background-color: white;
        width: 100%;
        height: 45vh;
    }
`;

const FullRouteMap = styled.div`
`;

function ControlSystem() {
    const dummyRoute = ['교대역', '선바위역', '양재역', '양곡도매시장', '교대역', '선바위역', '양재역', '양곡도매시장'];
    return(
        <Background>
        <ControlContainer>
            <FullRouteMap></FullRouteMap>
            <BusRouteMap routeColor={'#266fef'} routeName={dummyRoute}></BusRouteMap>
            <FullRouteMap></FullRouteMap>
            <BusRouteMap routeColor={'#0fa393'} routeName={dummyRoute}></BusRouteMap>
        </ControlContainer>
        </Background>
    );
}

export default ControlSystem;