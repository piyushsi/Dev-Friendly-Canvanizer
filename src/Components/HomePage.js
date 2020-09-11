import React from "react";
import { Link } from "react-router-dom";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <section className="cover">
        <div className="content">
          <h2 className="heading">
             Developers can<br />
             generate a Lean Canvas{" "}
          </h2>
          <p>for their business  using  Dev Friendly Canvanizer.</p>
          <div className="cta-btn">
            <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
              Get Started
            </Link>
          </div>
          <p className="highlight">© Made in the ⛰️ by Piyush Sinha.</p>
          <div className="card">
            <h2>Dev Friendly Canvanizer</h2>
            <p>
              A web interface that can accept the content for a Lean
              Canvas as YAML.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
