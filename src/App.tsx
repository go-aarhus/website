import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Links } from "./components/sections/Links";
import { Events } from "./components/sections/Events";
import { Organizers } from "./components/sections/Organizers";
import { CallForTalks } from "./components/sections/CallForTalks";
import { CompaniesWall } from "./components/sections/CompaniesWall";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <Events />
        <CallForTalks />
        <CompaniesWall />
        <Links />
        <Organizers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
