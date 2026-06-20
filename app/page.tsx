import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Diferenciais from "@/components/Diferenciais";
import Fazendas from "@/components/Fazendas";
import Regiao from "@/components/Regiao";
import ComoFunciona from "@/components/ComoFunciona";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Diferenciais />
        <Fazendas />
        <Regiao />
        <ComoFunciona />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
