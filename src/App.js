import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Header,
  Features,
} from "./containers";
import { CTA, Navbar, Brand } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
