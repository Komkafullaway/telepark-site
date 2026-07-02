import DesktopLanding from "../components/DesktopLanding";
import MobileLanding from "../components/MobileLanding";

export default function Home() {
  return (
    <>
      <div className="desktopOnly">
        <DesktopLanding />
      </div>

      <div className="mobileOnly">
        <MobileLanding />
      </div>
    </>
  );
}
