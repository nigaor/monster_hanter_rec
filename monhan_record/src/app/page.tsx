"use client";

import React,{useState} from 'react';

type Monster = {
  id: number;
  name: string;
  img: string;
};

export default function Home() {
  const anMonster: Monster[] = [
    {id: 1,name: "チャタカブラ",img: ""},
    {id: 2,name: "ケマトリス",img: ""},
    {id: 3,name: "ラバラバリナ",img: ""},
  ];

  return (
    <div>
      <h1>モンスターリスト</h1>
      <ul>
        {anMonster.map((item,index) => (
          <li key = {index}>
            {`Name: ${item.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
