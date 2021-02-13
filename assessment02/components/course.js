export default function Home() {

  return (
    <div className="row">
      <div className="col-lg-12 col-xl-6">
        <img
          className="d-block w-100"
          src="https://skilllane.s3.amazonaws.com/courses/previews/000/001/632/large/640x360_designthinking.jpg?1565260246"
          style={{border:'1px solid #efefef'}}
        />
      </div>
      <div className="col-lg-12 col-xl-3">
        <div className="course-glance-card">
          <div className="row">
            <div className="course-price col-xl-12 col-lg-6 col-md-6 col-xs-12">
              <div>
                <div>
                  <div>
                    <div className="text-center">
                      <span className="price">
                        1,500 บาท
                      </span>
                    </div>
                    <button className="enroll-button audit-button"> 
                      ชำระเงินเรียนไม่เก็บหน่วยกิต 
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-detail col-xl-12 col-lg-6 col-md-6 col-xs-12 glance-card-content">
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-times fa-w-10" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>แบบทดสอบทั้งหมด 4 แบบทดสอบ</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-times fa-w-10" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>ข้อสอบทั้งหมด 1 ข้อสอบ</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-times fa-w-10" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>เก็บหน่วยกิตเรียนปริญญาโท</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-times fa-w-10" aria-hidden="true" focusable="false" data-prefix="far" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>ประกาศนียบัตร</p>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div className="col-lg-12 col-xl-3">
        <div className="course-glance-card" style={{borderColor:'#04542b', borderTopWidth:'5px'}}>
          <div className="row">
            <div className="course-price col-xl-12 col-lg-6 col-md-6 col-xs-12">
              <div>
                <div>
                  <div>
                    <div className="text-center">
                      <span className="price">
                        4,500 บาท
                      </span>
                    </div>
                    <button className="enroll-button glance-purchase-enroll"> 
                      ชำระเงินเรียนเก็บหน่วยกิต 
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-detail col-xl-12 col-lg-6 col-md-6 col-xs-12 glance-card-content">
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>เนื้อหาทั้งหมด 40 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 46 นาที</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>แบบทดสอบทั้งหมด 4 แบบทดสอบ</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>ข้อสอบทั้งหมด 1 ข้อสอบ</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>เก็บหน่วยกิตเรียนปริญญาโท</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="glance-item-icon">
                  <svg className="svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path></svg>
                </div>
                <div className="glance-item-text">
                  <p>ประกาศนียบัตร</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .glance-card-content {
          line-height: 1.2rem;
        }

        .course-glance-card {
          border: 1px solid #aaa;
        }
        .course-glance-card > .row {
          margin: 0;
        }
        @media (min-width: 500px) {
          .course-glance-card {
            margin: 15px 0 0 0;
            padding: 20px 15px 20px 15px;
          }
          .course-glance-card:last-child {
            margin-bottom: 1rem;
          }
        }

        @media (min-width: 768px) {
          .course-glance-card {
            margin: 15px 0 0 0;
            padding: 20px 15px 20px 15px;
          }
          .course-glance-card:last-child {
            margin-bottom: 1rem;
          }

          .course-glance-card > .row > div {
            flex-flow: column;
          }
          .course-price {
            order:2;
          }
          .course-detail {
            order:1;
          }
        }

        @media (min-width: 1200px) {
          .course-glance-card {
            height: 100%;
            margin: 0 -5px 0 -15px;
            padding: 0;
          }

          .course-price {
            order:1;
          }
          .course-detail {
            order:2;
          }
        }

        .price {
          font-size: 2em;
          font-weight: bold;
          color: #676767;
        }

        .fa-check {
          color: #00532a;
        }
        
        .fa-times {
          color: #8e8e8e;
          margin-left: 3px;
        }
        
        .enroll-button {
          font-size: 1.23em;
          height: 50px;
          width: 100%;
          border-radius: 4px;
          border-style: none;
          display: inline-block;
          line-height: 126%;
          cursor: pointer;
          padding: 10px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          padding: 5px 0;
          margin-bottom: 15px;
        }
        
        .audit-button {
          background: #fff;
          color: #00532a;
          border: 1px solid #024825;
        }
        
        .glance-purchase-enroll {
          order: 1px solid #024825;
          background: #00532a
          ;
          color: #fff;
        }
        .glance-purchase-enroll:active {
          background: #036c38;
        }
        .glance-purchase-enroll:hover {
          background: #024825;
        }

        .glance-item-text {
          font-size: 0.9em;
          font-weight: normal;
          padding: 0 0 0 14px;
        }

        .glance-item-text p {
          font-size: 1em;
          font-weight: normal;
          margin-bottom: 0;
        }
      `}
      </style>
    </div>
  )
}
