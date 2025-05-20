const TopHeadline = (props) => {
  return (
    <div className="mt-8">
      <img src={props.image} />
      <p className=" text-sm font-roboto my-2">
        <span className="italic">Source</span>: {props.source}
      </p>
      <a
        href={props.link}
        target="_blank"
        className="text-lg text-balance font-extrabold mt-2 hover:underline md:text-2xl"
      >
        {props.headline}
      </a>
      <p className="my-2 text-xs italic">By {props.author}</p>
    </div>
  );
};

export default TopHeadline;
