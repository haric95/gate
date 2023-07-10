import { Expandable } from "components/expandable";
import React, { useState } from "react";

const COLORS = ["#ffffff", "#a1d182", "#6dba2d", "#11af00"];

const PASSWORD = "gatetobreakittoyou";

const ARTISTS_LIVE = [
  "Bubble People",
  "Craft Ebbing ",
  "Ella Ex Machina",
  "ex.sses",
  "Fiesta Soundsystem",
  "Isn'tses",
  "Kim Cosmik",
  "Koruth",
  "Marysia Osu + YUIS",
  "Nosewise",
  "Scary Hari",
  "Sokora Mortal",
  "Torn Relics",
];

const ARTISTS_DJ = [
  "Ab Ru",
  "DJ Sean Davies",
  "Dome Zero",
  "Internal Object",
  "Lewi Boome",
  "LNR",
  "Oddman",
  "Frankie Bubblegum",
  "proto//spacer",
  "Seshtan",
  "sinny",
  "SKIDOOJACKET",
  "Waxwing + Rex Domino",
];

const ARTISTS_PERFORMERS = [
  "Madi Plunkett",
  "Neo Fung & Laboranta",
  "Olive Hardy",
  "Phoebe Lo",
];

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

  const [[rand1, rand2, rand3], _] = useState(() => {
    return [
      Math.floor(Math.random() * 24) + 1,
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

            <p
              style={{
                color: COLORS[0],
                fontSize: 12,
                width: "100%",
                marginBottom: 16,
              }}
            >
              21+
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
        <hr className="mobile-divider" />
        <div
          className="right"
          style={{
            position: "relative",
            color: "white",
          }}
        >
          <div
            className="right-child"
            style={{ position: "absolute", height: "100%" }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: 32,
                color: COLORS[2],
              }}
            >
              Lineup
            </h1>
            <div style={{ textAlign: "left", marginBottom: 16 }}>
              <h4 style={{ color: COLORS[0], fontSize: 24, marginBottom: 8 }}>
                Live
              </h4>
              {ARTISTS_LIVE.map((artist, index) => (
                <p
                  key={artist}
                  style={{ color: COLORS[(index % 3) + 1], fontSize: 16 }}
                >
                  {artist}
                </p>
              ))}
            </div>
            <div
              style={{ textAlign: "right", marginBottom: 16 }}
              className="djs"
            >
              <h4 style={{ color: COLORS[0], fontSize: 24, marginBottom: 8 }}>
                DJ
              </h4>
              {ARTISTS_DJ.map((artist, index) => (
                <p
                  key={artist}
                  style={{ color: COLORS[(index % 3) + 1], fontSize: 16 }}
                >
                  {artist}
                </p>
              ))}
            </div>
            <div style={{ textAlign: "left" }} className="performers">
              <h4 style={{ color: COLORS[0], fontSize: 24, marginBottom: 8 }}>
                Performance
              </h4>
              {ARTISTS_PERFORMERS.map((artist, index) => (
                <p
                  key={artist}
                  style={{ color: COLORS[(index % 3) + 1], fontSize: 16 }}
                >
                  {artist}
                </p>
              ))}
            </div>
          </div>
          <div className="image-container">
            <img
              src={`/images/${rand2}.jpg`}
              style={{
                width: "100%",
                objectFit: "contain",
                position: "absolute",
                opacity: 0.9,
              }}
              className="img-1"
            />
            <img
              src={`/images/${rand1}.jpg`}
              style={{
                width: "100%",
                objectFit: "contain",
                opacity: 0.9,
                position: "absolute",
              }}
              className="img-2"
            />
            <img
              src={`/images/${rand3}.jpg`}
              style={{
                width: "100%",
                objectFit: "contain",
                position: "absolute",
                opacity: 0.9,
              }}
              className={`img-3`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
