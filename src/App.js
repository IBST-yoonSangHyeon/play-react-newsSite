import HdContainer from './hd';
import './App.css';
import './bootstrap.min.css';
import Hd2Container from './hd2';
import NavBar from './navbar';
import { useState } from 'react';

//{ //width:398px;height:auto;}
function App() {
  let test_iframData = [
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/1949227467_ZipeA64w_8e10b29e46b6ae826a4b0839fc5bf8f1935be706.jpg",
      iframSrc : 'https://www.youtube.com/embed/yghPuQnny24',
      subject : 'Dalshabet'
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/1949227467_pmg0eOaG_c47f9b29d2f737344c5d3a0d1b0fd71ea7889611.jpg",
      iframSrc : 'https://www.youtube.com/embed/uL2ZB7XXIgg',
      subject : 'UX Design Course Tutorial for Beginners: User Experience Design Fundamentals'
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/3535039852_7mdbY1Ze_df0c4807cc7d287d686b009d33fd70f4dc2007c6.jpg",
      iframSrc : 'https://www.youtube.com/embed/b_Yg3QWZHpc',
      subject : '트와이스 스페셜★데뷔부터 Dance the night away까지 무대 모아보기★'
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/1949228014_GPAtJhUk_8778320f852b9bb0fbb608546696a151d4c312b8.jpg",
      iframSrc : 'https://www.youtube.com/embed/6LeWSmcH3jY',
      subject : "[MV] ICHILLIN'(아이칠린) _ GOT'YA"
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/3535039852_Gzfr8hQU_316d99e0b75f81af35f30ffc98b7c1145655996d.jpg",
      iframSrc : 'https://www.youtube.com/embed/fg4T1IlOkr0',
      subject : '[Choreography] Jingle Bell Rock Remix'
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/3535039852_ais2c8lx_8b8b3a55b7e2c5d4c3e7bfb0b57dca1c5e36c578.jpg",
      iframSrc : 'https://www.youtube.com/embed/24u1v9PI0yc',
      subject : '올케다방의 띵곡팔이 - 비주얼 금수저 걸그룹ver. 트와이스, 아이즈원, ITZY, 오마이걸 etc.'
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/3535039852_lhrZ7dB9_fcf5dd42291cdd3293e9aa3c8412f727ccdba4ac.jpg",
      iframSrc : 'https://www.youtube.com/embed/24u1v9PI0yc',
      subject : '올케다방의 띵곡팔이 - 비주얼 금수저 걸그룹ver. 트와이스, 아이즈원, ITZY, 오마이걸 etc.'
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/3690555699_laSuez50_0c707b4e9d86a569c0b5272d267ca0954f2ee551.jpg",
      iframSrc : 'https://www.youtube.com/embed/xF3MC8PWgJE',
      subject : "Girl's Day(걸스데이) 'Female President(여자대통령)' Official MV"
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/3690555784_PedBpFhm_ffb39a71fdbd934f22a24ef05e5f5b4c03bd5863.jpg",
      iframSrc : 'https://www.youtube.com/embed/8ldZlTb00mA',
      subject : '[MV] woo!ah!(우아!) _ Catch the Stars(별 따러 가자)'
    },
    {
      imgSrc : "http://www.lbmastar.co.kr/data/file/news/1949228129_GCJ2EaUn_8c694dc5de98f9e5f956af34ce1468a88a75f5f2.jpeg",
      iframSrc : 'https://www.youtube.com/embed/awkkyBH2zEo',
      subject : "LALISA' M/V"
    }
  ];

  let initMov = {
      imgSrc : "",
      iframSrc : '',
      subject : ""
  }
  let [movie, setMovie] = useState(initMov);

  if(movie['imgSrc'] === ""){
    movie['imgSrc'] = test_iframData[0]['imgSrc'];
    movie['iframSrc'] =test_iframData[0]['iframSrc'];
    movie['subject'] =test_iframData[0]['subject'];
  }

  let movieClick = (e) => {
    console.log('e',e.currentTarget.dataset);
    let changeMovieData = {
                            imgSrc : e.currentTarget.dataset.imgSrc,
                            iframSrc : e.currentTarget.dataset.iframSrc,
                            subject : e.currentTarget.dataset.subject
                          };
    setMovie(changeMovieData);
  }

  return (
    <div className='container body-container'>
        {/* 헤드 시작 */}
        <div className='row justify-content-start '>
          <HdContainer />
          <Hd2Container />
        </div>
        {/* 헤드 끝 */}
        {/* 헤드 메뉴 시작 */}
        <div className='row justify-content-center border-blue' style={ {backgroundColor : 'red'} }>
          <NavBar />
        </div>
        {/* 헤드 메뉴 끝 */}
        {/* 바디 시작 */}
          {/* 영상 wrap 시작*/}
          <div className='row border-red body-contents mt-1' >
            <div className='container border-blue'>
              <div className='row'>
                <div className='col-8'  >
                <iframe width="100%" 
                        height="415" 
                        src={movie['iframSrc']} 
                        title={movie['subject']}
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                </div>
                <div className='col-4 '>
                  <div className='container p-0 pb-1 mt-1 w-auto'>
                    <div className='row '>
                      <div className='col-12 overflow-auto' style={ {height : '410px', width : '100%' }}>
                        { test_iframData.map((iframItem) => {
                          let subject = iframItem['subject'];
                          if(iframItem['subject'].length > 30){
                            subject = iframItem['subject'].substring(0, 30)+'...'
                          }
                          return  (<div className='container p-0 mt-1' data-ifram-src={iframItem['iframSrc']} data-img-src={iframItem['imgSrc']} data-title={iframItem['subject']} onClick={(e) => {movieClick(e);}}>
                                      <div className='row'>
                                        <div className='col-7'>
                                          <img src={ iframItem['imgSrc'] } style={ { maxWidth: '100%', width: '100%' }}/>
                                        </div>
                                        <div className='col-5'>
                                          <p className='fw-bold fs-6'>{ subject }</p> 
                                        </div>
                                      </div>
                                    </div>)
                        })}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 영상 wrap 끝*/}
        {/* 바디 */}
    </div>
  );
}

export default App;
