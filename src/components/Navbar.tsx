interface INavbar {
    setShowCart: Dispatch<SetStateAction<boolean>>
}
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"
import { useAppSelector } from "@/redux/hooks"
import { Dispatch, SetStateAction } from "react"
const Navbar = ({ setShowCart }: INavbar) => {
    const cartCount = useAppSelector((state) => state.cartReducer.length)


    return (
        <div className=" bg-white py-[14px] sticky top-0 z-10">
            <div className="container flex justify-between items-center">
                <RxHamburgerMenu className="sm:hidden text-[26px]" />
                <Link href="/" className="text-4xl font-semibold hover:text-accent">
                    Logo
                </Link>
                <ul className="gap-6 hidden sm:flex">
                    <Link href="/" className="navLink">
                        Home
                    </Link>
                    <li className="navLink" >Shop</li>
                    <li className="navLink" >Blog</li>
                    <li className="navLink" >Pages</li>
                    <li className="navLink">Contact</li>
                </ul>
                <div className="flex gap-6 text-[26px]">
                    <div className="relative cursor-pointer" onClick={() => setShowCart(true)} >
                        <AiOutlineShoppingCart />
                        <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px]
                    rounded-full text-white text-[14px] grid place-items-center">{cartCount}</div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Navbar
