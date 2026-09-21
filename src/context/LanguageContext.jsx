

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    explore: "Explore",
    cultureMap: "Culture Map",
    community: "Community",
    virtualTour: "Virtual Tour",
    exploreHeritage: "Explore Heritage",
    exploreCultureMap: "Explore Culture Map",
    discoverHeritage: "Discover the Heritage of India",
    livingDigitalHeritage: "LIVING DIGITAL HERITAGE",
    shareHeritage: "Share Your Heritage",
    discoverIndia: "DISCOVER INDIA",
  },

  hi: {
    home: "होम",
    explore: "खोजें",
    cultureMap: "संस्कृति मानचित्र",
    community: "समुदाय",
    virtualTour: "वर्चुअल टूर",
    exploreHeritage: "विरासत खोजें",
    exploreCultureMap: "संस्कृति मानचित्र देखें",
    discoverHeritage: "भारत की विरासत की खोज करें",
    livingDigitalHeritage: "जीवंत डिजिटल विरासत",
    shareHeritage: "अपनी विरासत साझा करें",
    discoverIndia: "भारत की खोज करें",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}