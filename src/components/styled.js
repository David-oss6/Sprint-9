
import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    font-family: sans-serif;    
}

// Cabecera  ************
.cabecera {
    height: 100%;  
    max-width: 250px; 
    min-width: 120px;
    background-image: linear-gradient(0deg,   #1F1D36 0%, #14274E 35%) ;

    
    @media(max-width: 620px){
        background-color: #1F1D36;
        background-image: none;
        
   }
   
}
.searchBar{
   width: 100vw;
   display: flex;
   flex-flow: row nowrap;
   padding-left: 135%;
   margin-top: 10px;   
   @media(max-width: 900px){
        padding-left: 160%;
   }
    @media(max-width: 620px){
        padding-left: 135%;
   }
}

.fav-a{
    border-radius: 15px;
    padding: 0;
    margin: 0;
    background-color: #d3d1d1;
    color: #d3d1d1;
}
.search-input{
    border-radius: 15px;
    padding-left: 15px;
    width: 40vw;
    border: none;
}
.searchBtn{
    width: 50px;
     background-color:#1F1D36;
    border: none;
}
.search-i{
   color: white;
   background-color:#1F1D36;
}

.menu{
   padding-left: 5px;    
   margin-top: 60%;
   display: flex;
   flex-flow: column;
   text-align: left;
   min-width: 100px;
   max-width: 200px;
   height: 1000px;
   gap: 60px;
   font-size: 2vw;
   background-image: linear-gradient(0deg,   #1F1D36 0%, #14274E 35%) ;
 
   @media(max-width: 700px){
     min-width: 90px;
     margin-top: 0;
   }

   @media(max-width: 700px){
     min-width: 90px; 
     margin-top: 0;
   }

   @media(max-width: 615px){
    min-width: 90px;
    flex-flow: row nowrap;
    width: 100%;
    margin: 25px auto auto 70% ;
        background-color: #1F1D36;
    background-image: none;
     height: auto ;
     
   }
}
.menu-button{
    color: white;
    background-color: #14274E;
    border: none;
    font-size: 15px;
    font-weight: bolder;

    &:hover {
        box-shadow: 2px 5px #526c80;
    }

    @media(max-width: 930px){
font-size: 10px;
    }
    @media(max-width: 615px){
          background-color: #1F1D36;
          font-size: 12px;
   }

}
.menu-i{
    margin-right: 15px;
    color: white;
     background-color: #14274E;

    @media(max-width: 615px){
          background-color: #1F1D36;
   }
}

// Contenido Principal ******
.contenido{
    display: flex;
    flex-flow: column;
    margin: 50px;
    @media(max-width: 620px){
        margin-top: 100px;
    }   
    @media(max-width: 580px){
        margin-top: 50px;
    }

       

           
}

.historial-favoritos{
    display: flex;
    flex-flow: row nowrap;
    margin-top:30px;    
    margin-right: 40px;   
}

.mainVideo{
    margin-bottom: 30px;       
}
.presentacion-row{
    padding: 0 3%;
}
.presentacion-div{
    border-radius: 15px;
    display: flex;
    flex-flow: column wrap;
    padding: 5px;  
  
    @media(max-width: 620px){
     margin-top: 90px;
     padding-right: 50px;
 }
}

// VideoList ***********

.relatedVideo{
    
    border-radius: 15px;
    display: flex;
    flex-flow: column wrap;
    padding-bottom: 5px;
    
}
.related-img{
    width: 100%;
    height: 150px;

    @media(max-width: 560px) {
       height: 100px;
    }
}
.bag{
    border: black solid 2px;
    border-radius: 15px;
}
.bag1{
    margin-right: 5px;
    border-radius: 15px;
}
.bag2{
    margin-left: 5px;
    border-radius: 15px;
}
.favBtn{
    border-radius: 0 0 15px 15px;
    background-color: #526c80;
}

body {
		        color: #e0e0e0;
        font-size: 15px;
        background-color: #918e8e;

        @media(max-width: 990px){
           font-size: 15px;
        }
        @media(max-width: 700px){
           font-size: 10px;
        }
}
p{
    padding: 2px;
}
h2{
    font-size: 20px;
    padding-left: 10px;
}
h3{
    font-size: 15px;
    color: black;
    margin: 10px;
    

    @media(max-width:1200px ) {
        font-size: 12px;
    }
}
   img {
        border-radius: 15px 15px 0 0;        
        &:hover {
            cursor: pointer;
        }
    }
  
    li{
        list-style: none;  
        @media(max-width: 615px){
        text-align: center;

   }
    }

    .handleSubmitBtn{
      background-color: #526c80 ;
      border: none;
      border-radius: 15px;
    }
`;

export const FavBtn = styled.button`
    padding: 2px;
    border-radius: 50%;
    background-color: white;
`
export const MyInput = styled.input` 
`
/// Main Video ****************
export const MainDiv = styled.div`
        border: 2px #9AB3F5 solid;        
        border-radius: 15px;
        display: flex;
        flex-flow: row nowrap;
        height: 600px;
        padding: 10px;
        
        @media(max-width: 990px ){
            flex-flow: column ;
            height: 650px;
        }

        @media(max-width: 800px ){
            flex-flow: column ;
            height: 560px;
        }       `

export const MyIframe = styled.iframe`
width: 100%;
height: 100%;
border-radius: 15px 0 0 15px;

@media(max-width: 990px){
            flex-flow: column ;
            width: auto;
            padding: 5px 10px 5px 10px;
             border-radius: 15px 15px 0 0;
        }
`
export const InfoDiv = styled.div`        
        padding: 10px ;
        width: 30%;
        color: black;
        background-color: white ;
        border-radius: 0 15px 15px 0;

        @media(max-width: 990px){
            flex-flow: column ;
            width: auto;
            margin-bottom: 10px;
            height: 35%;
            padding: 10px ;
             border-radius: 0 0px 15px 15px;
        }
`
/// VIDEO LIST ****************

export const VidListDiv = styled.div`    
    display: flex;    
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 10px;
    border: 2px #9AB3F5 solid;
    width: 100%;
    border-radius: 15px;   
   
     @media(max-width: 1200px){
         flex-wrap: wrap;
     }
    
`
export const BoxVidDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 180px;    
    margin:5px;
    padding-bottom: 5px;
    text-align: center;           
    flex-shrink: 10;
    border: 2px solid black;
    border-radius: 15px;    
    color: black;
    background-color: white ;    

    @media(max-width: 560px) {
       width: 120px;
    }    
`
///// HISTORY
export const HisDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
    margin: 5px 5px 5px 5px;
    border: 2px solid #9AB3F5;
    
    border-radius: 15px; 
    justify-content: space-between;    
`
export const HisImg = styled.img`
    border-radius: 15px;`

/// Favoritos
export const FavDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 10px;
    margin: 5px 5px 5px 5px;
    border: 2px solid black;
    border-radius: 15px;
    justify-content: space-around;
    border: 2px solid #9AB3F5;
`
export const FavItemDiv = styled.div`
    display: flex;
    flex-flow: column;
    margin: 5px;
    width: 100px;
`
export const FavImg = styled.img`
    border-radius: 15px 15px 0 0;
    width: 100%;
`






