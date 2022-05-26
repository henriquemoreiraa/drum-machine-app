import styled from 'styled-components'

export const Container = styled.div`
    background-color: #13161A;
    border-radius: 20px;
    width: 600px;
    padding: 30px 1px;
    display: flex;
    justify-content: space-around;
    border: 1px solid #272D33
`;

export const Button = styled.div`
    background-color: #272D33;
    width: 350px;
    padding: 10px 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    border-radius: 20px;
    box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.648);
`;