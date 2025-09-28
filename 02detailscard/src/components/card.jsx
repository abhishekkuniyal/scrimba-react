export default function Card(props) {
  return (
    <div className="flex justify-center items-center max-w-2xl mx-auto mt-25">
      <div className="border-2  rounded-2xl flex flex-col p-5 text-black font-inter justify-center items-center space-y-1 bg-gradient-to-br from-sky-100 to-gray-400 border-sky-600 capitalize">
        <img
          src={props.img}
          className="rounded-full h-35 w-35 object-cover border-dotted border-4 border-b-white border-r-green-600 border-t-amber-600 border-l-blue-800 shadow-[0px_0px_10px_5px] shadow-gray-900 mt-2"
        />
        <h1 className="font-inter font-extrabold text-xl text-black stroke-5 stroke-black mt-2">
          {props.name}
        </h1>
        <h3 className="font-pangolin tracking-widest text-emerald-600 text-lg font-bold">
          {props.role}
        </h3>
        <h5 className="font-rubik font-semibold text-lg text-blue-800 border-b-2 border-blue-600">
          About
        </h5>
        <p className="max-w-xl w-60 border-1 rounded-xl p-2 text-center text-md font-script text-amber-700 mt-4">
          {props.about}
        </p>
      </div>
    </div>
  );
}
