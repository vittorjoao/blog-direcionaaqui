import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Script type="text/javascript" src="/static/theme.js" />
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex items-center">
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              DA!
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-900 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5 mr-1"
            >
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className="text-gray-900 dark:text-gray-500"
              />
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-gray-900 dark:text-gray-500"
                />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-500 dark:hover:bg-gray-700 dark:focus:ring-gray-600 p-2.5"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                className="text-gray-900 dark:text-gray-500"
              />
            </button>
            <button
              id="theme-toggle"
              type="button"
              className="text-gray-900 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5 md:ms-2"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
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
                  className="text-gray-900 dark:text-gray-500"
                />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar..."
              />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pl-3 pr-4 text-gray-900 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${
                    router.pathname === "/"
                      ? "md:text-blue-700  md:dark:text-blue-500"
                      : null
                  }`}
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`block py-2 pl-3 pr-4 text-gray-900 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${
                    String(router.pathname).includes("/blog") ||
                    router.pathname === "/blog"
                      ? "md:text-blue-700  md:dark:text-blue-500"
                      : null
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 pl-3 pr-4 text-gray-900 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${
                    router.pathname === "/about"
                      ? "md:text-blue-700  md:dark:text-blue-500"
                      : null
                  }`}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 pl-3 pr-4 text-gray-900 dark:text-white md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${
                    router.pathname === "/contact"
                      ? "md:text-blue-700  md:dark:text-blue-500"
                      : null
                  }`}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="container p-8">{children}</main>
    </>
  );
};

export default Layout;
