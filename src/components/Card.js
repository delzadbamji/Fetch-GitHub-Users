import React from 'react';


/**
 * Redirects the page to the github link or the homepage depending on what is passed.
 * @param {url}  githublink
 */
const goTo = (url)=> {window.open(url)};


/**
 * This is the card in which teh fetched user is displayed. 
 * When clicked, it takes the client to the github profile page of the user.
 * @param {id} id of the user
 * @param {name} user's name
 *  @param {email} email of the user
 *  @param {gitLink} github profile of the user
 *  @param {imageUrl} image of the user from their github page
 */
const Card = ({ id,name, 
                email, 
                gitLink, 
                imageUrl=`https://robohash.org/${Math.floor(Math.random() * 10) + 1}?size=200x200` }
              ) => {
                    return (
                      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5' onClick={()=>goTo(gitLink?gitLink:`#`)}>
                        <img src={imageUrl} alt='users' width="200" height="200"  />
                        <div>
                          <h2>{name?name:`User not found`}</h2>
                          <p>{email?email:`No email found`}</p>
                        </div>
                      </div>
                    );
              }

export default Card;
