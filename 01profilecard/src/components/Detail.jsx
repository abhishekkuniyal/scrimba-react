export default function Details(){
    return (
        <div className="font-inter flex flex-col justify-center items-center text-white leading-2 ">
            <h1 className="font-semibold font-rubik mt-2 text-xl p-1">Abhishek Kuniyal</h1>
            <p className="p-1 font-medium text-sky-400 text-md">Full Stack Developer</p>
            <a href="#" className="text-gray-300 p-2 text-sm">ark.me</a>

            <div className="space-x-5 mt-2">
                <a className="bg-neutral-500 px-4 py-2 rounded-md font-bold text-sm tracking-wider " href="mailto:arkkuniyal@gmail.com"><i class="fa-solid fa-envelope text-black mr-1 "></i>    Email</a>
                <a className="px-3 py-2 rounded-md font-bold text-sm bg-sky-700 tracking-wide" href="#"><i class="fa-brands fa-linkedin mr-1"></i>LinkedIn</a>
            </div>
        </div>
    )
}