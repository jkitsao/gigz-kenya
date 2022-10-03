import Featured from "../components/featured";
import Hero from "../components/Hero";
import Landing_page from "../components/layouts/Landing_page";
export default function Home() {
  return (
    <>
      <Landing_page>
        <Hero />
        <Featured />
      </Landing_page>
    </>
  )
}
