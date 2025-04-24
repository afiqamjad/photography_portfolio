import NavigationBar from "../../components/navigation";
import Image from "next/image";
import Footer from "../../components/footer";
export default function Home() {
  return (
    <div className="flex flex-col w-dvw h-dvh">
      <NavigationBar/>
      <div className="grow flex flex-row justify-evenly">
        <div className="overflow-y-auto flex flex-col h-[100%] w-[23%]">
          <Image src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745515987/preFinalStory-2_ulngal.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../portfolioAfiq-3.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../bin khairir port-2.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-3.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-8.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-9.jpg" width={350} height={350} alt=""/>
        </div>
        <div className="flex flex-col items-evenly h-[100%] w-[23%]">
          <Image  src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745517235/portfolioAfiq-2_repk7w.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../any-8.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../portfolioAfiq-10.JPG" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-4.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-5.jpg" width={350} height={350} alt=""/>
        </div>
        <div className="flex flex-col items-evenly h-[100%] w-[23%]">
          <Image src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745515017/portfolioAfiq-8_b5nxfz.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745517471/portfolioAfiq-7_erocfg.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745520629/yukaEvent-107_l4l2vg.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-2.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-6.jpg" width={350} height={350} alt=""/>
        </div>
        <div className="flex flex-col items-evenly h-[100%] w-[23%]">
          <Image src="../bin khairir mot-3.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../portfolioAfiq-5.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-1.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-7.jpg" width={350} height={350} alt=""/>
          <Image className="mt-[5.5%]" src="../afiqPort-11.jpg" width={350} height={350} alt=""/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
