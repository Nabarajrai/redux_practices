import React from "react";
import CakeCompoent from "./components/CakeCompoent";
import IceComponent from "./components/Component";
import UserContainer from "./components/UserContainer";
import { FetchUsers } from "./redux/actionReducer";

const App = () => {
  return (
    <div>
      {/* <CakeCompoent />
      <IceComponent /> */}
      <UserContainer FetchUsers={FetchUsers} />
    </div>
  );
};

export default App;
