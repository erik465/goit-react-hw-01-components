import styled from 'styled-components'


export const TransactionTable = styled.table`
  
    th, td{
        padding: 20px 40px
    }

    thead tr{
        background: #37949e !important;
        color:#eee;

    }

    tr{
        background-color: grey;
    }

    tr:nth-child(odd){
        background-color: #eee;
    }

`