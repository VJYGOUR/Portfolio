import { useState } from "react";
import { NavLink } from "react-router-dom";

function HomePc() {
  return (
    <div className="uppercase text-[.9rem] tracking-widest hidden sm:flex sm:gap-10">
      <NavLink to="/" className="hover:text-desaturatedCyan">
        home
      </NavLink>
      <NavLink to="/portfolio" className="hover:text-desaturatedCyan">
        portfolio
      </NavLink>
      <NavLink to="/contact" className="hover:text-desaturatedCyan">
        contact me
      </NavLink>
    </div>
  );
}

export default HomePc;
