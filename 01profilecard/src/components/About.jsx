export default function About() {
  return (
    <div className="p-4 w-72">
      <div className=" flex-col   m-2">
        <h1 className="font-inter text-white font-bold">About</h1>
        <p className="text-xs text-gray-400 font-medium font-rubik -tracking-tighter">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks.
        </p>
      </div>

      <div className="flex flex-col  w-55 m-2">
        <h1 className="font-inter text-white font-bold">Interests</h1>
        <p className="text-xs text-gray-400 font-medium font-rubik -tracking-tighter">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
