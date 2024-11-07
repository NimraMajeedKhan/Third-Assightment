import Link from "next/link"

Link

 function Navbar(){
    return(
        <ul className="flex gap-20 bg-blue-800 text-white ">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
    )
}
export default Navbar