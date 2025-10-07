import React from 'react'
import { BsApple } from 'react-icons/bs';
import App1CardShow from './App1CardShow';

const App1fetce = ({ AppData }) => {
  const appdata = AppData;
  console.log(appdata);
  
  return <div>
    <h1>lsdfoeifjosdlsdkflsssss</h1>
{appdata.map((app)=><App1CardShow key={app.id} app={app}></App1CardShow>)}
  </div>;
};

export default App1fetce
