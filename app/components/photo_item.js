import React from 'react';

const PhotoItem = ({name}) =>{
  const imgUrl = `../image/${name}`;
  const divStyle={
    margin:'5px'
  };

  return(
      <img src={imgUrl} width='200px' height='150px' style={divStyle}/>
  );
};

export default PhotoItem;
