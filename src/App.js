import React from "react";
import Clock from "./components/Example1";
import { Form } from "./components/Example1";
import Greeting from "./components/Example2";
import NumberList from "./components/NumberList";
import { numbers } from "./Data/NumberData";
import { posts } from "./Data/ObjectData";
import Blog from "./components/Blog";
import NameForm from "./components/NameForm";
import Calculator from "./components/TemperatureInput";
import CountTest from "./components/CountTest";
import MinutesToHours from "./components/MinutesToHours";
import MileToKilo from "./components/MileToKilo";
import SuperConverter from "./components/SuperConverter";
import BtnApp from "./components/PropsButton";
import Effect from "./components/EffectPractice";






function App() {
  return (
    <div>
     {/* <MinutesToHours /> */}
     {/* <MileToKilo /> */}
     {/* <SuperConverter /> */}
     {/* <BtnApp /> */}
     <Effect />
    </div>
  );
}

export default App;
