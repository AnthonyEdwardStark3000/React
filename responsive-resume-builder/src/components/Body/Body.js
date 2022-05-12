import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.scss";
import Devicesize from "../../Devicesize";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <>
    <div className={styles.row}>
       <h3 className={styles.row__heading}>Resume Builder</h3>
    </div>
    <div className={styles.container} 
    // style={{border: '2px solid cyan'}}
    >
    {/* <div className={styles.container__align}> */}
      {/* </div> */}
      <div className={styles.main}
      //  style={{border:'2px solid red'}}
       >

      <div className={styles.main__details}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
      </div>

        <div className={styles.colorcontainer}>
        <div className={styles.toolbar}>
        <div className={styles.colors}>
        <p>Choose any color</p>
          {colors.map((item) => (
            <>
               {/* <button style={{backgroundColor: item}}>check</button> */}
            <button
              key={item}
              style={{ backgroundColor: item}}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={  () => {
                // debugger
                setActiveColor(item)
                }}
            />
            </>
          ))}
          
        </div>
        </div>
        </div>


        </div> 
        <br />
        <div className={styles.side}>
        <div className={styles.side__label} 
        // style={{border: '4px solid purple'}}
        >
          <div className={styles.side__text}
          //  style={{border: '2px solid green'}}
           >
          <h2>Preview</h2>
          </div>
          <div className={styles.side__button}>
          <ReactToPrint
          trigger={() => {
            return (
              <button>
                <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
          </div>
        </div>
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>

        {/* <div className={styles.Resumecontainer__print}>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div> */}

      </div>
      </>
  );
}

export default Body;
