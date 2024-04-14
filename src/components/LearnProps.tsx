import React from "react";

interface LearnProps {
  name?: string;
  age?: number;
  gender?: string | number;
  children?: string;
}

export default function LearnProps({ name, age, gender, children }: LearnProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Children: {children}</p>
    </div>
  );
}

interface ClothesProps {
  name?: string;
  type?: string;
  color?: string;
  size?: string;
  children?: React.ReactNode;
}

export class Clothes extends React.Component<ClothesProps> {
  render() {
    const { name, type, color, size, children } = this.props;
    console.log(this.props); //Giá trị của props
    return (
      <div>
        <br />
        <br />
        <hr />
        <h1>{children}</h1>
        <ul>
          <li>
            <b>Tên:</b> {name}
          </li>
          <li>
            <b>Loại:</b> {type}
          </li>
          <li>
            <b>Màu:</b> {color}
          </li>
          <li>
            <b>Kích cỡ:</b> {size}
          </li>
        </ul>
        <hr></hr>
      </div>
    );
  }
}
