import Main from "@/components/Main";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-0">
      <Main />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
