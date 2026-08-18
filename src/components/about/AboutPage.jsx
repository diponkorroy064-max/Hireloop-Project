import AboutCTA from "./AboutCTA";
import AboutFeatures from "./AboutFeatures";
import AboutHero from "./AboutHero";
import AboutHowItWorks from "./AboutHowItWorks";
import AboutMission from "./AboutMission";
import AboutStats from "./AboutStats";


const AboutPage = () => {
    return (
        <main className="min-h-screen bg-zinc-950 text-white">
            <AboutHero/>
            <AboutStats/>
            <AboutMission />
            <AboutFeatures />
            <AboutHowItWorks />
            <AboutCTA />
        </main>
    );
};

export default AboutPage;
