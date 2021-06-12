import React from "react";
import AppButton from "../AppButton";

import "./index.less";

const FeaturedBlog = ({
  caption,
  title,
  description,
  extraText = "Learn More",
}: any) => {
  return (
    <div id="featured-blog">
      <div className="caption">{caption}</div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <AppButton type="default" label={extraText} />
    </div>
  );
};

export default FeaturedBlog;
