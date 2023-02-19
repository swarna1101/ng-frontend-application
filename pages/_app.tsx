import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
    </Container>
  );
}
