import React from 'react';
import Card from './Card';


/**
 * This function is the responsive container of all the user cards.
 * @param {users} array of users fetched 
 */
const CardList = ({ users }) => {
  return (
    <div>
      {
        users.map((user, i) => {
          return (
            <Card
              key={i}
              id={users[i].id}
              name = {users[i].name?users[i].name:users[i].login}
              email = {users[i].email}
              gitLink = {users[i].html_url?
                users[i].html_url
                :users[i].url}
              imageUrl = {users[i].avatar_url}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;