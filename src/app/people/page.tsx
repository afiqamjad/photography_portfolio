import Footer from "../../../components/footer";
import NavigationBar from "../../../components/navigation";
import Lightbox from "../../../components/lightbox";

export default function People() {
    return (
        <div className="flex flex-col h-dvh w-dvw">
            <NavigationBar/>
            <div className="grow flex flex-row justify-evenly">
                    <div className="overflow-y-auto flex flex-col h-[100%] w-[23%]">
                      <Lightbox src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745515987/preFinalStory-2_ulngal.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745542050/afiqPort-12_s0cjn0.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541587/bin_khairir_port-2_by4uty.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541534/afiqPort-11_rwdcuw.jpg" width={350} height={350} alt=""/>
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Lightbox src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745542323/afiqPort-14_s6ljqy.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745542441/afiqPort-15_vetkbu.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541401/afiqPort-3_yig5yh.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541839/afiqPort-8_wsgmcr.jpg" width={350} height={350} alt=""/>
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Lightbox src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745515017/portfolioAfiq-8_b5nxfz.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541785/afiqPort-5_dq5fpu.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745520629/yukaEvent-107_l4l2vg.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541137/afiqPort-9_bkjelk.jpg" width={350} height={350} alt=""/>
                    </div>
                    <div className="flex flex-col items-evenly h-[100%] w-[23%]">
                      <Lightbox src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541558/afiqPort-2_kqsnpc.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745542156/afiqPort-13_hlu1gj.jpg" width={350} height={350} alt=""/>
                      <Lightbox className="mt-[5.5%]" src="https://res.cloudinary.com/dfcqlwnxu/image/upload/v1745541306/afiqPort-1_u0rrrc.jpg" width={350} height={350} alt=""/>
                    </div>
                  </div>
            <Footer/>
        </div>
    )
}