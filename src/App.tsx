import { Camera } from "components/camera/camera";
import { Logo } from "components/logo/logo";
import React, { Suspense, useState } from "react";
import { Canvas } from "react-three-fiber";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  DotScreen,
} from "react-postprocessing";
import { Expandable } from "components/expandable";

const ARTISTS_LIVE = [
  "Alphe Stael",
  "Arama",
  "Bart",
  "Bubble People",
  "Cajm",
  "Chosen Family, Business (Performance Art)",
  "Craft Ebbing",
  "Ella Ex Machina",
  "Kristina May",
  "Neo Fung & Laboranta",
  "Overbeck",
  "ROOO",
  "Yewen Jin",
];

const ARTIST_DESCRIPTIONS = {
  Arama:
    "Providing the opening ceremony for our Saturday, using found sounds, objects and their own personal history to create a waterfall of narrative.",
  "Alphe Stael":
    "Travelling to our location via aeronautical means for a salvo of live techno induced polyrhythms.",
  Bart: "Live modular hip-wiggling goodness. One of the most hotly anticipated returns of a GATE alumni.",
  "Bubble People":
    "Our resident organ grinder will debut a batch of new material for our dose of live IDM. Extreme melodics in effect.",
  Cajm: "Fever dream producer visiting Earth once more to create a unique liveset for us. Truly one-off performance, which cannot be missed. ",
  "Chosen Family Business":
    "This Machine  ? will see the unveiling of a 5 part multimedia piece, taking place across 2 stages and incorporating projection, music and performance art.",
  "Ella Ex Machina":
    "Coded live electronic hardcore for the masses. Daytime antics I hear you say?",
  "Craft Ebbing":
    "Purveyors of scathing political electronica. Lock the doors and break the fader off the master, this pile of gathered electronics will be a danger. “I’d sell my life! For the Arts Council England.”",
  "Kristina May":
    "MPC1000 liveset by the ZykO BiTCh! This upcoming producer has been recording new tracks at breakneck speed over the last few months.",
  "Over-beck":
    "Live improvised house and techno from the keyboard maestro, wickedly colourful journey through space and time, driven by the artist’s custom built electronic system.",
  "Yewen Jin":
    "Live coded and Ableton mangling performance. Recent appearances include Corsica Studios and Iklectik for this Infinite Monkey.",
  "Internal Object":
    "Noise and heavy set provided by our resident DJ and chief whip. Late night drone and hard techno meditation. ",
  Oddman:
    "The Beat Crime boss and collector of fine jungle will deliver yet another topshelf mix of styles for the people. If you know, you know!",
  "DJ Pitch":
    "Our headline set will be provided by the TT and All Centre boss and all-round legend, DJ Pitch. Hardworking and diligent, this performer is responsible for some of the most FWD-thinking releases of the last few years. ",
  Z: "Unbridled electronic energy and hyper-techno from the turntable wizard ",
};

const ARTISTS_DJ = [
  "Cajm",
  "Bubble People",
  "Internal Object",
  "Flesh Suit Driver",
  "Oddman",
  "DJ Pitch",
  "proto\\spacer",
  "Ross Kemp On Nangs b2b Tony Rumble b2b who’s Tony Rumble?",
  "Seshtan",
  "SKIDOOJACKET",
  "sinny",
  "Sin Of The Father b2b Kristina May",
  "Wi-Fi Crime Scene",
  "Z",
];

const App: React.FC = () => {
  const [openArtist, setOpenArtist] = useState<string | null>(null);

  console.log(openArtist);

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
                containerElem.scrollTo({ top: rect.top, behavior: "smooth" });
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
            {ARTISTS_LIVE.map((artist) => (
              <Expandable
                key={artist}
                isOpen={openArtist === artist}
                title={artist}
                description={
                  artist in ARTIST_DESCRIPTIONS
                    ? ARTIST_DESCRIPTIONS[
                        artist as keyof typeof ARTIST_DESCRIPTIONS
                      ]
                    : undefined
                }
                set={setOpenArtist}
                align="left"
              />
            ))}
          </div>
          <div className="dj">
            {ARTISTS_DJ.map((artist) => (
              <Expandable
                key={artist}
                isOpen={openArtist === artist}
                title={artist}
                description={
                  artist in ARTIST_DESCRIPTIONS
                    ? ARTIST_DESCRIPTIONS[
                        artist as keyof typeof ARTIST_DESCRIPTIONS
                      ]
                    : undefined
                }
                set={setOpenArtist}
                align="right"
              />
            ))}
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
