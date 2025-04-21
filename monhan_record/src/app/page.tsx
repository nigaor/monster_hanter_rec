"use client";

import React,{useState} from 'react';
import styles from '../app/DataList.module.css'
import Link from 'next/link';

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
    {id: 4,name: "ババコンガ",img: ""},
    {id: 5,name: "バーラハーラ",img: ""},
    {id: 6,name: "ドシャグマ",img: ""},
    {id: 7,name: "ウズトゥナ",img: ""},
    // {id: 8,name: "ププロポル",img: ""},
    // {id: 9,name: "レ・ダウ",img: ""},
    // {id: 10,name: "ネルスキュラ",img: ""},
    // {id: 11,name: "ヒラバミ",img: ""},
    // {id: 12,name: "アジャラカン",img: ""},
    // {id: 13,name: "ヌ・エグドラ",img: ""},
    // {id: 14,name: "護竜ドシャグマ",img: ""},
    // {id: 15,name: "護竜リオレウス",img: ""},
    // {id: 16,name: "護竜オドガロン亜種",img: ""},
    // {id: 17,name: "護竜アンジャナフ亜種",img: ""},
    // {id: 18,name: "シーウー",img: ""},
    // {id: 19,name: "イャンクック",img: ""},
    // {id: 20,name: "ゲリョス",img: ""},
    // {id: 21,name: "リオレイア",img: ""},
    // {id: 22,name: "リオレウス",img: ""},
    // {id: 23,name: "グラビモス",img: ""},
    // {id: 24,name: "ドドブランゴ",img: ""},
    // {id: 25,name: "ゴア・マガラ",img: ""},
    // {id: 26,name: "アルシュベルド",img: ""},
  ];

  const [checkedItems,setCheckedItems] = useState<boolean[]>(
    Array(anMonster.length).fill(false)
  )

  const handleCheckboxClick = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className={styles.container}>
      <h1>データリスト</h1>
      <ul className={styles.dataList}>
        {anMonster.map((item,index) =>(
          <li key={index} className={styles.dataItem}>
            <Link
              href={{
                pathname: '/detail',
                query: {
                  name: item.name,
                },
              }}
              passHref
            >
            <div className={styles.textContainer}>
              {`${item.name}`}
            </div>
            </Link>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleCheckboxClick(index)}
              />
              {checkedItems[index]}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};