import React from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";
const App = () => {
  const onClickButton = () => alert();

  const contentledyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" message="お元気ですか？" />
      <p style={contentledyStyle}>お元気です</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
export default App;
