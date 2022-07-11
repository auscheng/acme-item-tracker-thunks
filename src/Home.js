import React from 'react';
import { connect } from 'react-redux';

const Home = ({ users, things, topRanked, topRankedUser })=> {
    console.log(topRankedUser)
    return (
    <div>
      <h1>Home</h1>
      <p>
        Here at the Acme Item Tracker Corp we have { users.length } users and { things.length } things!
      </p>
      <h2>Top Ranked Thing</h2>
      <ul>
        {
          topRanked.map( thing => {
            return (
              <li key={ thing.id }>
                { thing.name }
              </li>
            );
          })
        }
      </ul>
      <h2>Top Ranked User</h2>
      <ul>
          {
              topRankedUser.map( user => {
                  return (
                      <li key={ user.id}>
                          { user.name}
                      </li>
                  )
              })
          }
      </ul>
    </div>
  );
};

const mapSToP = (state)=> {
  const topRank = Math.max(...state.things.map(thing => thing.ranking));
  const topRanked = state.things.filter(thing => thing.ranking === topRank);
  const topRankUser = Math.max(... state.users.map(user=> user.ranking));
  const topRankedUser = state.users.filter(user => user.ranking === topRankUser);
  return {
    users: state.users,
    things: state.things,
    topRanked,
    topRankedUser
  };
};

export default connect(mapSToP)(Home);
