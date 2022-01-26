import React from 'react';
import BoxContent from './boxcontent';
import BoxHeader from './boxheader';
import BoxImg from './boximg';

const LeftBox = () => {
    // 백그라운드 컬러 사용 유무 
    // BoxHeadr 사용 유무 , 이미지, 내용 
    return (
            <>
                {/* left box wrap 시작 */}
                <div className='container '>
                <BoxHeader />
                {/* left box 시작 */}
                <div className='row'>
                
                    <div className='col-4 mb-1'>
                        <BoxImg />
                    </div>
                    <div className='col-8 '>
                        <BoxContent />
                    </div>
                </div>
                {/* left box 끝 */}
                
                {/* left box 시작 */}
                <div className='row'>
                    <div className='col-4 '>
                        <BoxImg />
                    </div>
                    <div className='col-8 '>
                        <BoxContent />
                    </div>
                    </div>
                    {/* left box 끝 */}
                </div>
                {/* left box wrap 끝 */}
        </>
    );
};

export default LeftBox;