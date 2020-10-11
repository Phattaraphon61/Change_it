import React from "react";
import { Container, Button } from "shards-react";

const Errors = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div className="error">
      <div className="error__content">
        <h2>404</h2>
        <h3>ไม่พบ URL ที่ร้องขอบนเซิร์ฟเวอร์นี้ !</h3>
        <p>กรุณาตรวจ URL ที่ร้องขอใหม่อีกครั้ง</p>
        <a href="/" className="text-fiord-blue">
          <Button pill>&larr;กลับไปหน้าหลัก</Button>
        </a>
      </div>
    </div>
  </Container>
);

export default Errors;
