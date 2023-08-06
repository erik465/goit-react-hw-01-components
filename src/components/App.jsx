import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyle } from './GlobalStyle';
import user from '../data/user.json'
import data from '../data/data.json'

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

      <Statistics data = {data} />

      <GlobalStyle />
    </>
  );
};
