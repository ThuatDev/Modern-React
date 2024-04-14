import React, { useEffect, useReducer, useRef, useState } from "react";
import LearnJsx from "./components/LearnJsx";
import TowComponent from "./components/LearnComponent";
import ThreeProps, { Clothes } from "./components/LearnProps";
import LearnState from "./components/LearnState";
import LearnUstate from "./hooks/LearnUstate";
import LearnUseReducer from "./hooks/LearnUseReducer";
import LearnUseMemo from "./hooks/LearnUseMemo";
import LearnUseCallback from "./hooks/exampleUseCallback/LearnUseCallback";
import LearnUseRef from "./hooks/LearnUseRef";
// import useFetch from "./hooks/customHooks/UseFetch";
import LearnUseEffect from "./hooks/LearnUseEffect";
import Note from "./Lifting up state/Note";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-primary font-bold text-2xl mb-5">{title}</h2>;
};
interface Data {
  id: string;
  text: string;
}

const App = () => {
  // call api useFetch
  // const [data] = useFetch({
  //   url: "https://fakestoreapi.com/products?limit=3&sort=desc",
  // });
  // if (!data) {
  //   return <p>Loading...</p>;
  // }
  // console.log(data);
  return (
    <>
      {/* <LearnJsx></LearnJsx> */}
      {/* <LearnComponent></LearnComponent> */}
      {/* <LearnProps
        name="Phan Thuat"
        age={199}
        gender={1}
        children="xin chao Freee"
      ></LearnProps>
      <br />
      <Clothes
        name="Áo sơ mi"
        type="Áo thun"
        color="Đen"
        size="M"
        children="Mô tả sản phẩm"
      />
      <br />
      <Clothes name="Váy" type="váy công chúa" color="Trắng" size="M">
        Clothes 2
      </Clothes> */}

      {/* learn State */}
      {/* <LearnState></LearnState> */}
      {/* <LearnUstate></LearnUstate> */}
      {/* < LearnUseReducer></> */}
      {/* <LearnUseMemo></LearnUseMemo> */}
      {/* <LearnUseCallback></LearnUseCallback> */}
      {/* <LearnUseRef></LearnUseRef> */}
      {/* <LearnUseEffect></LearnUseEffect> */}
      <Note></Note>
    </>
  );
};

export default App;
