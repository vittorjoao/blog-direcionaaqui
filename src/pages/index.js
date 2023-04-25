export default function Home() {
  return (
    <main className="container h-screen mx-auto px-32 font-sans">
      <div className="flex flex-row gap-4 pt-12">
        <div className="flex flex-row items-center gap-2 basis-1/12 p-1">
          <div className="bg-[#4B5563] w-9 h-9 p-1 text-center align-middle font-semibold shadow-md hover:scale-125 cursor-pointer">
            <a href="/">DA</a>
          </div>
          <span className="text-center font-semibold">Blog</span>
        </div>
        <div className="flex flex-row items-center justify-start gap-16 basis-8/12 py-1 px-8">
          <div className="p-1">
            <a href="/">Link 1</a>
          </div>
          <div className="p-1">
            <a href="/">Link 2</a>
          </div>
          <div className="p-1">
            <a href="/">Link 3</a>
          </div>
          <div className="font p-1">
            <a href="/">Link 4</a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center basis-3/12 p-1">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-[#1F2937] py-1 px-6 rounded-[100px] h-10 w-80"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-12 h-96">
        <img
          src="https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ"
          alt="teste"
          className="rounded-xl"
        />
        <div className="flex flex-col justify-center gap-3 py-4 px-2 w-full">
          <span className="font-light text-sm">
            Categoria Teste - Abril 25, 2023
          </span>
          <span className="font-semibold text-lg">
            Título aleatório do post sobre alguma coisa aleatória
          </span>
          <span className="font-light text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <div className="flex flex-row gap-4 mt-3">
            <div className="aqua w-12 h-12 rounded-full text-center">
              avatar
            </div>
            <div className="flex flex-col">
              <span className="font-normal">Jack Bundao</span>
              <span className="font-thin font-xs">Desenvolvedor</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
