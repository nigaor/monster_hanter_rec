import React from 'react';
import {useRouter} from 'next/router';

const DetailPage: React.FC = () => {
    const router = useRouter();
    const {name} = router.query;

    return (
        <div>
            <h1>詳細ページ</h1>
            <p>Name:{name}</p>
            <button onClick={() => router.push('/page')}>
                一覧に戻る
            </button>
        </div>
    );
};

export default DetailPage;
