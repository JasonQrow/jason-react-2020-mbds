import React from "react";
import AlbumDetail from "./AlbumDetail";

const Albums = ({data}) => {
  let Albums_Liste = (
    <AlbumDetail data={data}/>
  );
  return (
    <React.Fragment>
      {Albums_Liste}
    </React.Fragment>
  );
};

export default Albums;
