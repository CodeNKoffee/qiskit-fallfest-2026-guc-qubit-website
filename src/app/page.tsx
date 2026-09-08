import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Qubit from "@/components/sections/Qubit";
import EventTimeline from "@/components/sections/EventTimeline";
import Schedule from "@/components/sections/Schedule";
import HackathonTeaser from "@/components/sections/HackathonTeaser";
import Team from "@/components/sections/Team";
import Venue from "@/components/sections/Venue";
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
      <About />
      <Qubit />
      <EventTimeline />
      <Schedule />
      <HackathonTeaser />
      <Team />
      <Venue />
      <Register />
    </>
  );
}
