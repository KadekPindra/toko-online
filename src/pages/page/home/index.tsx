import Button from "@/shared-components/button/Button";
import Slideshow from "@/shared-components/slideshow";


const image = [
  "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akuratco/images/akurat_20210108121050_i4B9c8.jpg",
  "https://cdn.pixabay.com/photo/2020/04/26/04/09/rujak-5093461_1280.jpg",
  "https://www.tasteatlas.com/images/dishes/dee68d25d574451fa225fd57465255a3.jpg",
  "https://ariwara.com/wp-content/uploads/2024/03/02.-Ilustrasi-Jus-Buah-naga-Sumber-Foto-Endeus-TV.webp",
  "https://img-cdn.medkomtek.com/pGDuWna4_zHnDumEU56lPeOX-Yg=/0x0/smart/filters:quality(100):format(webp)/article/hIPmNiJto2jsd8jl9T-F-/original/014319800_1601612699-Jus-Buah-shutterstock_1684002757.jpg",
];

const HomePage = () => {
  return (
    <>
      <div id="home" className="flex w-full  justify-center h-screen overflow-hidden fixed top-0 -z-50">
          <div className="w-full">
            <div className="absolute  z-10 opacity-50 w-full h-full bg-white"></div>
          <Slideshow images={image} className="w-screen h-full"/>
          </div>
      </div>
    </>
    );
};

export default HomePage;
