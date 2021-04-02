import { useEffect, useRef } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/global.styles";

const ANIMATE_DELAY = 300;

const App = () => {
  const hoverRef1 = useRef(null);
  const hoverRef2 = useRef(null);
  const hoverRef3 = useRef(null);
  const hoverRef4 = useRef(null);
  const hoverRef5 = useRef(null);
  const hoverRef6 = useRef(null);
  const hoverRef7 = useRef(null);
  const hoverRef8 = useRef(null);

  useEffect(() => {
    hoverRef1.current.addEventListener("mouseenter", (event) => {
      event.target.classList.add("gravitate");
      event.target.setAttribute("fill", "orange");
    });
    hoverRef1.current.addEventListener("mouseleave", (event) => {
      setTimeout(() => {
        event.target.classList.remove("gravitate");
        event.target.setAttribute("fill", "#114EA8")
      }, ANIMATE_DELAY);
    });
    hoverRef2.current.addEventListener("mouseenter", (event) => {
      event.target.classList.add("gravitate");
      event.target.setAttribute("fill", "orange");
    });
    hoverRef2.current.addEventListener("mouseleave", (event) => {
      setTimeout(() => {
        event.target.classList.remove("gravitate");
        event.target.setAttribute("fill", "#114EA8")
      }, ANIMATE_DELAY);
    });
    hoverRef3.current.addEventListener("mouseenter", (event) => {
      event.target.classList.add("gravitate");
      event.target.setAttribute("fill", "orange");
    });
    hoverRef3.current.addEventListener("mouseleave", (event) => {
      setTimeout(() => {
        event.target.classList.remove("gravitate");
        event.target.setAttribute("fill", "#114EA8")
      }, ANIMATE_DELAY);
    });
    hoverRef4.current.addEventListener("mouseenter", (event) => {
      event.target.classList.add("gravitate");
      event.target.setAttribute("fill", "orange");
    });
    hoverRef4.current.addEventListener("mouseleave", (event) => {
      setTimeout(() => {
        event.target.classList.remove("gravitate");
        event.target.setAttribute("fill", "#114EA8")
      }, ANIMATE_DELAY);
    });
    hoverRef5.current.addEventListener("mouseenter", (event) => {
      event.target.classList.add("gravitate");
      event.target.setAttribute("fill", "orange");
    });
    hoverRef5.current.addEventListener("mouseleave", (event) => {
      setTimeout(() => {
        event.target.classList.remove("gravitate");
        event.target.setAttribute("fill", "#114EA8")
      }, ANIMATE_DELAY);
    });
    hoverRef6.current.addEventListener("mouseenter", (event) => {
      event.target.classList.add("gravitate");
      event.target.setAttribute("fill", "orange");
    });
    hoverRef6.current.addEventListener("mouseleave", (event) => {
      setTimeout(() => {
        event.target.classList.remove("gravitate");
        event.target.setAttribute("fill", "#114EA8")
      }, ANIMATE_DELAY);
    });
    hoverRef7.current.addEventListener("mouseenter", (event) => {
      event.target.classList.add("gravitate");
      event.target.setAttribute("fill", "orange");
    });
    hoverRef7.current.addEventListener("mouseleave", (event) => {
      setTimeout(() => {
        event.target.classList.remove("gravitate");
        event.target.setAttribute("fill", "#114EA8")
      }, ANIMATE_DELAY);
    });
    hoverRef8.current.addEventListener("mouseenter", (event) => {
      event.target.classList.add("gravitate");
      event.target.setAttribute("fill", "orange");
    });
    hoverRef8.current.addEventListener("mouseleave", (event) => {
      setTimeout(() => {
        event.target.classList.remove("gravitate");
        event.target.setAttribute("fill", "#114EA8")
      }, ANIMATE_DELAY);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="App"
      >
        <div>
          <svg
            width="391"
            height="288"
            viewBox="0 0 391 262"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                ref={hoverRef1}
                className="animated"
                d="M258.5 89L318 53.2105L265.5 21L206 56.7895L258.5 89Z"
                fill="#114EA8"
                fillOpacity="0.75"
              />
            </g>
            <g filter="url(#filter1_d)">
              <path
                ref={hoverRef2}
                className="animated"
                d="M314.5 124L374 88.2105L321.5 56L262 91.7895L314.5 124Z"
                fill="#114EA8"
                fillOpacity="0.75"
              />
            </g>
            <g filter="url(#filter2_d)">
              <path
                ref={hoverRef3}
                className="animated"
                d="M195.5 127L255 91.2105L202.5 59L143 94.7895L195.5 127Z"
                fill="#114EA8"
                fillOpacity="0.75"
              />
            </g>
            <g filter="url(#filter3_d)">
              <path
                ref={hoverRef4}
                className="animated"
                d="M251.5 162L311 126.211L258.5 94L199 129.789L251.5 162Z"
                fill="#114EA8"
                fillOpacity="0.75"
              />
            </g>
            <g filter="url(#filter4_d)">
              <path
                ref={hoverRef5}
                className="animated"
                d="M132.5 165L192 129.211L139.5 97L80 132.789L132.5 165Z"
                fill="#114EA8"
                fillOpacity="0.75"
              />
            </g>
            <g filter="url(#filter5_d)">
              <path
                ref={hoverRef6}
                className="animated"
                d="M188.5 200L248 164.211L195.5 132L136 167.789L188.5 200Z"
                fill="#114EA8"
                fillOpacity="0.75"
              />
            </g>
            <g filter="url(#filter6_d)">
              <path
                ref={hoverRef7}
                className="animated"
                d="M69.5 203L129 167.211L76.5 135L17 170.789L69.5 203Z"
                fill="#114EA8"
                fillOpacity="0.75"
              />
            </g>
            <g filter="url(#filter7_d)">
              <path
                ref={hoverRef8}
                className="animated"
                d="M125.5 238L185 202.211L132.5 170L73 205.789L125.5 238Z"
                fill="#114EA8"
                fillOpacity="0.75"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="-190"
                y="-13"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0685764 0 0 0 0 0.304479 0 0 0 0 0.658333 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d"
                x="-246"
                y="-48"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0685764 0 0 0 0 0.304479 0 0 0 0 0.658333 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d"
                x="-127"
                y="-51"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0685764 0 0 0 0 0.304479 0 0 0 0 0.658333 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_d"
                x="-183"
                y="-86"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0685764 0 0 0 0 0.304479 0 0 0 0 0.658333 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_d"
                x="-64"
                y="-89"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0685764 0 0 0 0 0.304479 0 0 0 0 0.658333 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_d"
                x="-120"
                y="-124"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0685764 0 0 0 0 0.304479 0 0 0 0 0.658333 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter6_d"
                x="-1"
                y="-127"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0685764 0 0 0 0 0.304479 0 0 0 0 0.658333 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <filter
                id="filter7_d"
                x="-57"
                y="-162"
                width="200%"
                height="200%"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0685764 0 0 0 0 0.304479 0 0 0 0 0.658333 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default App;
