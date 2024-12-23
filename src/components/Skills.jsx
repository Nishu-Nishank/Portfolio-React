import React from "react";
import bootstrapSvg from "../assets/skills/bootstrap.svg";
import cssSvg from "../assets/skills/css.svg";
import htmlSvg from "../assets/skills/html.svg";
import javascriptSvg from "../assets/skills/javascript.svg";
import knockoutJsSvg from "../assets/skills/knockoutJs.png";
import materialUi from "../assets/skills/materialUi.svg";
import next from "../assets/skills/next.svg";
import nuxtSvg from "../assets/skills/nuxt.svg";
import primeVueSvg from "../assets/skills/primeVue.png";
import reactSvg from "../assets/skills/react.svg";
import reduxSvg from "../assets/skills/redux.svg";
import tailwindSvg from "../assets/skills/tailwind.svg";
import typeScript from "../assets/skills/typeScript.svg";
import vueSvg from "../assets/skills/vue.svg";

const Skills = () => {
  const skillLists = [
    { name: "Html5", url: htmlSvg },
    { name: "CSS3", url: cssSvg },
    { name: "Tailwind CSS", url: tailwindSvg },
    { name: "JavaScript", url: javascriptSvg },
    { name: "TypeScript", url: typeScript },
    { name: "React", url: reactSvg },
    { name: "Next Js", url: next },
    { name: "Redux", url: reduxSvg },
    { name: "VueJs", url: vueSvg },
    { name: "NuxtJs", url: nuxtSvg },
    { name: "Prime Vue", url: primeVueSvg },
    { name: "Material Ui", url: materialUi },
    { name: "Bootstrap", url: bootstrapSvg },
    { name: "Knockout Js", url: knockoutJsSvg },
  ];

  return (
    <div id="skills" className="bg-[#f2f2f2] md:py-16 py-8">
      <p className="text-3xl text-center pb-5 font-bold">Skills & Interests</p>
      <div className="max-w-[1100px] grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 justify-evenly m-auto">
        {skillLists.map((item, index) => (
          <div
            key={index}
            className="h-[140px] md:w-[140px] bg-white p-5 shadow-xl m-5 flex justify-center items-center rounded-xl border cursor-pointer hover:scale-110 duration-300"
          >
            <div>
              <img
                className="w-[80px] h-[80px] flex justify-center"
                src={item.url}
                alt={item.name}
              />
              <p className="font-light text-center">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
