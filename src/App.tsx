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
                Jerk Cauliflower with Rice and Peas and Mango Sauce
              </h2>
              <p style={{ color: COLORS[2] }}>
                Smokey marinated cauliflower, barbecued and served on rice with
                a sweet mango sauce
              </p>
            </div>
            <div className="recipe-description"></div>

            <div className="ingredients">
              <h2 className="ingredients-title">Ingredients</h2>
              <div className="ingredients-row">
                <div className="container">
                  <h3 className="ingredients-subtitle">Jerk Cauliflower</h3>
                  <ul className="ingredients-list">
                    <li className="ingredients-list-item">
                      <span className="quantity">2</span> cauliflowers
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">6</span> spring onions
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">12 sprigs</span> of thyme
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2</span> scotch bonnet chillies
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2 tbsp</span> brown sugar
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 1/2 tsp</span> salt
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 tbsp</span> allspice powder
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 tsp</span> cinnamon powder
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1</span> lime
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1</span> lemon
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2 inches</span> ginger
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">8</span> cloves of garlic
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 1/2 tbsp</span> olive oil
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 tbsp</span> honey
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2 tbsp</span> rice vinegar
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2 tbsp</span> tamari or GF soy
                      sauce
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">60 ml</span> orange juice
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2</span> medium onions
                    </li>
                  </ul>
                </div>
                <div className="container">
                  <h3 className="ingredients-subtitle">Rice and Peas</h3>
                  <ul className="ingredients-list">
                    <li className="ingredients-list-item">
                      <span className="quantity">1</span> yellow onion
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2</span> cloves of garlic
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2 cups</span> long grain white
                      rice
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">180 ml</span> coconut milk
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">180 ml</span> water
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 1/2 tsp</span> salt
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1/2 tsp</span> ground allspice
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1/4 tsp</span> ground black
                      pepper
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 tin</span> red kidney beans
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2 sprigs</span> of thyme
                    </li>
                  </ul>
                  <h3
                    className="ingredients-subtitle"
                    style={{ marginTop: 32 }}
                  >
                    Mango Sauce
                  </h3>
                  <ul className="ingredients-list">
                    <li className="ingredients-list-item">
                      <span className="quantity">2</span> ripe mangoes
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">1 inch</span> piece of ginger
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">30 ml</span> rice vinegar
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">50g</span> brown sugar
                    </li>
                    <li className="ingredients-list-item">
                      <span className="quantity">2</span> sprigs of thyme
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

        <div className="page instructions">
          <div className="front">
            <div className="recipe-instructions-title">
              <h2 style={{ color: COLORS[0] }}>
                Jerk Cauliflower with Rice and Peas and Mango Sauce
              </h2>
            </div>
            <div className="recipe-description"></div>

            <div className="instructions">
              <h2 className="instructions-title">Instructions</h2>
              <div className="">
                <h3 className="instructions-subtitle">Jerk Cauliflower</h3>
                <ol className="instructions-list">
                  <li className="instructions-list-item c1">
                    <p className="number">1.</p>
                    <p>
                      Add all ingredients apart from the cauliflower to a food
                      processor and process until you have a chunky paste.
                    </p>
                  </li>
                  <li className="instructions-list-item ml-1 c2">
                    <p className="number">2.</p>
                    <p>
                      Break apart the cauliflowers into large florettes and coat
                      in the marinade for{" "}
                      <span className="highlight">2-12 hours</span>.
                    </p>
                  </li>
                  <li className="instructions-list-item ml-2 c3">
                    <p className="number">3.</p>
                    <p>
                      Grill or bake at <span className="highlight">200 °C</span>{" "}
                      until the caulifower is tender with a smokey charred on
                      the outside.
                    </p>
                  </li>
                </ol>
                <h3 className="instructions-subtitle">Rice and Peas</h3>
                <ol className="instructions-list">
                  <li className="instructions-list-item c1">
                    <p className="number">1.</p>
                    <p>
                      Sauté diced yellow onion in olive oil on a medium heat
                      until soft, around{" "}
                      <span className="highlight">3 minutes</span>.
                    </p>
                  </li>
                  <li className="instructions-list-item ml-1 c2">
                    <p className="number">2.</p>
                    <p>
                      Add finely minced garlic and spring onion and continute to
                      sauté for <span className="highlight">1 minute</span>
                    </p>
                  </li>
                  <li className="instructions-list-item ml-2 c3">
                    <p className="number">3.</p>
                    <p>
                      Take off the heat and add the rice, coconut milk, water,
                      salt, allspice and black pepper. Stir to combine
                    </p>
                  </li>
                  <li className="instructions-list-item ml-1 c2">
                    <p className="number">4.</p>
                    <p>
                      Pour the tin of undrained kidney beans into the center of
                      the rice and lay sprigs of thyme on top.
                    </p>
                  </li>
                  <li className="instructions-list-item c1">
                    <p className="number">5.</p>
                    <p>
                      Bring the pot up to a simmer over medium heat, then lower
                      the heat and cover with a lid. Leave for ~ 16 minutes or
                      until rice is cooked through but the grains remain
                      separate.
                    </p>
                  </li>
                </ol>
                <h3 className="instructions-subtitle">Mango Sauce</h3>
                <ol className="instructions-list">
                  <li className="instructions-list-item c1">
                    <p className="number">1.</p>
                    <p>
                      Chop the mango into chunks and combine all ingredients in
                      a pan, removing the thyme from the stems. Cook down until
                      all ingredients are combined and a soft texture. Loosen
                      with a small amount of water if sticking to the pan.
                    </p>
                  </li>
                  <li className="instructions-list-item c2 ml-1">
                    <p className="number">2.</p>
                    <p>
                      Add everything to a food processor and blend until a
                      smooth sauce.
                    </p>
                  </li>
                </ol>
              </div>
              <p className="final">
                Serve a generous portion of rice topped with the cauliflower and
                mango sauce. Some steamed green will go great with this dish and
                feel free to top with any remaining marinade which also works
                great as a dipping sauce.
              </p>
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
