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

const ARTISTS_LIVE: Artist[] = [
  {
    name: "Bubble People",
    isGate: true,
    trackTitle: "Steal A Look",
    trackLink: "https://soundcloud.com/bubblepeopleofficial/steal-a-look",
  },
  {
    name: "Craft Ebbing",
    isGate: true,
  },
  {
    name: "Ella Ex Machina",
    isGate: true,
    trackTitle: "Big Polyrhythm",
    trackLink: "https://soundcloud.com/ellaexmachina/big-polyrhythm",
  },
  {
    name: "Fiesta Soundsystem",
    bio: "Fiesta soundsystem presents a new live performance project built from a mountain of homemade sequencing and sampling software, freeing traditional jungle and techno sounds from their familiar strict linear frameworks into chaotic nonlinearity and rhythmic recursion.",
    trackTitle: "FSSYS Productions Spring 2023",
    trackLink:
      "https://soundcloud.com/fiestasoundsystem/fssys-productions-spring-2023",
  },
  {
    name: "ex.sses",
    bio: "ex.sses (she/they) is an experimental sound artist, electronic producer and DJ. She initially came on the scene in 2018 as the founder of Earwax, an ongoing project based platform for sound artists of marginalised genders. ex.sses’ ties to experimental sound and club culture have since manifested in EP releases Relic (Cherche Encore, 2021), Buried (Hard Return, 2021) and most recently Scanner (TT, 2022) which premiered on DJ Mag. As well as singles for compilations including Pollination and Earful of WAV’s out this year. These releases, in addition to their online presence, have gained attention over the past year, resulting in dark, club-focused DJ sets for HÖR, Keep Hush, Circadian Rhythms and electronic live performances for Comic Sans label tour, Hidden Door Festival and Iklectik that expand on ex.sses’ exploration of sonic intimacy, hauntology and the gendered body.",
    trackTitle: "Climax",
    trackLink: "https://soundcloud.com/ex_sses/climax-1",
  },
  { name: "Isn'tses" },
  {
    name: "Kim Cosmik",
    bio: "Kim Cosmik started as a DJ with Sprial Tribe and Bedlam, playing at festivals and clubs all over the U.K and Europe as well as the legendary Knowledge Club in SW1. She has released music through her label Cybersoul on Bandcamp, as well as with a variety of labels such as 2020 Vision Recordings, Science Cult, Diffuse Reality, Touched Music, Section 27, Bass Agenda, Urban Connections, Zwaartekracht and many more. She formed her own label, Void Records in partnership with Hotmix / Bunker records in Holland and then Void was later signed to Matador EMI. Other aliases include Siren, a drum and bass project with Blaze on Spectrum Audio / Alphamagic, collaborating with Dj Damage. Kim Cosmik has played with many amazing artists such as Lory D, Leo Anibaldi, Colin Dale, Serge Clone, Aleksi Perala, Andy Turner, B12, Radioactiveman and many more. Kim Cosmik is currently a resident at www.threadsradio.com, www.techno-club.net and her own event Hybrid which she launched in 2019. ",
    trackTitle: "Threads Takeover",
    trackLink:
      "https://soundcloud.com/kimcosmik/kim-cosmik-threads-takeover-2023",
  },
  {
    name: "Koruth",
    bio: "Koruth is the musical project of painter Anna Ruth. A ballad without words. Intuitive soundscape created on the spot. Endless loops of voice and flutes distorted by multiplication. Transparent sound sources dissolved into a chaotic ambient trance.",
    trackTitle: "Unique Task (w/ Kult Masek)",
    trackLink:
      "https://soundcloud.com/anna-ruth-474715407/kult-koruth-unique-task",
  },
  {
    name: "Marysia Osu + YUIS",
    bio: 'Marysia Osu is a Polish harpist and producer based in London. Using electronics she expands the natural sound of her instrument. Her music is the result of combining "harp, beats & dreams." She will be joined by YUIS on the flute.',
    trackTitle: "Melting Timbers (ft. Plumm)",
    trackLink: "https://soundcloud.com/marysiaharp/melting-timbers-ft-plumm",
  },
  {
    name: "Nosewise",
    bio: "This live set from Nosewise is a new project from the co-founder of label Twin System & the producer/DJ also known as Flytipper. Reconciling what have until now been disparate parts of their practice, it’ll feature guitar and vocal performance informed by jazz & new-wave, over a bed of hypnotic, richly textured production.",
    trackTitle: "Live at Niche",
    trackLink: "https://soundcloud.com/ikavapii/niche-15-06-23-nosewise-live",
  },
  {
    name: "Scary Hari",
    bio: "(v scary)",
    isGate: true,
    trackTitle: "Untitled",
    trackLink: "https://soundcloud.com/hari-chauhan/ruminations",
  },
  { name: "Sokora Mortal" },
  {
    name: "Torn Relics",
    bio: "The London based experimental duo, Torn Relics comprises of Romek Boyer (AKA Rommek) & Aimée Mullen. The body of their work is a mixture of cyber- punk electronics with tribalistic violin, rhythms and tones. Genre bending and tension riding, is all part of the duo’s enigmatic and high energy live performances. They duo have graced the stage across UK and Europe, including Berlin, Bulgaria, Latvia, Greece to name a few. The Poisoned Chalice was the first release form Torn Relics, which came out on Sacred Court in 2019 and included a remix from SNTS. Abolish The Dogma, was the duos debut 8-track album, released in 2020 on Leyla records and their latest LP 'Burning Injustice' Was release on the Berlin based label Instrument Of Discipline. Torn Relics are the Founders of Arcane, the London based event series, focusing on boundary live pushing performances. Together they curate and select artists with a propensity to spear through the noise of conventional production and performance norms. Guest artists include Samuel Kerridge, Iron Sight, Slow White Fall (aka broken English Club), Eraldo Bernocchi, Fresnel Lens to name a few.",
    trackTitle: "Burning Injustice",
    trackLink: "https://soundcloud.com/tornrelics/burning-injustice",
  },
];

const ARTISTS_DJ: Artist[] = [
  {
    name: "Ab Ru",
    bio: `Is Andrea Abbruzzese 
  
  VideoGames Audio Programmer and Sound Artist
  
  Part of multiple performances projects across Italy and Uk bridging between sound research based  performances and experimental location based sound projects 
   
  ⚛️☣️ Vinyl music selector
  💮🌀 Masher of rhythms 
  🦑🦄 SoundJourney Marshall
  🌿🍄 Shrooms advocate  
  🏴‍☠️🥷 Wounded free Rave Soldier  🥷🏴‍☠️
  Lover☢️
  of☣️
  ze👨‍🎨
  ⚛️Sub ⚛️
  🏴‍☠️
  Founding member of the art collectives
   @M.O.B (Uk)
   @Tracey (Italy)`,
  },
  { name: "DJ Sean Davies", isGate: true },
  {
    name: "Dome Zero",
    bio: "Dome Zero makes music that emphasises off-guard abrasiveness and rhythmic inventiveness. This mixture of terror and lark has seen released across labels such as Accidental Meeting and Egregore Collective, as well as a debut EP for All Centre. In his spare time, he indulges himself by writing about music (yawn) and repeatedly watching YouTube clips of TV shows he’s already seen. His set for GATE will be a rare daylight excursion, what the rays of sunshine will bring out is yet to be seen…",
    trackTitle: "Tinned Heat w/ Saltpeter",
    trackLink: "https://soundcloud.com/dome-zero/tinned-heat-with-saltpeter",
  },
  {
    name: "Internal Object",
    isGate: true,
    trackTitle: "Loose Lips Launch",
    trackLink:
      "https://soundcloud.com/loose-lips123/internal-object-ll-ep-launch-event-the-glove-that-fits",
  },
  {
    name: "Lewi Boome",
    bio: "Lewi Boome is a London based DJ and producer who co-runs the blossoming Twin System label whilst being a Kindred and Noods regular. Lewi’s sound reflects his deep appreciation and knowledge of the many sides that electronic music has to offer and sees him deftly dance the line between fun, dark and twisted in a way that results in beautifully controlled chaos. Expect dizzying rhythms and warped textures that travel through a range of off-kilter club tracks, drawing from all corners of the spectrum which will leave your mind melted.",
    trackTitle: "EOS Radio",
    trackLink:
      "https://soundcloud.com/lewiboome/guest-mix-for-mars-leder-eos-radio",
  },
  {
    name: "LNR",
    bio: "LNR is a DJ and music journalist from the UK currently based in Amsterdam. She classes herself as a fan rather than an artist, spending hours digging for old school vinyl along the spectrum of wonky psychedelic controlled chaos. Fiercely passionate for the free party scene, she tries to create an otherworldly journey rooted in subcultural history that spans techno, trance, rave, and jungle.",
    trackTitle: "BunkerBauer",
    trackLink: "https://soundcloud.com/bunkerbauer/bunkerbauer-podcast-50-lnr",
  },
  {
    name: "Oddman",
    isGate: true,
    bio: "this guy is so SICK man he like spray paints his head and wears goretex, sick",
  },
  {
    name: "Frankie Bubblegum",
    trackTitle: "Accidental Meetings Podcast",
    trackLink:
      "https://soundcloud.com/a_m_radio/am-podcast-76-frankie-bubblegum",
  },
  {
    name: "proto//spacer",
    isGate: true,
    bio: "Dubstep and menthol filters? Promise I'm not 16 😝",
    trackTitle: "GATE | Threads",
    trackLink:
      "https://soundcloud.com/mirlomirlo/gate-w-protospacer-hackney-wick-13-jun-threads",
  },
  {
    name: "Seshtan",
    isGate: true,
    trackTitle: "GATE | Threads",
    trackLink:
      "https://soundcloud.com/seshtan/threads-radio-gate-w-seshtan-21-feb-23",
  },
  {
    name: "sinny",
    isGate: true,
    bio: "sinny's purile need to impress those around him can be heard clearly in his try-hard sets that are more often than not, very mid. drawing from a narrow range of music that he has aquired through his youtube recommended videos or sponsored ads on instagram, sinny gives little thought to his selection an instead opts for a 'style over substance' approach by trying to create intrigue through an unappealing mask that he can be seen wearing during his sets. sinny relies heavily on gimmicks such as wheel ups and chopping unrhythimcally much to the annoyance of the audience, however, his sets provide a great opportunity to go for a ciggy break, catch up with friends or watch paint dry.",
    trackTitle: "SODAA Stream",
    trackLink:
      "https://soundcloud.com/s_inny/sodaa-stream-001-netil-radio-sinny-january-22",
  },
  { name: "SKIDOOJACKET", isGate: true },
  {
    name: "Waxwing + Rex Domino",
    bio: "Diversion is a South London club night known for its intimate chaos. Created by Waxwing, the event provides a supportive and pressure-free environment for both established and up-and-coming DJs to experiment and play. Resident host/MC, Horse Militia's Rex Domino, punctuates the night. Sprawling dubbed vocals, seasoned with delay, aim to collaborate with the DJs' selections rather than overshadow them. A custom-built dub siren is always on hand to further elevate the mood. As a selector, Waxwing draws from the realms of Dub and Dance-floor with equal enthusiasm, crafting a thoughtful sonic landscape that you can still shake several legs at.",
  },
];

const ARTISTS_PERFORMERS: Artist[] = [
  { name: "Madi Plunkett", bio: "" },
  { name: "Neo Fung & Laboranta", bio: "", isGate: true },
  {
    name: "Olive Hardy",
    bio: "Olive's chosen material is petroleum jelly, otherwise known as vaseline. She will smother, reveal and conceal using different tools. The tools will also come in useful with her drag persona Dru Lux, painter and decorator extravaganza.",
  },
  { name: "Phoebe Lo", bio: "" },
];

const App: React.FC = () => {
  const [isSlim, setIsSlim] = useState(false);
  const [hasEnteredPassword, setHasEnteredPassword] = useState(false);
  const [isDayTicket, setIsDayTicket] = useState(false);
  const [isM, setIsM] = useState(true);
  const [passwordValue, setPasswordValue] = useState("");

  const [openArtistName, setOpenArtistName] = useState<string | null>(null);
  const [openArtistTrack, setOpenArtistTrack] = useState<string | null>(null);
  const [openArtistLink, setOpenArtistLink] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
    if (e.target.value === PASSWORD) {
      setHasEnteredPassword(true);
      setIsM(false);
    } else if (
      e.target.value === DAY_TICKET_PASSWORD ||
      e.target.value === ALT_DAY_TICKET_PASSWORD
    ) {
      setHasEnteredPassword(true);
      setIsDayTicket(true);
      setIsM(false);
    } else if (e.target.value === ALT_ALT_TICKET_PASSWORD) {
      setHasEnteredPassword(true);
      setIsDayTicket(true);
      setIsM(true);
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
              <b
                style={{
                  textDecoration: isDayTicket ? "line-through" : "none",
                }}
              >
                £75
              </b>
              {isDayTicket && <b> £50</b>}
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
                      isDayTicket ? "50" : "75"
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
            ) : (
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
            <div
              style={{ textAlign: "left", marginBottom: 16 }}
              className="live"
            >
              <h4 style={{ color: COLORS[0], fontSize: 24, marginBottom: 8 }}>
                Live
              </h4>
              {ARTISTS_LIVE.map((artist, index) =>
                artist.bio ? (
                  <Expandable
                    key={artist.name}
                    isOpen={openArtistName === artist.name}
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
                    <p style={{ fontSize: 8, color: "white" }}>{artist.bio}</p>
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
            <div
              style={{ textAlign: "right", marginBottom: 16 }}
              className="djs"
            >
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
                    <p style={{ fontSize: 8, color: "white" }}>{artist.bio}</p>
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
                  <p style={{ fontSize: 8, color: "white" }}>{artist.bio}</p>
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
              <p style={{ fontSize: 8, marginBottom: 64 }}>
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
        </div>
      </div>
    </>
  );
};

export default App;
