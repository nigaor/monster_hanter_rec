'use client'

import React from 'react';
import {useParams,useRouter} from 'next/navigation';

const DetailPage: React.FC = () => {
    const router = useRouter();
    const {name} = useParams();

    return (
        <div>
            <h1>詳細ページ</h1>
            <p>Name:{name}</p>
            <button onClick={() => router.push('/')}>
                一覧に戻る
            </button>
        </div>
    );
};

export default DetailPage;
