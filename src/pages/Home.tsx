import { useState } from "react";

import LoadingScreen from "../components/sections/LoadingScreen";
import Welcome from "../components/sections/Welcome";
import GiftOpening from "../components/sections/GiftOpening";
import BirthdayWish from "../components/sections/BirthdayWish";
import Gallery from "../components/sections/Gallery";
import ScratchReveal from "../components/sections/ScratchReveal";
import Letter from "../components/sections/Letter";
import Cake from "../components/sections/Cake";
import FinalScreen from "../components/sections/FinalScreen";

import Transition from "../components/common/Transition";

interface HomeProps {
  startMusic: (enabled: boolean) => void;
}

export default function Home({ startMusic }: HomeProps) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    // Start music the first time the user opens the surprise.
    if (page === 0) {
      startMusic(true);
    }

    setPage((prev) => prev + 1);
  };

  const replay = () => {
    setPage(0);
  };

  if (loading) {
    return (
      <LoadingScreen
        finishLoading={() => setLoading(false)}
      />
    );
  }

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Transition pageKey={page}>
        {page === 0 && (
          <Welcome
            onNext={nextPage}
          />
        )}

        {page === 1 && (
          <GiftOpening
            onNext={nextPage}
          />
        )}

        {page === 2 && (
          <BirthdayWish
            onNext={nextPage}
          />
        )}

        {page === 3 && (
          <Gallery
            onNext={nextPage}
          />
        )}

        {page === 4 && (
          <ScratchReveal
            onNext={nextPage}
          />
        )}

        {page === 5 && (
          <Letter
            onNext={nextPage}
          />
        )}

        {page === 6 && (
          <Cake
            onNext={nextPage}
          />
        )}

        {page === 7 && (
          <FinalScreen
            onReplay={replay}
          />
        )}
      </Transition>
    </main>
  );
}