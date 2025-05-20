import React from "react";

const OtherNews = (props) => {
  return (
    <>
      <div className="lg:mb-12 md:my-6 my-4 flex items-center gap-4 shrink">
        <div className="basis-2/3">
          <p className="text-xs mb-1 font-roboto">{props.source}</p>
          <a
            href={props.link}
            target="_blank"
            className="text-sm  text-balance font-bold hover:underline"
          >
            {props.title}
          </a>
        </div>
        <img
          src={props.image}
          className="w-16 h-16 object-cover basis-1/3 md:w-24 md:h-24 "
        />
      </div>
    </>
  );
};

export default OtherNews;
