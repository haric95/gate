import React, { useCallback, useEffect, useState } from "react";

const COLORS = ["#ffffff", "#a1d182", "#55ba00", "#11af00"];

const App: React.FC = () => {
  const [isSlim, setIsSlim] = useState(false);

  const keydownHandler = useCallback<EventListener>((e) => {
    if ((e as KeyboardEvent).keyCode === 83) {
      setIsSlim(true);
    }
  }, []);
  const keyupHandler = useCallback<EventListener>((e) => {
    if ((e as KeyboardEvent).keyCode === 83) {
      setIsSlim(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler, false);
    window.addEventListener("keyup", keyupHandler, false);
    return () => {
      window.removeEventListener("keydown", keydownHandler, false);
      window.removeEventListener("keyup", keyupHandler, false);
    };
  }, [keydownHandler, keyupHandler]);

  const [[rand1, rand2], _] = useState(() => {
    return [
      Math.floor(Math.random() * 16) + 1,
      Math.floor(Math.random() * 16) + 1,
    ];
  });

  return (
    <>
      <div
        className="bg"
        style={{
          backgroundColor: "black",
          zIndex: 0,
          padding: 24,
          display: "flex",
        }}
      >
        <div>
          <div style={{ zIndex: 1, marginBottom: 24 }}>
            <h2 style={{ color: COLORS[0] }}>Grab</h2>
            <h2 style={{ color: COLORS[1] }}>A</h2>
            <h2 style={{ color: COLORS[2] }}>Tent</h2>
            <h2 style={{ color: COLORS[3] }}>Everybody</h2>
          </div>
          <div className="ticket-window left" style={{ width: "fit-content" }}>
            <p style={{ color: COLORS[0] }}>Aug 4th - Aug 6th</p>
            <p style={{ color: COLORS[1] }}>
              <b>£75</b>
            </p>
            <p style={{ color: COLORS[2], marginBottom: 8 }}>
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
                cursor: "pointer",
              }}
            >
              Execute Purchase
            </button>
          </div>
        </div>
        <div
          className="right"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            paddingLeft: 24,
          }}
        >
          <img
            src={`/images/${rand2}.jpg`}
            style={{
              width: "100%",
              objectFit: "contain",
              height: "100%",
              position: "absolute",
            }}
          />
          <img
            src={`/images/${rand1}.jpg`}
            style={{
              width: "100%",
              objectFit: "contain",
              height: "100%",
              opacity: 0.5,
              position: "absolute",
            }}
          />
          <img
            src={`/images/sinan.jpeg`}
            style={{
              width: "100%",
              objectFit: "contain",
              height: "100%",
              position: "absolute",
              display: isSlim ? "block" : "none",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
