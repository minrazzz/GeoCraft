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
          {/* <div className="mb-5 flex items-center justify-start">
            <button
              className={`px-7 py-3 flex items-center justify-center border border-border rounded-md shadow-sm ${
                tab === "2d" ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setTab("2d")}
            >
              2D
            </button>
            <button
              className={`px-7 py-3 flex items-center justify-center border border-border rounded-md shadow-sm ${
                tab === "3d" ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setTab("3d")}
            >
              3D
            </button>
          </div> */}
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
