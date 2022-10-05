import "./App.scss";
import { useState } from "react";

//components
import Header from "@/components/Header/Header";
import ContentTitle from "@/components/ContentTitle/ContentTitle";
import TextScreen from "@/components/TextScreen/TextScreen";
import PoeticTextScreen from "@/components/PoeticTextScreen/PoeticTextScreen";
import Footer from "@/components/Footer";

// content
import { headerContent } from "@/ContentArrays/headerContent";
import { titlesContent } from "@/ContentArrays/titlesContent";
import { proseContent } from "@/ContentArrays/proseContent";
import { spellContent } from "@/ContentArrays/spellContent";
import { songsArr } from "@/ContentArrays/songsArr";
import { footerPersons, footerPartners } from "@/ContentArrays/footerContent";

function App() {
  const [lang, setLang] = useState(0);

  const changeLang = () => {
    if (lang < headerContent.length - 1) {
      setLang(lang + 1);
    } else {
      setLang(0);
    }
  };


  Array.prototype.myCastomMap = function (callback) {
    let res = this;
    for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) {
    break;
    }
    res[i] = callback(this[i], i, this);
    }
    return res;
    };

  return (
    <div className="App">
      <Header content={headerContent[lang]} changeLang={changeLang} />
      
      <div className="section-container">
      <ContentTitle content={titlesContent[lang].titleText} />
      <TextScreen content={proseContent[lang].proseText1} />

      <ContentTitle content={titlesContent[lang].titleSpell} />
      <PoeticTextScreen
        name={spellContent[lang].spellName}
        textArr={spellContent[lang].spellText}
      />

      <ContentTitle content={titlesContent[lang].titleSongs} />
      {songsArr.map((song, index) => {
        return (
          <PoeticTextScreen
            name={song[lang].songName}
            textArr={song[lang].songText}
            key={index}
          />
        );
      })}

      <TextScreen content={proseContent[lang].proseText2} />
      </div>
      

      <Footer content={footerPersons} />
      <h2>OUR PARTNERS</h2>
      <Footer content={footerPartners} />
    </div>
  );
}

export default App;
