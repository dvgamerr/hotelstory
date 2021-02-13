import Head from 'next/head'
import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Header from '../components/header'
import Course from '../components/course'

import { curriculumItems } from '../data'

export default function Home() {
  const [toggle, setToogle] = useState(Boolean)

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
                  <h3>
                    เนื้อหาของคอร์สนี้
                  </h3>
                  <div class="box-playlist">
                    aaa
                  </div>
                </div>
              </Tab>
              <Tab eventKey="payment" title="วิธีการชำระเงิน">
                <div />
              </Tab>
              <Tab eventKey="chat" title="ห้องสนทนา">
                <div />
              </Tab>
              <Tab eventKey="review" title="รีวิว">
                <div />
              </Tab>
            </Tabs>
          </div>
          <div className="col-xl-3 col-lg-12">
            s
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
      `}
      </style>
    </div>
  )
}
