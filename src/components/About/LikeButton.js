import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import './likeButton.css'


const LikeButton = () =>
{
     const [likes, setLikes] = useState(0);
     const [isClicked, setIsClicked] = useState(false);

     const handleClick = () =>
     {
          if (isClicked)
          {
               setLikes(likes - 1);
          } else
          {
               setLikes(likes + 1);
          }
          setIsClicked(!isClicked);
     };

     return (
          <div className='class="button"'>
               <Button variant='primary' className={`like-button ${isClicked && 'liked'}`} onClick={handleClick}><i className='fa fa-heart'></i>{` ${likes}`}</Button>
          </div>
     );
};

export default LikeButton;