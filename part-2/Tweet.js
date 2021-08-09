"use strict"

function Tweet(props){
  let {username, message, date, name} = props;
  return (
    <div className="tweet">
        <ul>
            <li>Username: {username}</li>
            <li>Name: {name}</li>
            <li>Date: {date}</li>
            <li>Message: {message}</li>
        </ul>
    </div>
  );
}