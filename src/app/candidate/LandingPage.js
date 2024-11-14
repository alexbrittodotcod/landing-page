import SearchJob from "./landing-page/SearchJob";
import "../../styles/landing-page.scss";

export default function LandingPage() {
  return (
    <main className="font-avenir flex flex-col items-center justify-center">
      <section id="about" className="w-full text-center banner-gradient">
        <SearchJob />
      </section>
    </main>
  );
}
