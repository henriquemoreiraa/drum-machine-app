import styled from 'styled-components'
// 020405 272D33
export const Buttons = styled.div`
    background-color: #272D33;
    width: 350px;
    padding: 10px 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    border-radius: 20px;
    box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.648);

    button {
        padding: 35px 45px;
        border: none;
        outline: none;
        border-radius: 5px;
        background-color: #0B1017;
        color: #FFF;
        box-shadow: 2px 2px 13px #454444cf;
        font-weight: 700;
        font-size: 1.10em;

        &:hover {
            opacity: 0.9;
            border: solid 1px #7b7979cf
        }
    }    
`;