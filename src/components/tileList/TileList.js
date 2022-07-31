import React from "react";

export const TileList = (props) => {

  const list = [];

  console.log(props.list)
  for ( const index in props.list ) {
    const element = props.list[index]

    for ( const item in element) {
      list.push(<li>{item} : {element[item]}</li>)
    }
  }

  return (
    <ul>
      {list}
    </ul>
  );
};
