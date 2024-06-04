'use client'

import { ThemeProvider } from "@/contexts/ThemeContext";
import Image from "next/image";
import { Container } from "../components/Container";
import { Button } from "@/components/button";
import { ThemeSwitch } from "@/components/ThemeSwitch";


const Home = () => {
  return (
   <ThemeProvider>
    <Container>
      <header className="py-5">
        <h1 className="text-3xl">Atualize a Página</h1>
      </header>
      <section>
        <p className="my-5">Atualize de novo d[^-^]b</p>

        <Button label="Clique Aqui" />
      </section>

      <ThemeSwitch/>

    </Container>
   </ThemeProvider>
  );
}


export default Home;