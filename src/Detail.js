import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 10px;
  background-color: black;
`;

let 제목 = styled.h1`
  font-size: 40px;
  padding: 50px;
  background-color: blue;
`;

function Detail(props) {
  let [알러트, 알러트변경] = useState(true);
  let [입력값, 입력값변경] = useState("");

  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find(function (상품) {
    return 상품.id == id;
  });

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      알러트변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머);
    };
  }, []);
  return (
    <div className="container">
      <박스>
        <제목 className="red">Detail</제목>
      </박스>

      <input
        onChange={function (e) {
          입력값변경(e.target.value);
        }}
      />
      {알러트 == true ? (
        <div className="my-alert1">
          <p>재고가 얼마 남지 않았습니다!!</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              `https://codingapple1.github.io/shop/shoes` +
              (찾은상품.id + 1) +
              `.jpg`
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
