import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="h-screen w-full relative">
      <img src="/background.png" className="absolute top-0 left-0" />
      <Navbar />
    </div>
  )
}
