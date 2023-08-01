import Main from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-20 py-0">
      <Main />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <ContactMe />
      <hr />
      <Footer />
    </main>
  );
}
