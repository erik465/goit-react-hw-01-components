import { Profile } from './Profile/Profile';
import { GlobalStyle } from './GlobalStyle';
import user from '../data/user.json'

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <GlobalStyle />
    </>
  );
};
