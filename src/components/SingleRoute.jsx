import styled from 'styled-components';
import Bus from '../assets/Bus';

const SingleRouteContainer = styled.div`
    display: flex;
    align-items: center;
`;

const BusLine = styled.div`
    width: 1px;
    height: 80%;
    margin: 10% 2% 10% 23%;
    position: relative;
    border-left: 3px dashed #d3d3d5;
    & > svg {
        position: absolute;
        left: 50%;
        top: 28.6%;
        transform: translate(-50%, -50%);
    }
`;

const RouteLine = styled.div`
    width: 3px;
    height: 80%;
    margin: 10% 10%;
    position: relative;
    border-radius: 2.5px;
    background-color: ${props => props.$routeColor};
`;

const RoutePoint = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 3px solid ${props => props.$routeColor};
    background-color: white;
    position: absolute;
    left: 1.5px;
    top: ${props => props.$pointNumber}%;
    transform: translate(-50%, -50%);
`;
const RouteNameByPoint = styled.p`
    position: absolute;
    left: 20px;
    top: ${props => props.$pointNumber}%;
    margin: 0;
    width: 150px;
    transform: translateY(-50%);
    color: #232527;
    font-size: 18px;
`;

function BusRouteMap({routeColor, routeName}) {
    return (
        <SingleRouteContainer>
            <BusLine><Bus busColor={routeColor}/></BusLine>
            <RouteLine $routeColor={routeColor}>
                {
                    routeName.map((item, idx) => (
                        <>
                            <RoutePoint key={idx}
                                $routeColor={routeColor} 
                                $pointNumber={idx / (routeName.length - 1) * 100}/>
                            <RouteNameByPoint $pointNumber={idx / (routeName.length - 1) * 100}
                                >{item}</RouteNameByPoint>
                        </>
                    ))
                }
            </RouteLine>
        </SingleRouteContainer>
    );
}

export default BusRouteMap;