import React from "react";

function ListItem(props) {
    // 맞습니다! 여기에는 key를 지정할 필요가 없습니다.
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const ListItems = numbers.map((number) => (
      // 맞습니다! 배열 안에 key를 지정해야 합니다.
    <ListItem key={number.toString()} value={number} />
  ));

  return (
      <ul>
          {ListItems}
      </ul>
  )

  
  
}
export default NumberList;
