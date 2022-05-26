import styled from 'styled-components'

export const AudioSettings = styled.div`
    background-color: #272D33;
    border-radius: 20px;
    width: 200px;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
      display: flex;
      flex-direction: column;
     align-items: center;
    font-size: 14px;
    box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.648);

    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer; 

`;
export const Power = styled.div`
   background-color: #0B1017;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 10px;
   width: 80%;
   padding-bottom: 5px;
   border-radius: 10px;
   box-shadow: 1px 3px 20px ${props => props.isOn ? 'rgba(0, 128, 0, 0.45)' : '#c25a5479'};

   &:hover {
      border: 1px solid #7b7979cf;
   }
`;
export const ShowSound = styled.div`
   background-color: #0B1017;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 10px;
   width: 80%;
   padding-bottom: 5px;
   border-radius: 10px; 
   box-shadow: 2px 2px 13px #454444cf;

   h4 {
      margin: 0 0 10px;
   }

   &:hover {
      border: 1px solid #7b7979cf;
   }
`;
export const Volume = styled.div`
   background-color: #0B1017;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 10px;
   width: 80%;
   padding-bottom: 5px;
   border-radius: 10px; 
   box-shadow: 2px 2px 13px #454444cf;

   h3 {
      margin-bottom: 0
   }
   p {
      margin: 5px 
   }

   &:hover {
      border: 1px solid #7b7979cf;
   }

   input {
      appearance: none;
      border-radius: 10px;
      padding: 1px;
  }
  input::-webkit-slider-thumb {
   appearance: none;
   height: 10px;
   width: 10px;
   background-color: blue;
   border-radius: 50%;
  }

`;
export const ChangeSound = styled.div`
   background-color: #0B1017;
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 80%;
   padding-bottom: 5px;
   border-radius: 10px;
   box-shadow: 2px 2px 13px #454444cf;

   &:hover {
      border: 1px solid #7b7979cf;
   }
`;
