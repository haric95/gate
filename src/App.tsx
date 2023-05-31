import React, { useCallback, useEffect, useState } from "react";

const COLORS = ["#ffffff", "#a1d182", "#6dba2d", "#11af00"];

const PASSWORD = "grabaticketeverybody";

const App: React.FC = () => {
  const [isSlim, setIsSlim] = useState(false);
  const [hasEnteredPassword, setHasEnteredPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    if (e.target.value === PASSWORD) {
      setHasEnteredPassword(true);
    }
  };

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
        <div className="left">
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
            <p style={{ color: COLORS[3] }}>
              <b>INSTALLATION //</b>
            </p>
            <p style={{ color: COLORS[1], marginBottom: 24 }}>
              <b>HOMEMADE FOOD</b>
            </p>
            <p style={{ color: COLORS[0], marginBottom: 24 }}>
              <b>Secret location ~1h from London</b>
            </p>
            <p
              style={{
                color: COLORS[3],
                marginBottom: 16,
                fontSize: 16,
                borderBottom: "2px solid white",
                paddingBottom: 8,
              }}
            >
              LINEUP TBA
            </p>

            <p
              style={{
                color: COLORS[0],
                fontSize: 12,
                width: "100%",
                marginBottom: 16,
              }}
            >
              Please send the payment as{" "}
              <span style={{ color: COLORS[1], textDecoration: "underline" }}>
                ‘friends and family’
              </span>{" "}
              + include your{" "}
              <span style={{ color: COLORS[1], textDecoration: "underline" }}>
                email address
              </span>{" "}
              with the payment
            </p>
            <p
              style={{
                color: COLORS[0],
                fontSize: 12,
                width: "100%",
                marginBottom: 16,
              }}
            >
              Ticket includes{" "}
              <span style={{ color: COLORS[2] }}>
                camping on August 4th & 5th
              </span>{" "}
              + <span style={{ color: COLORS[2] }}>home cooked meals</span>
            </p>
            {hasEnteredPassword ? (
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
                  color: "black",
                  border: "2px solid #26256B",
                  cursor: "pointer",
                  marginBottom: 16,
                  fontSize: 16,
                }}
              >
                Execute Purchase
              </button>
            ) : (
              <div style={{ color: COLORS[0], marginTop: 24 }}>
                <p style={{ marginBottom: 8, color: COLORS[3] }}>
                  Enter password to continue with purchase.
                </p>
                <div>
                  <p style={{ fontSize: 12 }}>Password</p>
                  <input
                    type="password"
                    className="password-box"
                    value={passwordValue}
                    onChange={handleChange}
                  />
                  <button>Submit</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="right"
          style={{
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
          <div className={`image-container ${isSlim ? "zoom" : ""}`}>
            <img
              src={`/images/sinan.jpeg`}
              style={{
                width: "100%",
                objectFit: "contain",
                height: "100%",
                position: "absolute",
                opacity: isSlim ? 0.9 : 0,
              }}
              className={`img-3 play-animation`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
