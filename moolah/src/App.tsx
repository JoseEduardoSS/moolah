import React from "react";
import AppRouter from "./routes";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <main>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </main>
  );
}

export default App;
