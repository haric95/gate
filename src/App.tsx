import { Expandable } from "components/expandable";
import { Player } from "components/player";
import React, { useState } from "react";
import { AiOutlineSound, AiFillSound } from "react-icons/ai";

const COLORS = ["#ffffff", "#a1d182", "#6dba2d", "#11af00"];

const PASSWORD = "gatetobreakittoyou";
const DAY_TICKET_PASSWORD = "bettergatethannever";
const ALT_DAY_TICKET_PASSWORD = "bettergatethennever";
const ALT_ALT_TICKET_PASSWORD = "salamiirisangelhuman";

type Artist = {
  name: string;
  bio?: string;
  isGate?: boolean;
  trackLink?: string;
  trackTitle?: string;
};

const App: React.FC = () => {
  return (
    <>
      <div
        className="bg"
        style={{
          zIndex: 0,
          padding: 24,
        }}
      >
        <div className="page">
          <div className="front">
            <div className="recipe-title">
              <h2 style={{ color: COLORS[0] }}>
                Black Lentil Daal with Basmati Rice and Pickle
              </h2>
            </div>
            <div className="ingredients">
              <h2 className="ingredients-title" style={{ color: COLORS[1] }}>
                Ingredients
              </h2>
              <div className="ingredients-row">
                <div className="container">
                  <h3 className="ingredients-subtitle">Daal & Rice</h3>
                  <ul className="ingredients-list">
                    <li className="ingredients-list-item">
                      <span className="quantity">300g</span> whole black urad
                      daal
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">4</span> cloves of garlic
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 inch</span> of ginger
                      (unpeeled)
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">70g</span> tomato puree
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">8g</span> sea salt
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1/3 tsp</span> chilli powder
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1/3 tsp</span> garam masala
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">90 g</span> unsalted butter
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">90 ml</span> double cream
                    </li>
                  </ul>
                </div>
                <div className="container">
                  <h3 className="ingredients-subtitle">Pickle</h3>
                  <ul className="ingredients-list">
                    <li className="ingredients-list-item">
                      <span className="quantity">300g</span> whole black urad
                      daal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {new Array(3).fill(null).map((_, index) => (
            <img
              key={index}
              src={`/images/${Math.ceil(Math.random() * 19)}.jpeg`}
              className="bg-image"
            />
          ))}
        </div>
        {/* <div className="left">
          <div
            style={{
              zIndex: 1,
              marginBottom: 24,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h2 style={{ color: COLORS[0] }}>Grab</h2>
              <h2 style={{ color: COLORS[1] }}>A</h2>
              <h2 style={{ color: COLORS[2] }}>Tent</h2>
              <h2 style={{ color: COLORS[3] }}>Everybody</h2>
            </div>
            <a
              style={{
                fontSize: 12,
                textDecoration: "underline",
                textAlign: "right",
                color: "white",
                height: "fit-content",
              }}
              href="https://docs.google.com/document/d/1R7_KeNRqJsxA1esMBZbpW0BchWAEcZJ00roADe5t6cY/edit"
              target="_blank"
              rel="noreferrer"
            >
              GATE access document and plaintext website
            </a>
          </div>

          <div className="ticket-window left">
            <p style={{ color: COLORS[0] }}>Aug 4th - Aug 6th</p>
            <p style={{ color: COLORS[1] }}>
              <b
                style={{
                  textDecoration: isDayTicket ? "line-through" : "none",
                }}
              >
                £75
              </b>
              {isDayTicket && <b> £55</b>}
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
            {isDayTicket ? (
              <p
                style={{
                  color: COLORS[0],
                  fontSize: 12,
                  width: "100%",
                  marginBottom: 16,
                }}
              >
                Day ticket includes{" "}
                <span style={{ color: COLORS[2] }}>
                  camping on August 4th{" "}
                  <span style={{ textDecoration: "underline" }}>or</span> 5th
                </span>{" "}
                +{" "}
                <span style={{ color: COLORS[2] }}>two home cooked meals</span>
                {isM && (
                  <span>
                    + <span style={{ color: COLORS[2] }}>lots of hugs</span>
                  </span>
                )}
              </p>
            ) : (
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
            )}

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
                    `https://www.paypal.com/paypalme/gatecollective/${
                      isDayTicket ? "55" : "75"
                    }`,
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
                  position: "relative",
                }}
              >
                {isDayTicket ? "Purchase Day Ticket" : "Execute Purchase"}
                {isM && (
                  <img
                    src="/images/kp.png"
                    style={{
                      height: 64,
                      width: 64,
                      position: "absolute",
                      right: -48,
                      top: -32,
                    }}
                  />
                )}
              </button>
            ) : isSecret ? (
              <div style={{ color: COLORS[0], marginTop: 24 }}>
                <p style={{ marginBottom: 8, color: COLORS[3] }}>
                  Enter password to continue with purchase.
                </p>
                <p style={{ marginBottom: 8, color: COLORS[0], fontSize: 12 }}>
                  Send us a message on Instagram{" "}
                  <a
                    href="https://instagram.com/gatheralltheelectronics"
                    style={{ color: COLORS[2] }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    @gatheralltheelectronics
                  </a>{" "}
                  for the password
                </p>
                <p></p>
                <div style={{ marginBottom: 32 }}>
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
            ) : (
              <p
                style={{
                  color: COLORS[3],
                  fontSize: 24,
                  textDecoration: "underline",
                }}
              >
                SOLD OUT{" "}
              </p>
            )}
          </div>
        </div>
        <hr className="mobile-divider" />
        <div
          className="right"
          style={{
            color: "white",
          }}
        >
          <div className="right-child" style={{ height: "100%" }}>
            <div className="player-container">
              <Player
                link={openArtistLink ?? undefined}
                artist={
                  openArtistLink && openArtistName ? openArtistName : undefined
                }
                title={openArtistTrack ?? undefined}
              />
            </div>
            <h1
              style={{
                textAlign: "center",
                marginBottom: 32,
                color: COLORS[2],
              }}
            >
              Lineup
            </h1>
            <div style={{ textAlign: "left" }} className="live">
              <h4 style={{ color: COLORS[0], fontSize: 24, marginBottom: 8 }}>
                Live
              </h4>
              {ARTISTS_LIVE.map((artist, index) =>
                artist.bio ? (
                  <Expandable
                    key={artist.name}
                    isOpen={openArtistName === artist.name}
                    extraOnClick={() => {
                      artist.name.includes("Hari") ? handleHariClick() : null;
                    }}
                    trigger={
                      <p style={{ color: COLORS[(index % 3) + 1] }}>
                        {artist.bio ? (
                          artist.name === openArtistName ? (
                            <span
                              style={{ width: 16, display: "inline-block" }}
                            >
                              -
                            </span>
                          ) : (
                            <span
                              style={{ width: 16, display: "inline-block" }}
                            >
                              +
                            </span>
                          )
                        ) : (
                          ""
                        )}
                        {artist.name}
                        {artist.isGate ? (
                          <img
                            src="/images/gate-logo.svg"
                            style={{
                              width: 28,
                              marginLeft: 4,
                              transform: "rotate(-15deg)",
                              filter: "brightness(6)",
                            }}
                          />
                        ) : null}
                        {artist.trackLink ? (
                          openArtistLink === artist.trackLink ? (
                            <AiFillSound
                              style={{
                                width: 28,
                                marginLeft: 4,
                                transform: "rotate(-15deg)",
                                filter: "brightness(0.8)",
                              }}
                            />
                          ) : (
                            <AiOutlineSound
                              style={{
                                width: 28,
                                marginLeft: 4,
                                transform: "rotate(-15deg)",
                                filter: "brightness(0.8)",
                              }}
                            />
                          )
                        ) : null}
                      </p>
                    }
                    description={artist.bio ?? ""}
                    set={() => {
                      setOpenArtistName(artist.name);
                      setOpenArtistLink(artist.trackLink ?? null);
                      setOpenArtistTrack(artist.trackTitle ?? null);
                    }}
                    unset={() => {
                      setOpenArtistName(null);
                      setOpenArtistLink(null);
                      setOpenArtistTrack(null);
                    }}
                  >
                    <p
                      style={{
                        fontSize: 8,
                        color: "white",
                        whiteSpace: "break-spaces",
                      }}
                    >
                      {artist.bio}
                    </p>
                  </Expandable>
                ) : (
                  <p
                    style={{
                      color: COLORS[(index % 3) + 1],
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (openArtistName === artist.name) {
                        setOpenArtistName(null);
                        setOpenArtistLink(null);
                        setOpenArtistTrack(null);
                      } else {
                        setOpenArtistName(artist.name);
                        setOpenArtistLink(artist.trackLink ?? null);
                        setOpenArtistTrack(artist.trackTitle ?? null);
                      }
                    }}
                  >
                    {artist.bio ? (
                      artist.name === openArtistName ? (
                        <span style={{ width: 16, display: "inline-block" }}>
                          -
                        </span>
                      ) : (
                        <span style={{ width: 16, display: "inline-block" }}>
                          +
                        </span>
                      )
                    ) : (
                      ""
                    )}
                    {artist.name}
                    {artist.isGate ? (
                      <img
                        src="/images/gate-logo.svg"
                        style={{
                          width: 28,
                          marginLeft: 4,
                          transform: "rotate(-15deg)",
                          filter: "brightness(6)",
                        }}
                      />
                    ) : null}
                    {artist.trackLink ? (
                      openArtistLink === artist.trackLink ? (
                        <AiFillSound
                          style={{
                            width: 28,
                            marginLeft: 4,
                            transform: "rotate(-15deg)",
                            filter: "brightness(0.8)",
                          }}
                        />
                      ) : (
                        <AiOutlineSound
                          style={{
                            width: 28,
                            marginLeft: 4,
                            transform: "rotate(-15deg)",
                            filter: "brightness(0.8)",
                          }}
                        />
                      )
                    ) : null}
                  </p>
                )
              )}
            </div>
            <div style={{ textAlign: "right" }} className="djs">
              <h4 style={{ color: COLORS[0], fontSize: 24, marginBottom: 8 }}>
                DJ
              </h4>
              {ARTISTS_DJ.map((artist, index) =>
                artist.bio ? (
                  <Expandable
                    key={artist.name}
                    isOpen={openArtistName === artist.name}
                    trigger={
                      <>
                        <p style={{ color: COLORS[(index % 3) + 1] }}>
                          {artist.trackLink ? (
                            openArtistLink === artist.trackLink ? (
                              <AiFillSound
                                style={{
                                  width: 28,
                                  marginLeft: 4,
                                  transform: "rotate(-15deg)",
                                  filter: "brightness(0.8)",
                                }}
                              />
                            ) : (
                              <AiOutlineSound
                                style={{
                                  width: 28,
                                  marginLeft: 4,
                                  transform: "rotate(-15deg)",
                                  filter: "brightness(0.8)",
                                }}
                              />
                            )
                          ) : null}
                          {artist.isGate ? (
                            <img
                              src="/images/gate-logo.svg"
                              style={{
                                width: 28,
                                marginRight: 4,
                                transform: "rotate(-15deg)",
                                filter: "brightness(6)",
                              }}
                            />
                          ) : null}
                          {artist.name}
                          {artist.bio ? (
                            artist.name === openArtistName ? (
                              <span
                                style={{ width: 16, display: "inline-block" }}
                              >
                                -
                              </span>
                            ) : (
                              <span
                                style={{ width: 16, display: "inline-block" }}
                              >
                                +
                              </span>
                            )
                          ) : (
                            ""
                          )}
                        </p>
                      </>
                    }
                    description={artist.bio ?? ""}
                    set={() => {
                      setOpenArtistName(artist.name);
                      setOpenArtistLink(artist.trackLink ?? null);
                      setOpenArtistTrack(artist.trackTitle ?? null);
                    }}
                    unset={() => {
                      setOpenArtistName(null);
                      setOpenArtistLink(null);
                      setOpenArtistTrack(null);
                    }}
                  >
                    <p
                      style={{
                        fontSize: 8,
                        color: "white",
                        whiteSpace: "break-spaces",
                      }}
                    >
                      {artist.bio}
                    </p>
                  </Expandable>
                ) : (
                  <>
                    <p
                      style={{
                        color: COLORS[(index % 3) + 1],
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        if (openArtistName === artist.name) {
                          setOpenArtistName(null);
                          setOpenArtistLink(null);
                          setOpenArtistTrack(null);
                        } else {
                          setOpenArtistName(artist.name);
                          setOpenArtistLink(artist.trackLink ?? null);
                          setOpenArtistTrack(artist.trackTitle ?? null);
                        }
                      }}
                    >
                      {artist.trackLink ? (
                        openArtistLink === artist.trackLink ? (
                          <AiFillSound
                            style={{
                              width: 28,
                              marginLeft: 4,
                              transform: "rotate(-15deg)",
                              filter: "brightness(0.8)",
                            }}
                          />
                        ) : (
                          <AiOutlineSound
                            style={{
                              width: 28,
                              marginLeft: 4,
                              transform: "rotate(-15deg)",
                              filter: "brightness(0.8)",
                            }}
                          />
                        )
                      ) : null}
                      {artist.isGate ? (
                        <img
                          src="/images/gate-logo.svg"
                          style={{
                            width: 28,
                            marginRight: 4,
                            transform: "rotate(-15deg)",
                            filter: "brightness(6)",
                          }}
                        />
                      ) : null}
                      {artist.name}
                      {artist.bio ? (
                        artist.name === openArtistName ? (
                          <span style={{ width: 16, display: "inline-block" }}>
                            -
                          </span>
                        ) : (
                          <span style={{ width: 16, display: "inline-block" }}>
                            +
                          </span>
                        )
                      ) : (
                        ""
                      )}
                    </p>
                  </>
                )
              )}
            </div>
            <div style={{ textAlign: "left" }} className="performers">
              <h4 style={{ color: COLORS[0], fontSize: 24, marginBottom: 8 }}>
                Performance
              </h4>
              {ARTISTS_PERFORMERS.map((artist, index) => (
                <Expandable
                  key={artist.name}
                  isOpen={openArtistName === artist.name}
                  trigger={
                    <p style={{ color: COLORS[(index % 3) + 1] }}>
                      {artist.bio ? (
                        artist.name === openArtistName ? (
                          <span style={{ width: 16, display: "inline-block" }}>
                            -
                          </span>
                        ) : (
                          <span style={{ width: 16, display: "inline-block" }}>
                            +
                          </span>
                        )
                      ) : (
                        ""
                      )}
                      {artist.name}
                      {artist.isGate ? (
                        <img
                          src="/images/gate-logo.svg"
                          style={{
                            width: 28,
                            marginLeft: 4,
                            transform: "rotate(-15deg)",
                            filter: "brightness(6)",
                          }}
                        />
                      ) : null}
                    </p>
                  }
                  description={artist.bio ?? ""}
                  set={() => setOpenArtistName(artist.name)}
                  unset={() => setOpenArtistName(null)}
                >
                  <p
                    style={{
                      fontSize: 8,
                      color: "white",
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {artist.bio}
                  </p>
                </Expandable>
              ))}
            </div>
            <div
              style={{ textAlign: "right" }}
              className="installations-and-workshops"
            >
              <h4 style={{ color: COLORS[0], fontSize: 24, marginBottom: 8 }}>
                Installations & Workshops
              </h4>
              {ARTISTS_INSTALLATIONS_AND_WORKSHOPS.map((artist, index) => (
                <Expandable
                  key={artist.name}
                  isOpen={openArtistName === artist.name}
                  trigger={
                    <p style={{ color: COLORS[(index % 3) + 1] }}>
                      {artist.bio ? (
                        artist.name === openArtistName ? (
                          <span style={{ width: 16, display: "inline-block" }}>
                            -
                          </span>
                        ) : (
                          <span style={{ width: 16, display: "inline-block" }}>
                            +
                          </span>
                        )
                      ) : (
                        ""
                      )}
                      {artist.name}
                      {artist.isGate ? (
                        <img
                          src="/images/gate-logo.svg"
                          style={{
                            width: 28,
                            marginLeft: 4,
                            transform: "rotate(-15deg)",
                            filter: "brightness(6)",
                          }}
                        />
                      ) : null}
                    </p>
                  }
                  description={artist.bio ?? ""}
                  set={() => setOpenArtistName(artist.name)}
                  unset={() => setOpenArtistName(null)}
                >
                  <p
                    style={{
                      fontSize: 8,
                      color: "white",
                      whiteSpace: "break-spaces",
                    }}
                  >
                    {artist.bio}
                  </p>
                </Expandable>
              ))}
            </div>
            <div
              style={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
              className="menu-offset"
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: 32,
                  color: COLORS[2],
                  opacity: 0.8,
                }}
              >
                Menu
              </h1>
              <div className="menu-container">
                <p style={{ fontSize: 8, color: COLORS[3] }}>Friday Evening</p>
                <h4 style={{ color: COLORS[0], fontSize: 16, marginBottom: 8 }}>
                  Black Lentil Daal with Basmati Rice and Pickle
                </h4>
                <p style={{ fontSize: 12, color: COLORS[2] }}>
                  Lentils slow-cooked with warm spices and vegan butter. Served
                  with basmati rice and a spicy onion pickle
                </p>
              </div>
              <div className="menu-container menu-right">
                <p style={{ fontSize: 8, color: COLORS[3] }}>
                  Saturday Afternoon
                </p>
                <h4 style={{ color: COLORS[0], fontSize: 16, marginBottom: 8 }}>
                  Moroccan Couscous with BBQ Veg, Pickles and Yoghurt
                </h4>
                <p style={{ fontSize: 12, color: COLORS[2] }}>
                  Spiced couscous topped with barbecued courgette, peppers and
                  onions
                </p>
              </div>
              <div className="menu-container">
                <p style={{ fontSize: 8, color: COLORS[3] }}>
                  Saturday Evening
                </p>
                <h4 style={{ color: COLORS[0], fontSize: 16, marginBottom: 8 }}>
                  Jerk Cauliflower with Rice and Peas and Mango Sauce
                </h4>
                <p style={{ fontSize: 12, color: COLORS[2] }}>
                  Smokey marinated cauliflower, barbecued and served on rice
                  with a sweet mango sauce
                </p>
              </div>
              <div className="menu-container menu-right">
                <p style={{ fontSize: 8, color: COLORS[3] }}>
                  Sunday Afternoon
                </p>
                <h4 style={{ color: COLORS[0], fontSize: 16, marginBottom: 8 }}>
                  Morioka Reimen
                </h4>
                <p style={{ fontSize: 12, color: COLORS[2] }}>
                  One of the Three Great Noodles of Morioka, chewy noodles are
                  served in a chilled, rich broth and topped with kimchi and a
                  slice of watermelon
                </p>
              </div>
              <p style={{ fontSize: 12, marginBottom: 64 }}>
                All meals are vegan. Please let us know in advance if you have
                any special dietary requirements.
              </p>
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
        </div> */}
      </div>
    </>
  );
};

export default App;
