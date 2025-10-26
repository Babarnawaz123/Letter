import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [opened, setOpened] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else audio.play();
    setIsPlaying(!isPlaying);
  };

  const openLetter = () => {
    setOpened(true);
    setTimeout(() => {
      const audio = audioRef.current;
      audio.play();
      setIsPlaying(true);
    }, 1500); // start music shortly after animation begins
  };

  return (
    <div className="wrapper">
      {!opened && (
        <div className="intro">
          <h1 className="title fade-down">💌 For You, My Kulfi</h1>
          <button className="open-btn pulse" onClick={openLetter}>
            Open the Letter 💖
          </button>
          <div className="hearts">
            <span>💖</span>
            <span>💘</span>
            <span>💞</span>
            <span>💕</span>
            <span>💓</span>
            <span>💗</span>
          </div>
        </div>
      )}

      {opened && (
        <div className="letter-container slide-up">
          <h1 className="poem-title">The Story in Your Eyes </h1>
          <div className="poem-text">
            <p>
              My dearest Kulfi,
              <br />
              <br />
              There are poems the world has not yet written,
              <br />
              songs that have not yet found their melody —<br />
              and all of them live quietly in the light of your eyes.
            </p>
            <p>
              When I look at you, time itself forgets to move.
              <br />
              Those eyes — tender, endless — hold the calm of moonlight
              <br />
              and the wildness of a storm that knows it is beautiful.
            </p>
            <p>
              They do not merely look — they speak; they whisper kindness, they
              laugh in glimmers, and when they find mine, the universe pauses to
              listen.
            </p>
            <p>
              If I could paint a thousand skies, none would hold their color.{" "}
              <br />
              Your eyes are my favorite place — where every day begins and my
              heart always returns.
            </p>
            <p className="signature">
              Always,
              <br /> <strong>Cutooo</strong>
            </p>
          </div>
        </div>
      )}

      <audio ref={audioRef} src="/soft-piano.mp3" loop preload="auto"></audio>

      {opened && (
        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? "⏸ Pause Music" : "🎵 Play Music"}
        </button>
      )}
    </div>
  );
}

export default App;
