import React from 'react';

export function ProfileCard({ name, age, bio }) {

  return (
    <div className="style">
        <h2>{name}</h2>
        <p>【年齢】{age}歳</p>
        <p>【自己紹介】{bio}</p>
    </div>
  );
}