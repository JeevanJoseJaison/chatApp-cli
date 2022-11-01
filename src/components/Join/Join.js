import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

   const handleName = (event) =>{
    setName(event.target.value);
   };

   const handleRoom = (event) =>{
    setRoom(event.target.value);
   };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a Room</h1>
        <div>
          <input placeholder="Name..." className="joinInput" type="text" onChange={handleName } />
        </div>
        <div>
          <input placeholder="Room..." className="joinInput mt-20" type="text" onChange={handleRoom} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
