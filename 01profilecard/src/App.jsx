import Details from "./components/Detail"
import  {Header}  from "./components/Header"
import About from "./components/About"
import Social from "./components/Social"



export default function App(){
  return (
   <div className="max-w-2xl h-screen flex justify-center items-center  mx-auto capitalize">
    <div className="h-140 w-70 border-1 border-gray-700 rounded-xl overflow-hidden ">
    <Header/>
    <Details/>
    <About/>
    <Social/>
    </div>
   </div>
  )
}