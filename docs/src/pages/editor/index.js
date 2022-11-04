import React , {useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from "clsx";
import styles from './index.module.css'

function Display(props) {
  console.log(props.flags);
  let items= Array.from(props.flags).map(([key, value]) => {
    return <li key={key}>{value.name}</li>
  });

  return (
    <div>
      {items}
    </div>
  );
}



function Flag(props) {
  let currentFlag = {};


  function updateFlag(){
    const returnMap = new Map();
    returnMap.set(props.index, currentFlag);
    props.setFlag(returnMap);
  }


  let handleChange = (event) => {
    console.log(event.target.form)
    const data = new FormData(event.target.form);
    data.forEach(function(value, key){
      currentFlag[key] = value;
    });

    updateFlag();
  };


  return (
    <div className="grid grid-pad">
      <form onChange={handleChange} >
        <div className={"col-4-12"}>
          <div className={"content"}>
            name: <input name={"name"}/>
          </div>
        </div>
        <div className={"col-4-12"}>
          <div className={"content"}>
            version: <input name={"version"}/>
          </div>
        </div>
        <div className={"col-2-12"}>
          <div className={"content"}>
            disable: <input type={"checkbox"} name={"disable"}/>
          </div>
        </div>
        <div className={"col-2-12"}>
          <div className={"content"}>
            trackEvents: <input type={"checkbox"} name={"trackEvents"}/>
          </div>
        </div>
      </form>
    </div>


    //   version: <input name={"version"}/>
    //   trackEvents: <input type={"checkbox"} name={"trackEvents"}/>
    //   disable: <input type={"checkbox"} name={"disable"}/>
    //   <br/><br/><br/><br/><br/><br/><br/>
    // </form>
  );
}



function Flags(props) {
  function setFlags(event) {
    const flagMap = new Map([...props.flags, ...event]);
    props.setFlags(flagMap);
  }

  return (
    <div>
      <Flag setFlag={setFlags} index="1" />
      {/*<Flag setFlag={setFlags} index="2" />*/}
    </div>
  );
}




function Editor(props) {
  // expect to receive props.flags and props.setFlags
  return (
    <div className="grid grid-pad">
      <div className={clsx("col-8-12", styles.flags)}>
        <div className="content">
          <Flags setFlags={props.setFlags} flags={props.flags}/>
        </div>
      </div>
      <div className={clsx("col-4-12", styles.display)}>
        <div className="content">
          <Display flags={props.flags} />
          toto
        </div>
      </div>
      <div className={"col-1-1"}><div className="content">test</div></div>
    </div>
  );
}

export default function EditorPage() {
  const [flags, setFlags] = useState(new Map());
  return (
    <Layout
      title="Editor"
      description="GO Feature Flag editor is the easiest way to configure your feature flags.">
      <Editor flags={flags} setFlags={setFlags} />
    </Layout>
  );
}
