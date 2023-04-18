import React from 'react';
import Movies from "./client/components/pages/movies/view";
import {RecoilRoot} from "recoil";

function App() {
  return (
      <RecoilRoot>
      <Movies/>
      </RecoilRoot>
  );
}

export default App;
