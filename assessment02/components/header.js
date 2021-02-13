export default function Home() {

  const star = [ 1,1,1,1,0 ]
  return (
    <div>
      <div className="row" style={{minHeight:'250px'}}>
      <div className="col-xs-12 col-lg-11">
        <div className="sub-header">
          <span className="icon">
            <img src="https://skilllane.s3-ap-southeast-1.amazonaws.com/tu/icon-tuxsa.png" />
          </span>
          <span className="pl-1">
            หลักสูตรปริญญาโทออนไลน์
          </span>
        </div>
        <div className="detail-header">
          <h1>Design Thinking กระบวนการคิดเชิงออกแบบ</h1>
        </div>
        <div className="pb-2">
          <a href="#" className="btn btn-degree">
            ปริญญาโทบริหารธุรกิจ สาขา Business Innovation
          </a>
        </div>
        <div className="d-flex">
          {star.map((e, i) => (
            <div key={i} className="star-border">
              <img
                className="star-svg"
                src="https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg"
                style={!e ? { WebkitClipPath: 'inset(0px 8px 0px 0px)'} : {}}
              />
            </div>
          ))}
          <h3 className="star-review ml-2">4.7 (552 รีวิว)</h3>
          <div className="share-btn ml-2">
            <span className="share-icon mr-1">
              <svg className="svg-inline--fa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M352 320c-25.6 0-48.9 10-66.1 26.4l-98.3-61.5c5.9-18.8 5.9-39.1 0-57.8l98.3-61.5C303.1 182 326.4 192 352 192c53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 9.8 1.5 19.6 4.4 28.9l-98.3 61.5C144.9 170 121.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.6 0 48.9-10 66.1-26.4l98.3 61.5c-2.9 9.4-4.4 19.1-4.4 28.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96zm0-272c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM96 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm256 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path></svg>
            </span>
            <span className="share-text">
              แชร์คอร์สนี้
            </span>
          </div>

        </div>
      </div>
      <style jsx>{`
        .course {
          background-size: cover;
          background-position: right;
          background-image: url(https://skilllane.s3-ap-southeast-1.amazonaws.com/banner_academic/tu_banner.png);
          height: 250px;
        }
        .icon {
          display: inline-flex;
          width: 55px;
          height: 12px;
        }
        .sub-header {
          margin-bottom: 5px;
          color: #d13434;
        }
        .btn-degree {
          font-size: 14px;
          max-width: 100%;
          color: #555;
          border: 1px solid #555;
          background: #fff;
          border-radius: 20px;
          padding: 3px 10px;
          transition: .2s;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-bottom: 5px;
        }
        .btn-degree:hover {
          background: #00532a;
          border-color: #00532a;
          color: #FFFFFF;
        }
        .star-svg {
          width: 22px;
        }
        .star-border {
          background-image: url(https://www.skilllane.com/assets/raty/star-stroke-5aa3077ffda78ce9885e9a11639d53f22c0fe35392066a7fdcb2a53bc404eb8f.svg);
          background-repeat: no-repeat;
          margin-right: 2px;
          line-height: 1;
          height: 22px;
        }
        .star-review {
          font-size: 26px;
          line-height: 0.85;
          color: #8e8e8e;
        }
        .share-btn {
          display: flex;
          border-color: #00532a;
          border-style: solid;
          border-radius: 2px;
          border-width: 1px;
          padding: 1px 8px;
          width: 105px;
          line-height: 1.3rem;
          height: 26px;
          cursor: pointer;
        }
        .share-text, .share-icon {
          color: #00532a;
        }
        .share-text {
          margin-top: 2px;
        }
      `}
      </style>
      </div>
    </div>
  )
}
