import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text, Center } from "@chakra-ui/layout";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import "./Roadmap.css";
import { SpacerLarge } from "../../styles/globalStyles";

const Roadmap = (props) => {
  const { items } = props;

  const animateFromTo = (elem, direction) => {
    const offset = 1000;
    let x = 0;
    let y = direction * offset;
    let x_margin = 0;

    direction = direction | 1;

    if (elem.classList.contains("slide_from_left")) {
      x = -offset;
      y = 0;
      x_margin = -15;
    } else if (elem.classList.contains("slide_from_right")) {
      x = offset;
      y = 0;
      x_margin = 15;
    }

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: x_margin,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(CSSRulePlugin);

    // const rule = CSSRulePlugin.getRule(".timeline ul li:nth-child(odd):before");

    gsap.utils.toArray(".animate").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFromTo(elem);
        },
        onEnterBack: function () {
          animateFromTo(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        },
      });
    });
  }, []);

  return (
    <div id="Roadmap">
      <Center>
        <Text
          as={"span"}
          position={"relative"}
          fontSize="7xl"
          color={"var(--white)"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "var(--red)",
            zIndex: -1,
          }}
        >
          Roadmap
        </Text>
      </Center>
      <div className="timeline">
        <ul>
          {items.map((te, idx) => {
            return (
              <li key={`${te.title}_${te.date}`}>
                <div className="content">
                  <h3
                    className={`animate ${
                      idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
                    }`}
                  >
                    {te.title}
                  </h3>
                  <p
                    className={`animate ${
                      idx % 2 === 0 ? "slide_from_left" : "slide_from_right"
                    }`}
                  >
                    {te.description}
                  </p>
                </div>
                <div
                  className={`time animate ${
                    idx % 2 === 0 ? "slide_from_right" : "slide_from_left"
                  }`}
                >
                  <h4>{te.date}</h4>
                </div>
              </li>
            );
          })}
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
      <SpacerLarge />
    </div>
  );
};

export default Roadmap;
