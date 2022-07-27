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
      <div className="bg" style={{ background: "url(/bg.jpeg)" }} />
      <Canvas orthographic>
        <Suspense fallback={null}>
          <Camera />
          {/* <color attach="background" args={[0.08, 0.08, 0.08]} /> */}
          <Logo />
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={200}
            opacity={2}
          />
          <Noise opacity={0.05} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <DotScreen opacity={0.5} />
        </EffectComposer>
      </Canvas>
      <div className="content">
        <div className="scroll">
          <button
            onClick={() => {
              const containerElem = document.querySelector(".content");
              const elem = document.querySelector(".tickets");
              const rect = elem?.getBoundingClientRect();
              if (rect && containerElem) {
                debugger;
                containerElem.scrollTo({ top: rect.top, behavior: "smooth" });
              } else {
                debugger;
              }
            }}
          >
            Enter
          </button>
        </div>
        <h1 className="title tickets">Tickets</h1>
        <div className="buy">
          <div className="ticket-window left">
            <h2>Weekend</h2>
            <p>Friday 5pm - Sunday 5pm</p>
            <h1>
              <b>£65</b>
            </h1>
            <button
              className="buy-button"
              onClick={() =>
                window.open(
                  "https://www.paypal.com/paypalme/gatecollective/65",
                  "_blank"
                )
              }
            >
              Execute Purchase
            </button>
          </div>
          <div className="ticket-window">
            <h2>One day</h2>
            <p>Saturday 11am - Sunday 5pm</p>
            <h1>
              <b>£40</b>
            </h1>
            <button
              className="buy-button"
              onClick={() =>
                window.open(
                  "https://www.paypal.com/paypalme/gatecollective/40",
                  "_blank"
                )
              }
            >
              Execute Purchase
            </button>
          </div>
        </div>
        <h1 className="title">Lineup</h1>
        <div className="lineup">
          <div className="live">
            <h1>Live</h1>
            <h3>Alphe Stael</h3>
            <h3>Arama</h3>
            <h3>Bart</h3>
            <h3>Bubble People</h3>
            <h3>Cajm</h3>
            <h3>Chosen Family Business (Performance Art)</h3>
            <h3>Craft Ebbing</h3>
            <h3>Ella Ex Machina</h3>
            <h3>Kristina May</h3>
            <h3>Neo Fung & Laboranta</h3>
            <h3>Overbeck</h3>
            <h3>ROOO</h3>
            <h3>Yewen Jin</h3>
          </div>
          <div className="dj">
            <h1>DJ</h1>
            <h3>Cajm</h3>
            <h3>Bubble People</h3>
            <h3>Internal Object</h3>
            <h3>Flesh Suit Driver</h3>
            <h3>Oddman</h3>
            <h3>DJ Pitch</h3>
            <h3>proto\\spacer</h3>
            <h3>Ross Kemp On Nangs b2b Tony Rumble b2b who’s Tony Rumble?</h3>
            <h3>Seshtan</h3>
            <h3>SKIDOOJACKET</h3>
            <h3>sinny</h3>
            <h3>Sin Of The Father b2b Kristina May</h3>
            <h3>Wi-Fi Crime Scene</h3>
            <h3>Z</h3>
          </div>
        </div>
        <h1 className="title">Info</h1>
        <div className="info">
          <div className="more-info">
            <div className="sec left">
              <h1>Location</h1>
              <p>
                Secret location close to Guildford. ~ 1h train from Waterloo.
              </p>
            </div>
            <div className="sec right">
              <h1>Menu</h1>
              <div className="menu">
                <img src="/menu.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
