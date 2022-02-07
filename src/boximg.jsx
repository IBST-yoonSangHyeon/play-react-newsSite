import React from 'react';

const BoxImg = ({imgUrl}) => {
    console.log('imgUrl', imgUrl);
    
    let imgUrlBoolean = true;
    if(imgUrl === undefined || imgUrl === ''){
        imgUrlBoolean = true;
    }

    // 이미지 src , 이미지 높이 넓이
    return (
        <>
            {
            imgUrlBoolean 
            && <img src={imgUrl} className='img-thumbnail h-55'/>
            }
        </>
    );
};

export default BoxImg;