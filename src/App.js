import React, { useEffect, useState } from 'react';
import ReactFlow, { ReactFlowProvider, Controls  } from 'react-flow-renderer';
import { getMicroservices, getResources } from './services/api';
import MicroserviceNode from './components/MicroserviceNode';
import ResourceNode from './components/ResourceNode';
import './App.css';

const nodeTypes = {
  microserviceNode: MicroserviceNode,
  resourceNode: ResourceNode,
};

const App = () => {
  const [nodesG, setNodes] = useState([]);
  const [edgesG, setEdges] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const [microservices, resources] = await Promise.all([getMicroservices(), getResources()]);

      const microserviceElements = microservices.map((ms, index) => ({
        id: ms.microserviceId,
        type: 'microserviceNode',
        data: { language: ms.language },
        position: { x: 150 * index, y: 100 },
      }));

      const resourceElements = resources.map((res, index) => ({
        id: res.name,
        type: 'resourceNode',
        data: { name: res.name, type: res.type,access: res.access  },
        position: { x: 150 * index, y: 300 },
      }));

      const edges = resources.flatMap((res) =>
        res.microservices.map((msId) => ({
          id: `e-${res.name}-${msId}`,
          source: msId,
          target: res.name,
        }))
      );
       setNodes([...microserviceElements, ...resourceElements]);
       setEdges(edges);
     
    };

    fetchData();
  }, []);

  return (
    <ReactFlowProvider>
      <div className="App">
        <ReactFlow nodes={nodesG}
                   edges={edgesG} 
                    nodeTypes={nodeTypes} 
                    fitView>
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default App;