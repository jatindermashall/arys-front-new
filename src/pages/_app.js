import { useEffect, useState } from "react";
import useMagneticHover from "@/hooks/useMagneticHover";
import Script from "next/script";
import "../../styles/globals.css";
import "../../public/assets/css/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/preloader.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/style2.css";
import "node_modules/react-modal-video/css/modal-video.css";
import { RecoilRoot } from "recoil";
import Preloader from "@/components/common/Preloader";
//jatinder
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  useMagneticHover();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      {loading ? (
        <>
          <RecoilRoot>
            <Component {...pageProps} />

            <Script id="wow" src="/js/wow.min.js"></Script>
            <Script
              id="initWow"
              strategy="lazyOnload"
            >{`new WOW().init();`}</Script>
          </RecoilRoot>
        </>
      ) : (
        <Preloader />
      )}
    </>
  );
}
