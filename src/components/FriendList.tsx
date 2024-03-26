import React from "react";

interface FriendListProps {
  friends: string[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <div className="friend-list">
      <h2>Friend's list.</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
