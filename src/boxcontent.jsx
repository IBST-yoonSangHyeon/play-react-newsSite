import React from 'react';
import styles from './css/BoxContent.module.css'

const BoxContent = ({subject, content}) => {
    console.log('subject : ', subject);
    console.log('content : ', content);
    
    // 제목, 내용
    return (
        <>
            <div className={styles.subject}>{subject}</div>
            <div className={styles.content}>{content}</div>
        </>
    );
};

export default BoxContent;