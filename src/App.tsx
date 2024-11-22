import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Wrapper from "./components/global/Wrapper";
import ThreeDVisualizer from "./components/visualizers/ThreeDVisualizer";
import TwoDVisualizer from "./components/visualizers/TwoDvisualizer";

function App() {
  const [tab, setTab] = useState<string>("2d");

  const handleTabChange = (value: string) => {
    setTab(value);
  };

  return (
    <>
      <div className="w-full p-3 bg-gray-1 flex flex-col">
        <Wrapper>
          <Header />

          <Tabs
            defaultValue="account"
            value={tab}
            onValueChange={handleTabChange}
          >
            <TabsList className="bg-gray-300 w-[200px] flex my-3">
              <TabsTrigger value="2d" className="flex-1">
                2D
              </TabsTrigger>
              <TabsTrigger value="3d" className="flex-1">
                3D
              </TabsTrigger>
            </TabsList>
          </Tabs>
          {tab === "2d" ? <TwoDVisualizer /> : <ThreeDVisualizer />}
        </Wrapper>
      </div>
    </>
  );
}

export default App;
