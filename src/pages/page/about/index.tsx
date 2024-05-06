import Button from "@/shared-components/button/Button";
import Slideshow from "@/shared-components/slideshow";
import { useEffect, useState } from "react";

const image = [
  "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akuratco/images/akurat_20210108121050_i4B9c8.jpg",
  "https://cdn.pixabay.com/photo/2020/04/26/04/09/rujak-5093461_1280.jpg",
  "https://www.tasteatlas.com/images/dishes/dee68d25d574451fa225fd57465255a3.jpg",
  "https://ariwara.com/wp-content/uploads/2024/03/02.-Ilustrasi-Jus-Buah-naga-Sumber-Foto-Endeus-TV.webp",
  "https://img-cdn.medkomtek.com/pGDuWna4_zHnDumEU56lPeOX-Yg=/0x0/smart/filters:quality(100):format(webp)/article/hIPmNiJto2jsd8jl9T-F-/original/014319800_1601612699-Jus-Buah-shutterstock_1684002757.jpg",
];



const AboutPage = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const blurThreshold = 50;
  
      if (scrollTop > blurThreshold) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about" className={`w-full h-fit py-10 px-52 flex flex-col items-center relative bg-white mt-[1000px] transition-all duration-500 ${isBlurred ? "bg-black bg-opacity-60 backdrop-filter backdrop-blur-md " : ""}`}>
      <h1 className="w-full flex py-3 justify-center text-2xl font-semibold ">
        About
      </h1>
      <div className="flex w-full p-10 justify-between h-full gap-5">
        <div className="w-1/2 h-[350px] rounded-lg">
          <Slideshow images={image} className="w-full h-full rounded-lg" />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="w-full flex text-2xl font-semibold">Bu Komang</h1>
          <p className="text-sm text-justify">
            Di desa Br. Tagtag, Sibanggede, ada sebuah warung tradisional yang
            ramah dan menghadirkan nuansa lokal yang autentik. Bangunannya
            terbuat dari bambu dan kayu, sederhana namun menawan dengan atap
            jerami yang melengkung indah di atasnya. Begitu masuk, Anda disambut
            dengan senyum hangat dari pemiliknya, yang biasanya penduduk sekitar
            yang paham betul soal makanan tradisional. Di dalam, suasana hidup
            dengan pembicaraan ceria para pengunjung yang menikmati hidangan
            seperti rujak, es buah, dan jus segar. Meja kayu yang simpel
            memberikan kenyamanan bagi mereka yang ingin menikmati hidangan di
            sini, sambil menikmati udara segar desa dan pemandangan hijau
            sekitarnya.
          </p>
          <Button type="button" className="w-40 py-2" color="default">
            Lihat Lokasi
          </Button>
        </div>
      </div>
      <div className="h-full w-full my-20 flex flex-col justify-center items-center">
        <i className="bx bx-chevrons-down bx-fade-down -mt-7 text-5xl"></i>
        <i className="bx bx-chevrons-down bx-fade-down -mt-7 text-5xl"></i>
        <i className="bx bx-chevrons-down bx-fade-down -mt-7 text-5xl"></i>
      </div>
      <div className="w-full h-full py-5 flex justify-center">
        <iframe
          className="border shadow-2xl rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d986.2821244842697!2d115.21779426956859!3d-8.583641999466302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzUnMDEuMSJTIDExNcKwMTMnMDYuNCJF!5e0!3m2!1sid!2sid!4v1714396643077!5m2!1sid!2sid"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutPage;
