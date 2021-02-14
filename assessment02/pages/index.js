import Head from 'next/head'
import { useState } from 'react';
import { Tabs, Tab, Badge } from 'react-bootstrap';
import Header from '../components/header'
import Course from '../components/course'
import Teacher from '../components/teacher'

import { curriculumItems } from '../data'

export default function Home() {
  const [toggle, setToogle] = useState(Boolean)

  const BadgeFree = (props) => {
    if (props.show) {
      return <Badge variant="success" className="align-self-center">ดูตัวอย่างฟรี</Badge>
    }
    return <div />
  }

  const BadgeIcon = (props) => {
    if (props.type == 2) {
      return <svg className="svg-inline--fa fa-w-18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
    } else if (props.type == 3) {
      return <svg className="svg-inline--fa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path></svg>
    } else {
      return <svg className="svg-inline--fa fa-w-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path></svg>
    }
  }

  return (
    <div className="course">
      <Head>
        <title>คอร์สปริญญาโทออนไลน์ Design Thinking กระบวนการคิดเชิงออกแบบ | SkillLane</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container pt-4">
        <Header></Header>
        <Course></Course>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-12">
            <Tabs defaultActiveKey="detail" className="pt-4" transition={false}>
              <Tab eventKey="detail" title="รายละเอียด">
                <div className="row mt-4">
                  <div className="col-12 collapsible" style={{ maxHeight:toggle?2048:130}}>
                    <p>
                      <b>นวัตกรรม (Innovation) เป็นสิ่งที่ทุกคนกำลังมองหา</b> เพราะไม่ว่าคุณจะเป็นพนักงานบริษัท ผู้บริหาร เจ้าของกิจการ หรือไม่ว่าจะทำสายอาชีพอะไรก็ตาม เราต่างอยากทำให้งานของเราออกมาดีขึ้น อยากทำงานให้น้อยแต่ได้ผลมาก และอยากสร้างผลงานที่สร้างผลกระทบที่ดีในวงกว้าง
                    </p>
                    <p>
                      ด้วยเหตุนี้เอง Design Thinking หรือ กระบวนการคิดเชิงออกแบบ จึงกลายเป็นเรื่องที่รับความนิยมอย่างแพร่หลายทั่วโลก เพราะ Design Thinking คือกระบวนการที่มุ่งเน้นมนุษย์เป็นศูนย์กลาง เพื่อให้ได้มาซึ่งนวัตกรรมใหม่ และเป็นเครื่องมือที่จะช่วยให้คุณแก้ไขปัญหายากๆ อีกด้วย หากคุณเป็นคนที่ต้องคอยคิดสร้างผลิตภัณฑ์ใหม่ๆ ตลอดเวลา หรือต้องพบเจอกับปัญหาที่แก้ไขยากๆ Design Thinking จะช่วยเหลือคุยได้แน่นอน
                    </p>
                    <p>
                      ในคอร์สนี้คุณจะได้เรียนรู้ขั้นตอนทั้งหมดของ Design Thinking อย่างละเอียด รวมถึงตัวอย่างการประยุกต์ใช้ Design Thinking ของบริษัทระดับโลกที่นำวิธีนี้ไปใช้ในการสร้างนวัตกรรมใหม่และแก้ไขปัญหาต่างๆ และสำคัญที่สุด คอร์สนี้จะสอนวิธีการนำ Design Thinking ไปใช้ในชีวิตจริงและชีวิตการงานของทุกคน&nbsp;
                    </p>
                    <p>
                      <i>Design Thinking เป็นสิ่งที่สำคัญในยุคนี้มาก และเป็นเรื่องที่ทุกคนที่อยากประสบความสำเร็จต้องรู้</i>
                    </p>
                    <p>
                      <b>สิ่งที่คุณจะได้เรียนรู้</b><br/>
                      - กระบวนการและขั้นตอนของ Design Thinking ทั้งหมด อย่างละเอียด<br/>
                      - วิธีการนำ Design Thinking ไปประยุกต์ใช้การงาน และการดำรงชีวิตประจำวัน<br/>
                      - ตัวอย่างการใช้ Design Thinking ขององค์กรชั้นนำ<br/>
                      - ความต่างของ Design Thinking เมื่อเทียบกับ Thinking อื่นๆ</p>
                    <p>
                      <b>ผู้เรียนต้องมีความรู้อะไรมาก่อนหรือไม่<br/>
                      </b>- คอร์สนี้เหมาะสำหรับทุกคน ไม่จำเป็นต้องมีความรู้ด้านใดมาก่อนก็เรียนได้
                      </p>
                    <p>
                      <b>ประเภทของคอร์ส</b><br/>
                      (C) คอร์สนี้เป็นคอร์สบังคับ (Core Course)&nbsp; ของหลักสูตรปริญญาโทบริหารธุรกิจ สาขา Business Innovation ของมหาวิทยาลัยธรรมศาสตร์และ SkillLane
                    </p>
                    <p>
                      <b>การคำนวณเกรด</b><br/>
                      คอร์สนี้ประกอบด้วย 1. แบบทดสอบ (Quiz) คิดเป็น 25% ของเกรด และ 2. ข้อสอบไฟนอล (Final Exam) คิดเป็น 75% ของเกรด โดยการตัดเกรดเป็นดังนี้
                      </p>
                    <p>
                      A 90-100<br/>
                      A- 85-89.99<br/>
                      B+ 80-84.99<br/>
                      B 75-79.99<br/>
                      B- 70-74.99<br/>
                      C+ 65-69.99<br/>
                      C 60-64.99<br/>
                      D 50-59.99<br/>
                      F 0-49.99
                    </p>
                    <p>
                      <b>ประวัติวิทยากร<br/>
                      </b><i>เมษ์ ศรีพัฒนาสกุล<br/>
                      </i>ปัจจุบัน เมษ์ ศรีพัฒนาสกุล ดำรงตำแหน่งกรรมการผู้จัดการและผู้ร่วมก่อตั้ง LUKKID บริษัทที่ให้คำปรึกษาเรื่องการคิดเชิงออกแบบ (Design Thinking) ให้กับบริษัทชั้นนำของประเทศไทย เมษ์เป็นผู้เชี่ยวชาญด้าน Design Thinking โดยเฉพาะ เขาเคยเป็นหัวหน้าทีมคิดเชิงออกแบบที่ Hasso Plattner Institute of Design ที่ มหาวิทยาลัย Stanford เขาจบการศึกษาปริญญาโทสาขา MBA จาก Stanford Graduate School of Business และจบการศึกษาปริญญาตรีสาขา Bioengineering จาก University of Pennsylvania
                    </p>
                  </div>
                </div>
                <div className="collape" onClick={() => setToogle(!toggle)}>
                  <h3>{!toggle?'อ่านทั้งหมด':'ซ่อน'}</h3>
                </div>
                <div className="curriculum mt-4">
                  <h3 style={{color:'#00532a'}}>
                    เนื้อหาของคอร์สนี้
                  </h3>
                  <div className="playlist">
                    {curriculumItems.map((e, i) => (
                      <div key={i}>
                        <div className="title">
                          {e.title}
                        </div>
                        {e.course.map((c, l) => (
                          <div className={`chapter d-flex ${!c.free ? 'buy' : ''}`} key={`${i}-${l}`}>
                            <div className="chapter-name align-self-center flex-grow-1">{c.name}</div>  
  
                            <BadgeFree show={+c.free} />
                            <div className="chapter-icon align-self-center px-2">
                              <BadgeIcon type={c.type} />
                            </div>
                            <div className="text-duration align-self-center">{c.time}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
              <Tab tabClassName="d-none d-xl-block" eventKey="payment" title="วิธีการชำระเงิน">
                <div>Empty.</div>
              </Tab>
              <Tab tabClassName="d-none d-xl-block" eventKey="chat" title="ห้องสนทนา">
                <div>Empty.</div>
              </Tab>
              <Tab tabClassName="d-block d-xl-none" eventKey="teacher" title="ผู้สอน">
                <Teacher />
              </Tab>
              <Tab eventKey="review" title="รีวิว">
                <div>Empty.</div>
              </Tab>
            </Tabs>
          </div>
          <div className="col-xl-3 col-lg-12 d-none d-xl-block">
            <div className="mt-4 mb-2">
              <h3>ผู้สอน</h3>
            </div>
            <Teacher />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .nav-tabs > a.nav-item {
          color: #8e8e8e;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          font-size: 1.33em;
          font-weight: normal;
          line-height: 1;
          padding: 10px 15px;
          margin-right: 0;
          border: none;
          border-bottom: 1px solid #CCC;
          border-radius: unset;
        }
        .nav-tabs > a.nav-item:hover {
          background-color: #EEE;
        }
        .nav-tabs > a.nav-item.active {
          border-bottom-color: #00532a;
          color: #00532a;
          padding-bottom: 6px;
          border-bottom-width: 5px;
        }
      `}</style>

      <style jsx>{`

        .title {
          text-align: left;
          padding: 5px;
          margin: 0px 0px 1px 0px;
          color: #fff;
          background-color: #7B7B7B;
        }

        .chapter {
          color: #5C7635;
          line-height: 1rem;
          margin: 8px;
          background-color: #fff;
          cursor: pointer;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .chapter-name {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .chapter.buy {
          color: #676767 !important;
          cursor: default !important;
        }
        .chapter:hover {
          color: #04542b;
        }
        .text-duration {
          min-width: 70px;
          text-align: right;
        }

        .course {
          background-size: cover;
          background-position: right;
          background-image: url(https://skilllane.s3-ap-southeast-1.amazonaws.com/banner_academic/tu_banner.png);
          height: 250px;
        }
        .collapsible {
          overflow: hidden;
          transition: all 0.3s ease 0s;
          line-height: 1.2rem;
        }
        .collape > h3 {
          font-size: 1.33em;
          color: #00532a;
          font-weight: normal;
          margin: 0px;
          padding: 0px;
          cursor: pointer;
        }
        .collape:hover > h3 {
          text-decoration: underline;
        }

        .playlist {
          font-size: 3.1rem;
          margin: 0px 0px 10px 0px;
          background-color: #fff;
          border: 1px solid #e5e5e5;
        }
      `}
      </style>
    </div>
  )
}
