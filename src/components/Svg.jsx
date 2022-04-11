import React from "react";
import { ReactSVG } from "react-svg";

const style = {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Svg({ source, height, width }) {
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <ReactSVG
        afterInjection={(error, svg) => {
          if (error) {
            console.error(error);
            return;
          }
          console.log(svg);
        }}
        beforeInjection={(svg) => {
          svg.classList.add("svg-class-name");
          svg.setAttribute("style", `width: ${width}px`, `height: ${height}px`);
        }}
        className="wrapper-class-name"
        evalScripts="always"
        fallback={() => <span>Error!</span>}
        httpRequestWithCredentials={true}
        loading={() => <span>Loading</span>}
        onClick={() => {
          console.log("wrapper onClick");
        }}
        renumerateIRIElements={false}
        src={source}
        useRequestCache={false}
        wrapper="span"
      />
    </div>
  );
}
