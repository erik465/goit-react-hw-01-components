import { FriendListItemContainer } from "./FriendListItem.styled"

export const FriendListItem = ({ props }) =>{
    return(
        <FriendListItemContainer class="item" isonline={props.isOnline}>
            <span class="status"></span>
            <img class="avatar" src={props.avatar} alt="User avatar" width="48" />
            <p class="name">{props.name}</p>
        </FriendListItemContainer>
    )
}