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
import { GATEDropzone } from "components/dropzone";

const ARTISTS_LIVE = [
  "Alphe Stael",
  "Arama",
  "Bart",
  "Bubble People",
  "Cajm",
  "Chosen Family Business (Performance Art)",
  "Craft Ebbing",
  "Ella Ex Machina",
  "Kristina May",
  "Nathan JL",
  "Neo Fung & Laboranta",
  "Overbeck",
  "ROOO",
  "Yewen Jin",
] as const;

const ARTISTS_DJ = [
  "Cyberdoll#17",
  "Flesh Suit Driver",
  "Internal Object",
  "Oddman",
  "proto\\\\spacer",
  "Ross Kemp On Nangs b2b Tony Rumble b2b who’s Tony Rumble?",
  "Seshtan",
  "Sin Of The Father b2b Kristina May",
  "sinny",
  "SKIDOOJACKET",
  "Wi-Fi Crime Scene",
] as const;

const ARTISTS_VISUALS = ["Eva + Bruno", "scary hari", "Visual Replica"];

const ARTIST_DESCRIPTIONS: Partial<
  Record<typeof ARTISTS_DJ[number] | typeof ARTISTS_LIVE[number], string>
> = {
  // Live
  Arama:
    "Providing the opening ceremony for our Saturday, using found sounds, objects and their own personal history to create a waterfall of narrative.",
  "Alphe Stael":
    "Travelling to our location via aeronautical means for a salvo of live techno induced polyrhythms.",
  Bart: "Live modular hip-wiggling goodness. One of the most hotly anticipated returns of a GATE alumni.",
  "Bubble People":
    "Our resident organ grinder will debut a batch of new material for our dose of live IDM. Extreme melodics in effect.",
  Cajm: "Fever dream producer visiting Earth once more to create a unique liveset for us. Truly one-off performance, which cannot be missed. ",
  "Chosen Family Business (Performance Art)":
    "This Machine  ? will see the unveiling of a 5 part multimedia piece, taking place across 2 stages and incorporating projection, music and performance art.",
  "Ella Ex Machina":
    "Coded live electronic hardcore for the masses. Daytime antics I hear you say?",
  "Craft Ebbing":
    "Purveyors of scathing political electronica. Lock the doors and break the fader off the master, this pile of gathered electronics will be a danger. “I’d sell my life! For the Arts Council England.”",
  "Kristina May":
    "MPC1000 liveset by the ZykO BiTCh! This upcoming producer has been recording new tracks at breakneck speed over the last few months.",
  Overbeck:
    "Live improvised house and techno from the keyboard maestro, wickedly colourful journey through space and time, driven by the artist’s custom built electronic system.",
  "Yewen Jin":
    "Live coded and Ableton mangling performance. Recent appearances include Corsica Studios and Iklectik for this Infinite Monkey.",
  "Internal Object":
    "Noise and heavy set provided by our resident DJ and chief whip. Late night drone and hard techno meditation. ",
  Oddman:
    "The Beat Crime boss and collector of fine jungle will deliver yet another topshelf mix of styles for the people. If you know, you know!",
  "Cyberdoll#17":
    "Unbridled electronic energy and hyper-techno from the turntable wizard ",
  "Nathan JL": "Master of live-coding disturbances",
  Seshtan:
    "First lost and then found in a crate of techno vynils. Expect groovy percussions, tribal and ritualistic rhythms",
  "Wi-Fi Crime Scene": "leipzig’s hottest youtube ripper",
  "Sin Of The Father b2b Kristina May": "hardcore back n forth",

  // DJ
  sinny: "“The only real DJ I know” - sinny",
  "Neo Fung & Laboranta":
    "Hushed whispers all around London talk of Marina’s fabled sets. Joining together ritual music, shibari practises and performance art.",
  SKIDOOJACKET:
    "brand new skidoo 900 ace 100kms on it an 5 yr warranty $22000 obo comes wit cover wrap around bumper toll hitch air ride suspension adjustable steering 156 in track 20 in wide ice scratches new oil and filter for the first oil change and a big cargo box, skimmed da atlantic in er last winter buddy its mint ",
  "Flesh Suit Driver":
    "Abstract to click clack. Baddie music for baddie people.",
  "Ross Kemp On Nangs b2b Tony Rumble b2b who’s Tony Rumble?":
    "The ultimate vinyl rumble jungle tumble",
  ROOO: "ROOO IS THE AUGMENTED PROJECTION OF AN ARTIST WHO WRITES CRYSTAL CLEAR MELODIES WITH NON-CLICHÉD STRUCTURES. OBSESSIONS, SELF-DEPRECATION AND UNEXPRESSED HYPER-SEXUALITY EMBODY THE OVER-EXAGGERATED VERSION OF AN ENTITY WHO LIVES THE TRAGEDIES AND CONTRADICTIONS OF THE INFORMATION AGE.",
  "proto\\\\spacer": "Not bad for a first gig",
};

const App: React.FC = () => {
  const [openArtist, setOpenArtist] = useState<string | null>(null);
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
          <div className="ty">
            <p>
              We are beyond grateful for the support of those who attended
              PROPAGATE! You were the most respectful group of guests we could
              have hoped for :)
            </p>
            <p>
              If you have recorded any evidence of the festival, we would love
              to see it! Please upload photos and/ or videos below.
            </p>
            <a
              href="https://www.dropbox.com/request/xiRc22HIhLfzM76e7CZ7"
              target="_blank"
              rel="noreferrer"
            >
              <button className="upload-button">Upload</button>
              {/* <GATEDropzone /> */}
            </a>
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
            <h1>DJ</h1>
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
          <div className="visual">
            <h1>VISUAL</h1>
            {ARTISTS_VISUALS.map((artist) => (
              <Expandable
                key={artist}
                isOpen={openArtist === artist}
                title={artist}
                set={() => {
                  console.log();
                }}
                align="left"
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
                Secret location close to Guildford. ~ 1hr train from Waterloo.
              </p>
            </div>
            <div className="sec left">
              <h2>INDOORS // OUTDOORS</h2>
              <h2>LIVE // DJ // PERFORMANCE // SAUNA</h2>
              <h2>2 SOUND SYSTEMS</h2>
              <h2>A FIELD AND A BARN</h2>
              <h2>
                120 <span className="underline">BODIES</span>
              </h2>
            </div>
            <div className="sec left">
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
