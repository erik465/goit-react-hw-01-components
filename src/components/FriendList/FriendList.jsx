import { FriendListItem } from "components/FriendListItem/FriendListItem"
import { FriendListContainer } from "./FriendList.styled"

export const FriendList = ({props}) =>{
    return(
       <FriendListContainer>
        {props.map(item => {
            return <FriendListItem props={item} key={item.id}/>
        })}
       </FriendListContainer> 
    )
}