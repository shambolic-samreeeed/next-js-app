import Link from "next/link";

export default function Navbar (){
    return(
        <div className="flex justify-between items-center p-6 shadow-lg ">

            <div>
                <h1>Logo</h1>
            </div>

            <div>
            <Link href='/' className="h-8 w-1/3 text-center text-black m-2 p-2 hover:font-bold">Home</Link> 
            <Link href='/about' className="h-8 w-1/3 text-center text-black m-2 p-2 hover:font-bold">About</Link>
            <Link href='/contact-us' className="h-8 w-1/3 text-center text-black m-2 p-2 hover:font-bold">Contact Us</Link>
            <Link href='/counter' className="h-8 w-1/3 text-center text-black m-2 p-2 hover:font-bold">Counter</Link>
            <Link href='/form' className="h-8 w-1/3 text-center text-black m-2 p-2 hover:font-bold">Form</Link>
            </div>
        </div>
    )
}