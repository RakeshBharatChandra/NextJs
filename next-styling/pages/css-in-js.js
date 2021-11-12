import styled from "styled-components"

const Title=styled.h2`
    font-size:50px;
    color:${({theme})=>
        theme.colors.Primary
    }

`

function CSSJS(){
    //return <h2 style={{color:"red"}}>Hello world</h2>
    return <Title>Styled Components</Title>
    
}
export default CSSJS