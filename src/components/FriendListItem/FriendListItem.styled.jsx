import styled from 'styled-components'

const getStatusColor = props => {
    return props.isonline ? 'green' : 'red'
}

export const FriendListItemContainer = styled.li`
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    background-color: #eee;
    padding: 10px 150px 10px 5px;
    box-shadow: 0px 2px 10px black;

    span{
        display: block;
        height: 10px;
        width: 10px;
        background: ${getStatusColor};
        border-radius:50%;
    }
`