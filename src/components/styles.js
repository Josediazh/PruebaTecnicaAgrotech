import styled from 'styled-components';

export const ContentSpinner = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    background: linear-gradient(45deg,#4099ff,#82bcff)
`;

export const Spinner = styled.div`
  width: 50px;
    height: 50px;
    border: 5px solid white;
    border-top: 5px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    -webkit-animation: spin 1s linear infinite;
    will-change: transform;
    transform-style: preserve-3d;

    @keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}
`;
