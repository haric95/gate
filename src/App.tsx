import React, { useCallback, useEffect, useState } from "react";

const COLORS = ["#ffffff", "#a1d182", "#6dba2d", "#11af00"];

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
      Math.floor(Math.random() * 24) + 1,
      Math.floor(Math.random() * 24) + 1,
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
        }}
      >
        <div>
          <div style={{ zIndex: 1, marginBottom: 24 }}>
            <h2 style={{ color: COLORS[0] }}>Grab</h2>
            <h2 style={{ color: COLORS[1] }}>A</h2>
            <h2 style={{ color: COLORS[2] }}>Tent</h2>
            <h2 style={{ color: COLORS[3] }}>Everybody</h2>
          </div>
          <div className="ticket-window left">
            <p style={{ color: COLORS[0] }}>Aug 4th - Aug 6th</p>
            <p style={{ color: COLORS[1] }}>
              <b>£75</b>
            </p>
            <p style={{ color: COLORS[2], marginBottom: 24 }}>
              <b>120 bodies</b>
            </p>
            <p style={{ color: COLORS[0] }}>
              <b>LIVE //</b>
            </p>
            <p style={{ color: COLORS[1] }}>
              <b>DJ //</b>
            </p>
            <p style={{ color: COLORS[2] }}>
              <b>PEFORMANCE //</b>
            </p>
            <p style={{ color: COLORS[3], marginBottom: 24 }}>
              <b>INSTALLATIONS</b>
            </p>
            <p style={{ color: COLORS[2], marginBottom: 8, fontSize: 16 }}>
              LINEUP TBA
            </p>
            <button
              className="buy-button"
              onMouseEnter={() => {
                setIsSlim(true);
              }}
              onMouseLeave={() => {
                setIsSlim(false);
              }}
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
                marginBottom: 16,
                fontSize: 16,
              }}
            >
              Execute Purchase
            </button>
            <p
              style={{
                color: COLORS[0],
                fontSize: 12,
                width: "100%",
                marginBottom: 16,
              }}
            >
              Please send the payment as ‘friends and family’ + include your
              email address with the payment
            </p>
            <p
              style={{
                color: COLORS[0],
                fontSize: 12,
                width: "100%",
                marginBottom: 16,
              }}
            >
              Ticket includes camping on August 4th & 5th + home cooked meals
            </p>
          </div>
        </div>
        <div
          className="right"
          style={{
            width: "100%",
            position: "relative",
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
            className="img-1"
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
            className="img-2"
          />
          <img
            src={`/images/sinan.jpeg`}
            style={{
              width: "100%",
              objectFit: "contain",
              height: "100%",
              position: "absolute",
              display: isSlim ? "block" : "none",
              opacity: 0.8,
            }}
            className="img-3"
          />
        </div>
      </div>
    </>
  );
};

export default App;
