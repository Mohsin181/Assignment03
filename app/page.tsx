import Link from "next/link";


export default function home ()
{
  return (

    <div>
      <ul ></ul>
<div className="text-center bg-gray-200 text-blue-400"><Link href="/about">about</Link></div>
<div className="text-center bg-green-200 text-yellow-600"><Link href="/contact">contact</Link></div>
<div className="text-center bg-blue-200 text-red-500"><Link href="/about">navbar</Link></div>
<div className="text-center bg-yellow-200 "><Link href="/footer">footer</Link></div>

    </div>
   

 
  )
}




