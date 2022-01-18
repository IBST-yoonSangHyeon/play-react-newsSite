import React from 'react';

const Hd2Container = () => {
    return (
            <div className='col-12 hd-wrapper'>
                <div className='container'>
                    <div className='row justify-content-between'>
                    {/* 왼쪽 로고 시작 */}
                    <div className='col-5 logo'>
                        <a href='#'>
                        <img alt="" src="http://lbmastar.co.kr/data/logo/LG00001/1794362915__1cd37216d3d0139aaa0c56e4ac59d77b4a4de558.gif"  title=""/>
                        </a>
                    </div>
                    {/* 왼쪽 로고 끝 */}
                    
                    {/* 오른쪽 검색 및 주요뉴스 인터버 시작 */}
                    <div className='col-6'>
                        <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                            <div class="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-outline-secondary btn-search-background" type="button" id="button-addon2"></button>
                            </div>
                            </div>
                            <div className='col-12 '>
                            <div className='news-list-font'>ddddd</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* 오른쪽 검색 및 주요뉴스 인터버 끝 */}
                    </div>
                </div>
            </div>
    );
};

export default Hd2Container;