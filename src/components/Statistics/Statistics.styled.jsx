import styled from 'styled-components'

export const StatisticsContainer = styled.section`
    display:flex;
    flex-direction: column;
    width : 400px;
    margin-top:30px;

    h2{
        display : block;
        width : 100%;
        background-color: #fff;
        padding: 20px;
        text-align:center;
    }

`

export const StatisticsList = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:row;
    padding:0;
    margin:0;

    li{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: space-around;
        height:60px;
        color:#eee;
        width: 100px
    }

    li:nth-child(1){
        background-color: blue;
    }

    li:nth-child(2){
        background-color: purple;
    }

    li:nth-child(3){
        background-color: pink;
    }

    li:nth-child(4){
        background-color: turquoise;
    }
`