import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets/assets'
import { Context } from '../../context/Context'
import { useContext } from 'react'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="geemini" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="img" />
              </div>
              <div className="card">
                <p>Briefly summarise this concept urban pplanning</p>
                <img src={assets.bulb_icon} alt="img" />
              </div>
              <div className="card">
                <p>Brainstrom team bonding activites for our work retreat</p>
                <img src={assets.message_icon} alt="img" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="img" />
              </div>
            </div>{" "}
          </>
        ) : (
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="img" />
                    <p>{recentPrompt}</p>
                          </div>
                          <div className="result-data">
                              <img src={assets.gemini_icon} alt="img" />
                              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                          </div>
            </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="send" />
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate info</p>
        </div>
      </div>
    </div>
  );
}

export default Main