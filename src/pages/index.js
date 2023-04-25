import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container h-screen mx-auto px-32 font-sans">
      <div className="flex flex-row gap-4 pt-12">
        <div className="flex flex-row items-center gap-2 basis-2/12 p-1">
          <span className="text-center font-semibold">
            Blog Direciona Aqui!
          </span>
        </div>
        <div className="flex flex-row items-center justify-start gap-16 basis-6/12 py-1 px-8">
          <div className="p-1">
            <Link href="/">Link 1</Link>
          </div>
          <div className="p-1">
            <Link href="/">Link 2</Link>
          </div>
          <div className="p-1">
            <Link href="/">Link 3</Link>
          </div>
          <div className="font p-1">
            <Link href="/">Link 4</Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center basis-3/12 p-1">
          <input
            type="text"
            placeholder="Buscar"
            className="bg-[#1F2937] py-1 px-6 rounded-[100px] h-10 w-full"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-12 h-96 cursor-pointer hover:scale-105 transform transition duration-500">
        <Image
          src="https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ"
          alt="post destaque"
          className="rounded-xl"
        />
        <div className="flex flex-col justify-center gap-3 py-4 px-2 w-full">
          <span className="font-light text-sm">
            Categoria Teste - Abril 25, 2023
          </span>
          <span className="font-semibold text-lg">
            Título aleatório do post sobre alguma coisa aleatória
          </span>
          <span className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
          <div className="flex flex-row gap-1 mt-3">
            <img
              src="https://i.pravatar.cc/300"
              alt="autor"
              className="shadow-md w-12 h-12 rounded-full"
            />
            <div className="flex flex-col justify-center">
              <span className="text-sm">Jack Bundao</span>
              <span className="text-xs text-gray-400">Desenvolvedor</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
