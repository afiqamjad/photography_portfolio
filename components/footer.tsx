import Link from "next/link"
import Image from "next/image"
export default function Footer() {
    return (
        <footer>
            <div className="flex flex-row justify-between w-[100%] py-[0.5%] mt-[1.5%]">
                <div className="h-[100%] px-[1.8%] text-[100%]">
                    Afiq Amjad ©
                </div>
                <Link href="https://www.instagram.com/afiqcaptures" className="h-[100%] px-[1.8%]">
                    <Image src={"https://img.icons8.com/fluency/60/instagram-new.png"} height={25} width={25} alt=""></Image>
                </Link>
            </div>
        </footer>
    )
}