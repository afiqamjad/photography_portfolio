import NavigationBar from "../../../components/navigation"
import Image from "next/image"
import Footer from "../../../components/footer"

export default function Landscape() {
    return (
         <div className="flex flex-col h-dvh w-dvw">
            <NavigationBar/>
                <div className="grow flex flex-row justify-evenly">
                    <div className="overflow-y-auto flex flex-col h-[100%] w-[23%]">
                    <Image  src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541922/afiqPort-7_a9avdo.jpg" width={350} height={350} alt=""/>
                    <Image className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541690/afiqPort-4_bhlrar.jpg" width={350} height={350} alt=""/>
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Image  src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745517235/portfolioAfiq-2_repk7w.jpg" width={350} height={350} alt=""/>
                      
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Image src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745517471/portfolioAfiq-7_erocfg.jpg" width={350} height={350} alt=""/>
                      
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Image src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541631/bin_khairir_mot-3_lkcbl7.jpg" width={350} height={350} alt=""/>
                      
                      <Image className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541980/afiqPort-6_or4jhr.jpg" width={350} height={350} alt=""/>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}