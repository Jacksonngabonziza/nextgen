import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Team from "../components/Team";
import ServicesSection from "../components/Services";
import MissionVisionValues from "../components/about";
export default function Home() {
  return (
    <>
      <SeoHead title='NexGen' />
      <Layout>
        <Hero />
        <ServicesSection/>
        <Team />
        <MissionVisionValues/>
        <Feature />
        <Pricing />
        
        
      </Layout>
    </>
  );
}
