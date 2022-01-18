
import react from "react";


const HdContainer = () => {

    return (
        <div className='col-12 top-menu '>
            <div className='container border-black'>
              <div className="row justify-content-between">
                <div className="col-4">
                      <ul className='tnb1'>
                        <li><a href='#'>시작페이지로 등록</a></li>
                        <li><a href='#'>즐겨찾기 추가</a></li>
                      </ul>
                  </div>
                  <div className="col-4">
                    <ul className='tnb2'>
                      <li><a href='#'>RSS</a></li>
                      <li><a href='#'>회원가입</a></li>
                      <li><a href='#'>로그인</a></li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
    );
}

export default HdContainer;
