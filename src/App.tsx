import { Camera } from "components/camera/camera";
import { Logo } from "components/logo/logo";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  DotScreen,
} from "react-postprocessing";

const App: React.FC = () => {
  return (
    <>
      <div
        className="bg"
        style={{ backgroundColor: "white", zIndex: 0, padding: 24 }}
      >
        <div style={{ backgroundColor: "white", zIndex: 1, marginBottom: 24 }}>
          <h2 style={{ color: "#afd7fa" }}>Grab</h2>
          <h2 style={{ color: "#81C2EA" }}>A</h2>
          <h2 style={{ color: "#6782F2" }}>Tent</h2>
          <h2 style={{ color: "#26256B" }}>Everybody</h2>
        </div>
        <div className="ticket-window left" style={{ width: "fit-content" }}>
          <p style={{ color: "#afd7fa" }}>Aug 4th - Aug 6th</p>
          <p style={{ color: "#81C2EA" }}>
            <b>£75</b>
          </p>
          <p style={{ color: "#6782F2", marginBottom: 8 }}>
            <b>120 bodies</b>
          </p>
          <button
            className="buy-button"
            onClick={() =>
              window.open(
                "https://www.paypal.com/paypalme/gatecollective/75",
                "_blank"
              )
            }
            style={{
              padding: 8,
              color: "#26256B",
              border: "2px solid #26256B",
            }}
          >
            Execute Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
