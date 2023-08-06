import styled from 'styled-components'

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : space-around;
    width : 200px;
`

export const ProfileDescription = styled.div`
    display : flex;
    flex-direction: column;
    background-color: #eee;
    align-items : center;
    justify-content : space-around;
    padding : 20px 10px;


    width : 100%;

    img{
        border-radius : 50%;
        height : 70px;
        width : 70px;
        margin-bottom : 10px;
    }

    p{
        margin-bottom : 10px;
    }

    
`

export const ProfileStats = styled.ul`
    display : flex;
    list-style: none;
    padding : 0;
    justify-content: space-around;
    background: #878a8a;
    margin: 0;


    li{
        display : flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
    }

    li span:nth-child(2){
        font-weight: bold;
    }
`