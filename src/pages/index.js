import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

//https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ
//https://i.pravatar.cc/300

export default function Home() {
  return (
    <main className="container h-screen mx-auto px-6 md:px-16 font-sans">
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              DA! Blog
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <FontAwesomeIcon
                icon={faSearch}
                size="sm"
                className="text-[--whiteop]"
              />
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="sm"
                  className="text-[--whiteop]"
                />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 rounded-lg bg-[#1f2937]"
                placeholder="Buscar..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              <FontAwesomeIcon icon={faBars} size="xl" />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="lg"
                  className="text-[--whiteop]"
                />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 md:p-0"
                  aria-current="page"
                >
                  Início
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 md:p-0">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 md:p-0">
                  Serviços
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Link
        href="#"
        className="hidden md:flex flex-col items-center border border-[#1F2937] rounded-lg shadow-md mt-4 md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="h-96 w-[710px]" style={{ position: "relative" }}>
          <Image
            className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ"
            alt=""
            fill
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal w-[720px]">
          <span className="font-light text-sm">
            Categoria Teste - Abril 25, 2023
          </span>
          <span className="my-2 text-xl font-semibold tracking-tight">
            Título aleatório do post sobre alguma coisa aleatória
          </span>
          <p className="my-2 font-normal text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-row gap-2 mt-3">
            <Image
              src="https://i.pravatar.cc/300"
              alt="autor"
              className="shadow-md rounded-full"
              width={48}
              height={48}
            />
            <div className="flex flex-col justify-center">
              <span className="text-sm">Jack Bundao</span>
              <span className="text-xs text-gray-400">Desenvolvedor</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center mt-4 pb-6 md:hidden">
        <Link href="#">
          <div className="max-w-s border border-[#1F2937] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ"
              alt=""
            />
            <div className="flex flex-col gap-2 p-4">
              <span className="text-xs font-thin">
                Categoria - 27 Abril, 2023
              </span>
              <span className="font-bold tracking-tight">Post 1</span>
              <span className="text-sm text-gray-400 max-h-24 text-ellipsis overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </Link>
        <div className="w-full my-4 px-4">
          <hr className="w-full border-[--whiteop]" />
        </div>
        <Link href="#">
          <div className="max-w-s border border-[#1F2937] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ"
              alt=""
            />
            <div className="flex flex-col gap-2 p-4">
              <span className="text-xs font-thin">
                Categoria - 27 Abril, 2023
              </span>
              <span className="font-bold tracking-tight">Post 2</span>
              <span className="text-sm text-gray-400 max-h-24 text-ellipsis overflow-hidden">
                Descrição do post
              </span>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
