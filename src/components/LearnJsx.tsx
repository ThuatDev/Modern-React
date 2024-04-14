import React, { Children } from "react";

export default function LearnJsx() {
  // 1 :Gán một biểu thức trong JSX
  /*  const name = "Freetuts.net";
    const element = <h1>welcome to {name}</h1>;
    */
  //   1.1
  /*  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  const user = {
    firstName: "Nguyễn",
    lastName: "duy",
  };

  const element = <h1>Xin chào, {formatName(user)}!</h1>;*/

  //   2 JSX là một biểu thức
  /*  //   const sayHi = (name: string): string => {
  //     return "Hello, " + name;
  //   };*/

  //   3 Chỉ định attributes với JSX
  //   const user = {
  //     avatarUrl:
  //       "https://i.pinimg.com/564x/66/ff/15/66ff151562dfb108dbdee39d1ad72b1d.jpg",
  //   };
  //   const tabIndexValue = 0; // Hoặc bất kỳ giá trị số nào khác mà bạn muốn gán cho tabIndex

  //   const element = <div tabIndex={tabIndexValue}></div>;
  //   const element1 = <img src={user.avatarUrl} alt="avatar" />;
  //   const element2 = <div tabIndex={1}></div>; // Đảm bảo giá trị tabIndex là một số, không phải một chuỗi

  //  4 Phần tử con trong JSX
  //   const user = {
  //     avatarUrl:
  //       "https://i.pinimg.com/564x/66/ff/15/66ff151562dfb108dbdee39d1ad72b1d.jpg",
  //   };
  //   const element = <img src={user.avatarUrl} />;
  //   const element = (
  //     <div>
  //       <h1>Hello</h1>
  //       <p>Welcome to Freetuts</p>
  //     </div>
  //   );

  // 5 JSX Object
  //   const element = React.createElement(
  //     "p",
  //     { className: "wellcom" },
  //     "Wellcome to Freetuts"
  //   );
  //   const element = {
  //     type: "p",
  //     props: { className: "welcome", children: "Welcome to Freetuts.net" }, // 'children' thay vì 'Children'
  //   };
  //   return <div>{React.createElement(element.type, element.props)}</div>;
  // }

  //   6 Ngăn chặn Injection Attacks
  const content = "<script>XSS</script>";
  const element = <p className="welcome">{content}</p>;

  return element;
}
