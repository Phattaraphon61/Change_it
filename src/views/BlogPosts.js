/* eslint jsx-a11y/anchor-is-valid: 0 */

import React,{useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";
// import LinesEllipsis from 'react-lines-ellipsis'
// import Dialog from "./dialog"
import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: "https://image.dek-d.com/27/0526/1577/120224706",
          category: "หนังสือ",
          categoryTheme: "primary",
          author: "DekShaoKhao ",
          authorAvatar:
            "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/117383726_2258739107605477_5898861422442131179_n.jpg?_nc_cat=106&_nc_sid=174925&_nc_ohc=JdzlAiDS-uIAX8WxtkU&_nc_ht=scontent.fbkk14-1.fna&oh=1c174a46de4c54dae823006b6bc628dd&oe=5F929DE2",
          title: "รวมข้อสอบ GAT PAT1 PAT2 ปี 52",
          body: "นัดแลกได้ในวาริน ในเมืองหรือส่งไปรษณีย์ทักแชทมาเลยจ้า",
          date: "อำเภอวารินชำราบ,อุบลราชธานี,ไทย",
          id: "1"
        },
        {
          backgroundImage:
            "https://cf.shopee.co.th/file/e0327cba4a5e41a8e405b1fd721a4939",
          category: "ความงาม",
          categoryTheme: "info",
          author: "Pamnoi",
          authorAvatar:
            "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/105574599_951219488637712_5207857927949601256_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=mye7XgGazioAX_hgCk9&_nc_ht=scontent.fbkk14-1.fna&oh=9dccd02698d8d7f2c563969eed1d7b38&oe=5F91D33E",
          title: "โทนเนอร์พี่จุน ANUA Heartleaf 77% Soothing Toner 250 ML.",
          body: "พึ่งซื้อมาค่ะ อยากเปลี่ยนเป็นโทนเนอร์ตัวอื่น ขาย 700 บาท ",
          date: "อำเภอเมืองอุบลราชธานี,อุบลราชธานี,ไทย",
          id: "2"
        },
        {
          backgroundImage:
            "https://www.consolethai.com/index.php?attachments/57317/",
          category: "เกม",
          categoryTheme: "royal-blue",
          author: "Yasio Kung",
          authorAvatar:
            "https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/50327204_2112404578815672_2866495090707136512_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=Rf7AyoraUi0AX-9EL9M&_nc_ht=scontent.fbkk10-1.fna&oh=e154eca89a9c6bc148854fafec572491&oe=5F91542A",
          title: "Nintendo switch Neon มือสอง + overcooked",
          body:
            "ไม่ค่อยมีเวลาเล่น เครื่องหิ้วญี่ปุ่น ติดฟิล์มกันรอยแล้วซื้อมาเมื่อต้นเดือน กุมภาพันธ์ 2563 ใช้งานได้ปกติ เครื่องไม่รวน จอยคอนไม่เดินเอง ราคา 8,000 บาท",
          date: "อำเภอน้ำยืน,อุบลราชธานี,ไทย",
          id: "3"
        },
        {
          backgroundImage:
            "https://f.ptcdn.info/774/036/000/nwthfth5yXhNoNsFbD9-o.jpg",
          category: "มีเดีย",
          categoryTheme: "warning",
          author: "Fishstop chan",
          authorAvatar:
            "https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/48382402_1468943199904553_3400320523001921536_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=F4xPX5JuvWYAX9-_h7Q&_nc_ht=scontent.fbkk10-1.fna&oh=fc33cbbf976ab5b04ffb3e5e540b294a&oe=5F9387E8",
          title: "กล้องมือสอง Canon EOS 500D",
          body:
            "มีแบตของแท้,ที่ชาร์จแบตของแท้,กระเป๋ากล้อง ไม่มีเมมโมรี่ นัดแลกภายในจังหวัดได้",
          date: "อำเภอม่วงสามสิบ,อุบลราชธานี,ไทย",
          id: "4"
        },
        {
          backgroundImage: "https://www.bahtsold.com/user_images/2018/07-16/335233/SAM_8857.jpg",
          category: "ของเล่น",
          categoryTheme: "dark",
          author: "น้องป้อน ขยันเรียน",
          authorAvatar:
            "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/116786107_3210878469005817_7282993053071591781_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=iWFYBRd34uYAX--gypd&_nc_ht=scontent.fbkk14-1.fna&oh=e9da3f248e6c9940f0d15189d671260b&oe=5F93BD6D",
          title: "DJL Tello",
          body:
            "บินได้ปกติไม่ค่อยได้ใช้ครับ มีแบต 2 ก้อน ขาบ 2,500 หรือแลกอะไรก็ได้ เสนอมาดูครับ",
          date: "อำเภอม่วงสามสิบ,อุบลราชธานี,ไทย",
          id: "5"
        },
        {
          backgroundImage:
            "https://www.bangkokaudio.com/topic_file/1_4693673278620171210160306.jpg",
          category: "เครื่องใช้ไฟฟ้า",
          categoryTheme: "secondary",
          author: "Masrider F",
          authorAvatar:
            "https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/75037933_1739322909538588_7212596295943323648_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=v11crQWR_KcAX92Jznh&_nc_ht=scontent.fbkk10-1.fna&oh=b01e91e94dcf11a4796d9292f557b97b&oe=5F939C71",
          title: "ลำโพง monitor audio studio2",
          body:
            "สภาพดี ไม่แน่ใจว่าเป็นตัว SE หรือเปล่า มีรอยที่มุมบนเล็กๆ 1 จุด ตอนยกเข้ากล่องไปโดนมุมโต๊ะครับ",
          date: "อำเภอเขมราฐ,อุบลราชธานี,ไทย",
          id: "6"
        },
        {
          backgroundImage:
            "https://cf.shopee.co.th/file/08563af9a81dce7772ef7f1529216b9d",
          category: "แฟชั่นชาย",
          categoryTheme: "info",
          author: "Master TripperA",
          authorAvatar:
            "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/44153215_2169162796666553_8155936573465034752_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=N3tQ-JiNNAsAX-ox5P-&_nc_ht=scontent.fbkk14-1.fna&oh=4e62423e55b38047f39991be955b0775&oe=5F940C51",
          title: "รองเท้า Nike Air Max 98",
          body: "ซื้อได้แค่เดือนเดียว ใส่สองครั้ง แลกกับ nike air รุ่นอื่นครับ",
          date: "อำเภอนาจะลวย,อุบลราชธานี,ไทย",
          id: "7"
        },
        {
          backgroundImage: "https://df.lnwfile.com/1jgi8r.jpg",
          category: "อุปกรณ์อิเล็กทรอนิกส์",
          categoryTheme: "success",
          author: "คุณชาย เย็นชา",
          authorAvatar:
            "https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/29432419_1597505513663656_5321652397448101888_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=qH2I8LapcT8AX_Cozio&_nc_ht=scontent.fbkk10-1.fna&oh=4a9630b7579dfbd0d2f27325710b2fb1&oe=5F93F1C8",
          title: "SK Hynix 16 GB DDR4-2133 มือสอง",
          body:
            "ขายแรมสำหรับโน๊ตบุ๊ค ขนาด 16GB 1 แผง Hynix SK Hynix 16 กิกะไบต์ 1Rx8 PC4- DDR4-2133 ประกันของ SK Hynix เป็นแบบ L/T 3,000 บาท",
          date: "อำเภอตระการพืชผล,อุบลราชธานี,ไทย",
          id: "8"
        },
        {
          backgroundImage:
            "https://byoursignature.files.wordpress.com/2016/04/e0b894e0b8b5e0b984e0b88be0b899e0b98ce0b881e0b8a3e0b8b0e0b980e0b89be0b98be0b8b2e0b8a1e0b8b7e0b8ade0b8aae0b8ade0b8871.jpg",
          category: "แฟชั่นผู้หญิง",
          categoryTheme: "warning",
          author: "องค์หญิงน้อย ของคุณแม่",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "กระเป๋า Gucci แท้จาก shop",
          body:
            "กระเป๋าถือ สภาพ เหมือนใหม่ ใช้งานน้อย มาก มีสายสะพาย พร้อมถุงผ้า 19,500 บาท",
          date: "อำเภอวารินชำราบ,อุบลราชธานี,ไทย",
          id: "9"
        },
        {
          backgroundImage: "https://img.kaidee.com/prd/20181011/342319848/b/09943fea-4cf7-48e5-a48d-f07fd1135db2.jpg",
          category: "บ้านและสวน",
          categoryTheme: "warning",
          author: "สุดยอดแห่งความดี ในตัวคุณ",
          authorAvatar:
            "https://images.workpointnews.com/workpointnews/2020/09/01123946/1598938782_66119_web.jpg",
          title: "หม้อหุงข้าวไฟฟ้า 1.8 ลิตร",
          body: "ขอแลกกับหม้อขนาด 1 ลิตรครับ",
          date: "อำเภอโขงเจียม,อุบลราชธานี,ไทย",
          id: "10"
        },
        {
          backgroundImage:
            "https://img.kaidee.com/prd/20180524/338513519/b/c94b9979-7b7e-4164-8d40-1c6818d83558.jpg",
          category: "กลางแจ้ง",
          categoryTheme: "dark",
          author: "Weeraphon Jongphakdee",
          authorAvatar: "https://avatarfiles.alphacoders.com/174/174790.png",
          title: "เบ็ดตกปลาพร้อมรอกเหมารวม",
          body:
            "คันสปืน 9 ฟุต 2 คัน คันสปิน 5.6 ฟุตพร้อมรอก 1 คัน คันเบทใหม่ 6 ฟุต 1 คัน รอก เบอร์ 5000 1 ตัว รอก เบอร์ 3000 1 ตัว 1,200 บาท มารับเองนะครับ",
          date: "อำเภอพิบูลมังสาหาร,อุบลราชธานี,ไทย",
          id: "11"
        },
        {
          backgroundImage:
            "https://i.pinimg.com/originals/11/e5/50/11e5505b08be9b75ae0fea982f48bf6e.jpg",
          category: "ฟิตเนส",
          categoryTheme: "info",
          author: "นายน่ะ ก็สามารถเป็นนายกได้นะ",
          authorAvatar:
            "https://img.kaidee.com/prd/20180116/334687243/b/421d89f0-df2e-40cb-9e7f-b7dc2daea7ae.jpg",
          title: "ลูกบาสเก็ตบอล",
          body: "มีลอยถลอกนิดหน่อย แลกอะไรก็ได้ที่ราคาพอๆกันประมาณ 300 บาท",
          date: "อำเภอเดชอุดม,อุบลราชธานี,ไทย",
          id: "12"
        }
      ]

      // Second list of posts.
      // PostsListTwo: [
      //   {
      //     backgroundImage: require("../images/content-management/5.jpeg"),
      //     category: "Travel",
      //     categoryTheme: "info",
      //     author: "Anna Ken",
      //     authorAvatar: require("../images/avatars/0.jpg"),
      //     title:
      //       "Attention he extremity unwilling on otherwise cars backwards yet",
      //     body:
      //       "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/6.jpeg"),
      //     category: "Business",
      //     categoryTheme: "dark",
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/1.jpg"),
      //     title:
      //       "Totally words widow one downs few age every seven if miss part by fact",
      //     body:
      //       "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
      //     date: "29 February 2019"
      //   }
      // ],

      // // Third list of posts.
      // PostsListThree: [
      //   {
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/1.jpg"),
      //     title: "Had denoting properly jointure which well books beyond",
      //     body:
      //       "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/2.jpg"),
      //     title: "Husbands ask repeated resolved but laughter debating",
      //     body:
      //       "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     author: "John James",
      //     authorAvatar: require("../images/avatars/3.jpg"),
      //     title:
      //       "Instantly gentleman contained belonging exquisite now direction",
      //     body:
      //       "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
      //     date: "29 February 2019"
      //   }
      // ],

      // // Fourth list of posts.
      // PostsListFour: [
      //   {
      //     backgroundImage: require("../images/content-management/7.jpeg"),
      //     author: "Alene Trenton",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Extremity so attending objection as engrossed",
      //     body:
      //       "Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/8.jpeg"),
      //     author: "Chris Jamie",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Bed sincerity yet therefore forfeited his",
      //     body:
      //       "Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/9.jpeg"),
      //     author: "Monica Jordan",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "Object remark lively all did feebly excuse our",
      //     body:
      //       "Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...",
      //     date: "29 February 2019"
      //   },
      //   {
      //     backgroundImage: require("../images/content-management/10.jpeg"),
      //     author: "Monica Jordan",
      //     authorUrl: "#",
      //     category: "News",
      //     categoryUrl: "#",
      //     title: "His followed carriage proposal entrance",
      //     body:
      //       "For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...",
      //     date: "29 February 2019"
      //   }
      // ]
    };
  }

  render() {
    // const [open, setOpen] = useState(true);
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour

    } = this.state;
    // let numdialog = false;
    // const handleClick = (n) => {
    //   console.log("dssfsfsf", open);
    //   numdialog = true;
    // }

    return (
      <Container fluid className="main-content-container px-4" >
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle
            sm="4"
            title="สิ่งของทั้งหมด"
            // subtitle="Components"
            className="text-xs-left"
          />
        </Row>
        {/* {numdialog ? <Dialog/>:null} */}
        {/* <Dialog /> */}
        {/* First Row of Posts */}
        <Row >

          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" style={{ cursor: "pointer" }} key={idx}  >
            {/* <a href={`things/${post.id}`} style={{textDecoration:"none"}}> */}
              <Card small className="card-post card-post--1"  >
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}

                >

                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}

                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex"    >
                    <a
                      href={`${idx}`}
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}

                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody >

                  <h5 className="card-title col-15 text-truncate">

                    <a href={`things/${post.id}`} className="text-fiord-blue ">
                      {post.title}
                    </a>

                  </h5>
                  {/* <LinesEllipsis
                    text={post.body}
                    maxLine='0'
                  />
                  <LinesEllipsis
                    text={post.date}
                    maxLine='1'
                    className="text-muted"
                  /> */}
                </CardBody>
              </Card>
              {/* </a> */}
            </Col>

          ))}
        </Row>

        {/* Second Row of Posts */}
        {/* <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by Anna Ken
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row> */}

        {/* Third Row of Posts */}
        {/* <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row> */}

        {/* Fourth Row of posts */}
        {/* <Row>
          {PostsListFour.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                />
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text">{post.body}</p>
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">
                    By
                    <a className="text-fiord-blue" href={post.authorUrl}>
                      {post.author}
                    </a>{" "}
                    in
                    <a className="text-fiord-blue" href={post.categoryUrl}>
                      {post.category}
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>
    );
  }
}

export default BlogPosts;
