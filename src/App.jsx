import { useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import InfoPage from "./components/InfoPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;

{
  /* {useEffect(() => {
<Routes>
<Route path="/" element={<InfoPage />} />
</Routes>;
}, [])} */
}
