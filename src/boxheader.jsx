import React, { memo } from 'react';

const BoxHeader = memo(({boxHeaderSubject}) => {
    // 왼쪽 카테고리명, 오른쪽 카테고리명
    return (
            <>
                {/* left box header 시작 */}
                <div className='row justify-content-between  mb-1 border-top-thick border-top-style border-bottom'>
                <div className='col-6  text-left font-weght-bold font-size-20'>
                    {boxHeaderSubject}
                </div>
                <div className='col-6  text-right font-weght-bold'>
                    더보기
                </div>
                </div>
                {/* left box header 끝 */}            
            </>
    );
});

export default BoxHeader;