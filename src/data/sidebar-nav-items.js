export default function() {
  return [
    // {
    //   title: "Blog Dashboard",
    //   to: "/blog-overview",
    //   htmlBefore: '<i class="material-icons">edit</i>',
    //   htmlAfter: ""
    // },
    {
      title: "สิ่งของทั้งหมด",
      htmlBefore: '<i class="material-icons">shopping_basket</i>',
      to: "/things",
    },
    {
      title: "เพิ่มสิ่งของ",
      htmlBefore: '<i class="material-icons">add_circle_outline</i>',
      to: "/addproduct",
    },
    // {
    //   title: "Add New Post",
    //   htmlBefore: '<i class="material-icons">note_add</i>',
    //   to: "/add-new-post",
    // },
    // {
    //   title: "ตัวอย่าง",
    //   htmlBefore: '<i class="material-icons">view_module</i>',
    //   to: "/ex",
    // },
    // {
    //   title: "ตัวอย่างตาราง",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    {
      title: "แก้ไขประวัติส่วนตัว",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/editprofile",
    },
    {
      title: "แชท",
      htmlBefore: '<i class="material-icons">chat</i>',
      to: "/chat",
    },
    {
      title: "ออกจากระบบ",
      htmlBefore: '<i class="material-icons">login</i>',
      to: "singin",
    },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
  ];
}
