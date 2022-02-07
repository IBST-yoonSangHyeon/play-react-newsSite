import HdContainer from './hd';
import './App.css';
import './bootstrap.min.css';
import Hd2Container from './hd2';
import NavBar from './navbar';
import { useState } from 'react';
import Movie from './movie';
import LeftBox from './leftbox';

//{ //width:398px;height:auto;}
function App() {
  
  let [Leftdata1, setLeftData1] = useState({
    boxHeader : false,
    backGroundColor : false,
    data : [
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/1949227467_hFNRkagI_d7f0ba99db8ab1b6d40ae3c47c4a8e59ac783edb.jpg",
        imgCSS : {
          imgWidth : '224px',
          imgHeight : '146px',
        },
        subject : "중소기업 살리기 지원 프로젝트  (주)보아비다 브랜드 전속모델 발탁 일자리창출 지원",
        content : "[LBMA STAR]모델 일자리 창출과 중소기업 우수브랜드 활성화 지원목적 사업의 일환으로 지난 가평군에 공식후원으로 개최된 제9회 럭셔리브랜드 모델어워즈 월드파이널 최종 우승자 러시아 국적의 톱 모델 마리(Anukova Mari)를 2021년도 디자..."
      },
      {
        imgUrl : "http://www.lbmastar.co.kr/data/file/news/1949227467_Eb09iszo_ea4d564e8f127cbff5bd8c33908e81b3b378f523.jpg",
        imgCSS : {
          imgWidth : '224px',
          height : '146px',
        },
        subject : "[여론조사]  이재명 34.7%·윤석열 45.7%…격차 11%p '오차범위 밖'",
        content : "캐스팅보트 쥔 청년층…20대 李 21.6%·尹 48.6%, 30대 李 31.2%·尹 45.4%지역별로 서울·인천·경기 '수도권' 박빙은 주목정당 지지도는 민주당 30.2%, 국민의힘 40.4%로 직전 조사보다 격차가 더 벌어져▲미디어리서치는 OB..."
      },
    ]
  });

  return (
    <div className='container body-container'>
        {/* 헤드 시작 */}
        <div className='row justify-content-start '>
          <HdContainer />
          <Hd2Container />
        </div>
        {/* 헤드 끝 */}
        {/* 헤드 메뉴 시작 */}
        <div className='row justify-content-center' style={ {backgroundColor : 'red'} }>
          <NavBar />
        </div>
        {/* 헤드 메뉴 끝 */}
        {/* 바디 시작 */}
          {/* 영상 wrap 시작*/}
          <div className='row body-contents mt-1 mb-1' >
            <Movie />
          </div>
          {/* 영상 wrap 끝*/}
          {/* 중간 1 시작 */}
          <div className='row body-contents mt-3order-bottom'>
            {/* left box (Leftdata1) 시작 */}
            <div className='col-8 '>
              <LeftBox data={Leftdata1}/>
            </div>
            {/* left box (Leftdata1) 끝 */}


            <div className='col-4 border-blue'>

            </div>
          </div>
          {/* 중간 1 끝 */}
        {/* 바디 */}
    </div>
  );
}

export default App;
