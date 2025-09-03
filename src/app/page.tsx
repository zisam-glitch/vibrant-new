import Hero from "@/components/home/hero";
import Qualitiest from "@/components/home/qualitiest";
import Subscriptions from "@/components/home/subscriptions";
import Classes from "@/components/home/classes";
import Programs from "@/components/home/programs";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
    <Header />
      <Hero />
      <Qualitiest />
      <Subscriptions />
      <Classes />
      <Programs />
      <Footer />
    </>

  );
}
