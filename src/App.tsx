import React, { useRef } from "react";
import { Stage, Layer, Rect, Group } from "react-konva";
import { Html } from "react-konva-utils";
import Clock from "./components/Clock";

function App() {
  const text = ''
    const transformerRef = useRef(text as any);
    const stageRef = useRef();
  
    return (
      <div>
   
        <Stage
// @ts-ignore
ref={stageRef}
          width={window.innerWidth}
          height={window.innerHeight}
        >
          <Layer>
            <Group groupName="container">
              
              <Group
                hash="test"
                draggable
                scaleX={1}
                scaleY={1}
                name="clock"
                x={120}
                y={100}
                type="widget"
                onClick={(event) => {
                  transformerRef.current.nodes([event.target.getParent()]);
                  
                }}
              >
                <Html
                  divProps={{
                    style: {
                      pointerEvents: "none",
                      width: "300px",
                      height: "300px"
                    }
                  }}
                >
                  <Clock />
                </Html>
                <Rect width={300} height={300} />
              </Group>
              
            </Group>
          </Layer>
        </Stage>
      </div>
    );
}

export default App;
