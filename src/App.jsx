import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { PostContext } from "./Context/PostContext";
import ViewProject from "./pages/ViewProject";
export default function App() {
  return (
    <>
      <PostContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Audiophile" element={<ViewProject cont={0} />} />
            <Route path="/Sunnyweb" element={<ViewProject cont={1} />} />
            <Route path="/Clipboard" element={<ViewProject cont={2} />} />
            <Route path="/Tip" element={<ViewProject cont={3} />} />
          </Routes>
        </BrowserRouter>
      </PostContext>
    </>
  );
}
