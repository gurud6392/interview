import React, { FC } from "react";

interface IProps {
  value: string;
}

const LoadImage: FC<IProps> = ({ value }) => {
  const imgSrc = require(`./../../assets/images/${value}`).default;
  return <img src={imgSrc} />;
};

export default LoadImage;
