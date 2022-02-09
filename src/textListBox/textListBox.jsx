import React, { memo } from 'react';

const TextListBox = memo(({data}) => {
    console.log(data);
    return (
        <>
            <div className='row'>
            {data.data.map((item, idx) => {
                return (<div className='col-12 fw-bold'>
                    {item.subject}
                </div>)
            })}
            </div>
        </>
    );
});

export default TextListBox;