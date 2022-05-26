import styled from 'styled-components'

export const Buttons = styled.div`
    button {
        padding: 35px 45px;
        border: none;
        outline: none;
        border-radius: 5px;
        background-color: ${props => props.isClicked && props.isOn ? props.randomColor : '#0B1017'} ;
        color: #FFF;
        box-shadow: 2px 2px 13px ${props => props.isClicked && props.isOn ? props.randomColor : '#454444cf'};
        font-weight: 700;
        font-size: 1.10em;

        &:hover {
            opacity: 0.9;
            border: solid 1px #7b7979cf
        }
    }    
`; 
//454444cf