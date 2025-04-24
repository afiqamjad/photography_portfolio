import Link from "next/link"
export default function NavigationBar() {
    return(
        <footer>
            <div className="flex flex-row items-center justify-between w-dvw h-20">
                <div className="text-[150%] sm:text-[200%] ml-[1.7%] h-[100%] flex justify-start items-center">
                    AFIQ AMJAD
                </div>
                <div className="flex flex-row justify-end items-center grow h-[100%]">
                    <Link href="/" className="text-[100%] sm:text-[150%] mx-3">Home</Link>
                    <Link href="/people" className="text-[100%] sm:text-[150%] mx-3">People</Link>
                    <Link href="/landscape" className="text-[100%] sm:text-[150%] ml-3 mr-[1.9%]">Landscape</Link>
                </div>
            </div>
        </footer>
    )
}