import React from 'react';
import { Handle } from 'react-flow-renderer';
import javaIcon from '../icons/java-icon.png';
import pythonIcon from '../icons/python-icon.png';
import csharpIcon from '../icons/csharp-icon.png';

const icons = {
  Java: javaIcon,
  Python: pythonIcon,
  Csharp: csharpIcon,
};

const MicroserviceNode = ({ data }) => {
  console.log("data"+data);
  return (
    <div className="microservice-node">
      <img src={icons[data.language]} alt={data.language} />
      <div>{data.language}</div>
      <Handle type="source" position="right" />
    </div>
  );
};

export default MicroserviceNode;


