import React, { memo } from 'react';
import BoxContent from '../boxcontent';
import BoxHeader from '../boxheader';
import BoxImg from '../boximg';
import styles from './LeftBottomContentBox.module.css';

const LefBottomContentBox = memo(({data}) => {
    return (
        <>
            {/* left bottom content box wrap 시작 */}
            <div className='container p-0 ms-1 me-1'>
                <div className='row'>
                    { data.boxHeader &&  <BoxHeader boxHeaderSubject={data.boxHeaderSubject}/>}
                    <div className='row'>
                    { 
                        data.data.length === 0 
                        ? null 
                        : ( data.data.map((item, idx) => {
                                return ( 
                                    <div className={ data.boxCol }>
                                        <div style={{width : item.imgCSS.imgWidth, height : item.imgCSS.imgHeight}} >
                                            <BoxImg imgUrl={item.imgUrl}/>
                                        </div>
                                        <div>
                                            <BoxContent subject={item.subject} content={item.content}/>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                    </div>
                </div>
            </div>
            {/* left bottom content box wrap 시작 */}
        </>
    );
});

export default LefBottomContentBox;