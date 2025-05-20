import React from "react";

const Join = () => {
  return (
    <div>
      <p className="font-bold text-xs font-roboto">
        Making sense of it all:{" "}
        <span className="text-xs font-normal">
          Trump administration / Climate / Animal Welfare / Health{" "}
        </span>
      </p>
      <div className="py-4 px-6 mt-12  border-dashed border-black border-1 ">
        <p className="text-xl mb-2 font-extrabold before:content-['*'] before:text-[#e43f5d]">
          What Really Matters
        </p>
        <div className=" text-sm">
          <p>
            In a world with too much noise and too little context, Revo helps
            you make sense of the news. We don’t flood you with panic-inducing
            headlines or race to be first.{" "}
            <span className="font-bold">We focus on being useful to you —</span>
            breaking down the news in ways that inform, not overwhelm.
          </p>
          <div className="mt-6">
            <p className="basis-2/3">
              We rely on readers like you to fund our journalism.{" "}
              <span className="font-bold">
                {" "}
                Will you support our work and become a Revo Member today?
              </span>
            </p>
            <div className="basis-1/3">
              <button className="background py-1 px-2 text-white text-base rounded-xs mt-3">
                Join Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
