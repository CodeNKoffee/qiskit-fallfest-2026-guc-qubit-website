import Hero from "@/components/sections/Hero";
import Decade from "@/components/sections/Decade";
import About from "@/components/sections/About";
import Qubit from "@/components/sections/Qubit";
import Format from "@/components/sections/Format";
import Schedule from "@/components/sections/Schedule";
import Speakers from "@/components/sections/Speakers";
import HackathonTeaser from "@/components/sections/HackathonTeaser";
import Sponsors from "@/components/sections/Sponsors";
import Team from "@/components/sections/Team";
import Faq from "@/components/sections/Faq";
import Register from "@/components/sections/Register";

/**
 * The scroll spine. Section order is also the tone sequence: the page
 * starts on Cloud Dancer white, inverts to deep space through the
 * hackathon half, and resolves back to light at registration.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Decade />
      <About />
      <Qubit />
      <Format />
      <Schedule />
      <Speakers />
      <HackathonTeaser />
      <Sponsors />
      <Team />
      <Faq />
      <Register />
    </>
  );
}
