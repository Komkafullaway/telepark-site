import { headers } from "next/headers";
import DesktopLanding from "../components/DesktopLanding";
import MobileLanding from "../components/MobileLanding";

export default async function Home() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  const isMobile =
    /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(userAgent);

  return isMobile ? <MobileLanding /> : <DesktopLanding />;
}