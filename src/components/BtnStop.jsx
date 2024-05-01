import styled from 'styled-components';

const BtnStyle = styled.div`
    width: 15vh;
    height: 15vh;
    line-height: 15vh;
    border-radius: 100%;
    border: .5vh solid ${props => props.$enable ? '#e04227' : '#232527'};
    background-color: ${props => props.$enable ? '#e04227' : 'white'};
    text-align: center;
    font-size: 5vh;
    font-family: 'Pretendard';
    color: ${props => props.$enable ? 'white' : '#232527'};
    position: fixed;
    left: 5vh;
    bottom: 5vh;
`;

function BtnStop({enable}) {
    return (
        <BtnStyle $enable={enable}>STOP</BtnStyle>
    );
}

export default BtnStop;