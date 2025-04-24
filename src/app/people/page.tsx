import Footer from "../../../components/footer";
import NavigationBar from "../../../components/navigation";
import Image from "next/image";

export default function People() {
    return (
        <div className="flex flex-col h-dvh w-dvw">
            <NavigationBar/>
            <div className="grow flex flex-row justify-evenly">
                    <div className="overflow-y-auto flex flex-col h-[100%] w-[23%]">
                      <Image src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745515987/preFinalStory-2_ulngal.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../portfolioAfiq-3.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../bin khairir port-2.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../afiqPort-11.jpg" width={350} height={350} alt=""/>
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Image src="../portfolioAfiq-10.JPG" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../any-8.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../afiqPort-3.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../afiqPort-8.jpg" width={350} height={350} alt=""/>
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Image src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745515017/portfolioAfiq-8_b5nxfz.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../afiqPort-5.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745520629/yukaEvent-107_l4l2vg.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../afiqPort-9.jpg" width={350} height={350} alt=""/>
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Image src="../afiqPort-2.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../portfolioAfiq-5.jpg" width={350} height={350} alt=""/>
                      <Image className="mt-[5.5%]" src="../afiqPort-1.jpg" width={350} height={350} alt=""/>
                    </div>
                  </div>
            <Footer/>
        </div>
    )
}