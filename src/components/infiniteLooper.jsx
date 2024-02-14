import "./infiniteLooper.css";

export default function InfiniteLooper(props) {
  const images = props.memberArray;
  return (
    <div className="h-20 overflow-hidden flex gap-5">
      <div
        className="h-20 flex gap-5 animate"
        style={{ animationPlayState: props.onHover ? "paused" : "running" }}
      >
        {images.map((img, i) => {
          return (
            <div
              onMouseOver={() => {
                props.getMemberName(img);
              }}
              onMouseOut={() => {
                props.getMemberName(null);
              }}
              key={i}
              className={`image flex justify-center w-[5rem]
              ${props.memberName ? props.memberName.name === img.name
                  ? " brightness-100 transition ease-out delay-150"
                  : "brightness-50 grayscale transition ease-out delay-150" : "brightness-50 grayscale"
                }`}
            >
              {img.image}
            </div>
          );
        })}
      </div>


      <div
        className="h-20 flex gap-5 animate"
        style={{ animationPlayState: props.onHover ? "paused" : "running" }}
      >
        {images.map((img, i) => {
          return (
            <div
              onMouseOver={() => {
                props.getMemberName(img);
              }}
              onMouseOut={() => {
                props.getMemberName(null);
              }}
              key={i}
              className={`image flex justify-center w-[5rem]
                                ${props.memberName ? props.memberName.name === img.name
                  ? "brightness-100 transition ease-out delay-150"
                  : "brightness-50 grayscale transition ease-out delay-150" : "brightness-50 grayscale"
                }`}
            >
              {img.image}
            </div>
          );
        })}
      </div>
    </div>
  );
}
