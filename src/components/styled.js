import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    font-family: sans-serif;
}
	body {
		background-color: #01579b;
        color: #e0e0e0;
        font-size: 20px;

        @media(max-width: 990px){
           font-size: 15px;
        }
        @media(max-width: 700px){
           font-size: 10px;
        }
	}

    i{
        border: none;
        color: white;
        font-size: 15px;
        background-color: #01579b;

        @media(max-width: 990px){
        font-size: 15px;
    }
       
    }
    button {
        text-decoration: none;
        border: none;

        &:hover {
        cursor: pointer;
        }
    }
    img {
        width: 100%;
        border-radius: 15px 15px 0 0;

        &:hover {
            cursor: pointer;
        }
    }

    ul {
        font-size: 25px;
        color: white;
        margin-left: 25px;

        @media(max-width: 990px){
            font-size: 20px;
        } 
    }
    li{
        list-style: none;        
    }
`;

/// APP ****************
export const AppDiv = styled.div`
    flex-shrink: 6;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    margin-left: 200px;

    @media(max-width: 990px){
           font-size: 15px;
            margin-left: 120px;
        }
        
`

export const FavBtn = styled.button`
    align-self: flex-end;
    justify-self: flex-end;
`

/// CABECERA ****************
export const SideDiv = styled.div`
position: absolute;
display: flex;
flex-flow: column ;
height: 100%;
width: 180px;
background-color: #024274;
margin: 0px;
padding-top: 150px;
align-content: center;
border: black solid 1px;
gap: 50px;

 @media(max-width: 990px){
           width: 120px; ;
           
        }


`
export const SearchDiv = styled.div`
position: sticky;
width: 100%;
background-color: #01579b;
height: 50px;
margin-left: 180px;
padding: 10px 0 10px 10px;
border: black solid 1px;

@media(max-width: 990px){
           margin-left: 120px; ;

        }
`

export const MyBtn = styled.button`
    margin-left: 15px;
    background-color:#024274;
    color: white;
    border: none;
    font-size: 20px;

    &:hover {
        cursor: pointer;
    }

    @media(max-width: 990px){
           font-size: 13px;

        }

     
`
export const MyInput = styled.input`
    width: 600px;
    height: 30px;
    border-radius: 50px;
    margin-right: 7px;
    padding-left: 10px;
@media(max-width: 990px){
    width: 400px;
}
    @media(max-width: 650px) {
       width: 200px;
    } 
`


/// Main Video ****************
export const MainDiv = styled.div`
        margin: 20px 0px 50px 20px;
        border: 2px black solid;
        border-radius: 15px;
       `
export const VidInfoVid = styled.div`
        display: flex;
        flex-flow: row nowrap;

    @media(max-width: 990px){
            flex-flow: column ;
        }
`

export const VideoDiv = styled.div`
    padding: 10px 0 10px 10px;
    width: 80%;
    border-radius: 15px;

    @media(max-width: 990px){
            flex-flow: column ;
            width: auto;
             margin:  0px;
            padding: 0px 10px 0 10px;
             border-radius:  15px 15px 0 0px;
        }
    
  `
export const MyIframe = styled.iframe`
width: 100%;
height: 100%;
border-radius: 15px 0 0 15px;

@media(max-width: 990px){
            flex-flow: column ;
            width: 100%;

             margin:  0px;
            padding: 0px 10px 0 10px;
             border-radius:  15px 15px 0 0px;
        }
`
export const InfoDiv = styled.div`
        margin: 10px 10px 10px 5px;
        padding: 10px 0 10px 0;
        width: 30%;
        color: black;
        background-color: white ;
        border-radius: 0 15px 15px 0;

        @media(max-width: 990px){
            flex-flow: column ;
            width: auto;

             margin: 0px ;
            padding: 0px 10px 0 10px;
             border-radius: 0 0px 15px 15px;
        }
`

/// VIDEO LIST ****************

export const VidListDiv = styled.div`
    padding: 5px 10px 5px 10px ;
    display: flex;
    
    justify-content: space-between;
    align-content: space-between;
    border: 2px black solid;
    border-radius: 15px;

    @media(max-width: 860px) {
       flex-flow: wrap;
       max-width: 700px;
       max-height: 550px;
    }
    
`

export const BoxVidDiv = styled.div`
    margin:5px;
    padding-bottom: 5px;
    text-align: center;
           
    width: 200px;
    border-radius: 15px;
    font-size: 15px;
    color: black;
    background-color: white ;

    @media(max-width: 1100px) {
        width: 150px;
    }

    /* @media(max-width: 600px) {
        width: 100px;
        
    } */
`

export const VidsBtn = styled.div`
    text-decoration: none;
    padding: 0;
`

export const MyH3 = styled.h3`
    padding: 5px;
    font-size: 13px;
`
/// PRESENTACION

export const PresH3 = styled.h3`
margin-left: 200px;
margin-top: 10px;

@media(max-width: 990px){
    margin-left: 140px;
}
`

export const PresDiv = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex-shrink: 6;
    justify-content: space-between;
    margin: 15px 10px 5px 180px ;
    padding: 5px;
    text-align: center;
    border: black 2px solid;
    border-radius: 15px;
    font-size: 15px;
    color: black;
    background-color:#01579b;

    @media(max-width: 990px){
    margin-left: 140px;
}

    @media( max-width: 768px) {
        flex-flow: column nowrap;
        justify-content: center;
        align-content: center;
    }
`

export const PresIndividualDiv = styled.div`
       margin:5px;
        text-align: center;
    

    
    width: 200px;
    border-radius: 15px;
    font-size: 15px;
    color: black;
    background-color: white ;

     @media(max-width: 990px){
    width: 150px;
}

    @media( max-width: 768px) {
        
        justify-self: center;
        align-self: center;
    }
`

///// HISTORY
export const HisDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    padding: 5px;
    margin: 5px 5px 5px 200px;
    border: 2px solid black;
    border-radius: 15px;

    @media(max-width: 1200px){
        flex-wrap: wrap;
    }
`
export const BoxHisDiv = styled.div`
    margin:5px;
    padding-bottom: 5px;
    text-align: center;
    
        
    width: 100px;
    border-radius: 15px;
    font-size: 15px;
    color: black;
    background-color: white ;
    
`




