import styled from 'styled-components'


export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
    `;

 export const Card= styled.div`
    background-color: #77a8a8;
    margin-top: -900px;
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    border-color: #587e76;
    
    
    `;
export  const InputStyle= styled.input`
    align-content: center;
    
    
    border-color: ${(props)=>(props.borderStyled)};
    width:500px;
    height: 30px;
    border-radius: 10px;
    background-color: #daebe8 ;
    `;

export const ButtonStyle= styled.button`
    background-color: #daebe8;
    border-radius: 10px;
    width:150px;
    height: 30px;
    `;

export   const InputDiv= styled.div`
    display: grid;
  place-items: center;
  margin-bottom: 40px;
  margin-top: 10px;
    `;

  export const SignContainer = styled.div`
  background-color: #d9ecd0;
  height: 100vw;
  width: 100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  `;

  export const SignCard = styled(Card)`
margin-top: 0px;
display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -1100px;
    height: 25%;
`;

export const ErrorStyled = styled.p`
font-size: 12px;
  color: red;
   margin-top: 0px;
`


   
