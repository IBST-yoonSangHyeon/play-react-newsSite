import React, { memo } from 'react';
import BoxContent from './boxcontent';
import BoxHeader from './boxheader';
import BoxImg from './boximg';
import styles from './css/LeftBox.module.css';

const LeftBox = memo(({data}) => {
    console.log('data', data);
    // 백그라운드 컬러 사용 유무 
    // BoxHeadr 사용 유무 , 이미지, 내용 
    return (
            <>
                {/* left box wrap 시작 */}
                <div className={'container ' + (data.backGroundColor ? styles.background: '')} >
                { data.boxHeader &&  <BoxHeader boxHeaderSubject={data.boxHeaderSubject}/>}
                {/* left box 시작 */}
                { 
                    data.data.length === 0 
                    ? null 
                    : ( data.data.map((item, idx) => {
                            return (
                                <div className='row'>
                                    <div className={ item.imgCSS.imgCol+' mb-1'} style={{width : item.imgCSS.imgWidth, height : item.imgCSS.imgHeight}}>
                                        <BoxImg imgUrl={item.imgUrl}/>
                                    </div>
                                    <div className={ item.contentCSS.contentCol }>
                                        <BoxContent subject={item.subject} content={item.content}/>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
                
                {/* left box 끝 */}
                </div>
                {/* left box wrap 끝 */}
        </>
    );
});

export default LeftBox;