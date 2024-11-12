import Logo from "../../../public/assets/logo.svg"
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between px-8 py-6">
      <div className="flex basis-2/5 flex-nowrap items-center gap-x-16">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="assets/logo.svg" className="h-8" alt="Codeamica Logo" />
        </a>
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
          <li>
            <a
              href="#"
              className="font-bold text-[var(--primary-text-color)] underline"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[var(--primary-text-color)] hover:font-bold hover:underline"
            >
              Roadmaps
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[var(--primary-text-color)] hover:font-bold hover:underline"
            >
              Courses
            </a>
          </li>
        </ul>
      </div>
      <div className="relative basis-2/5">
        <img
          src="assets/search.svg"
          alt="search-icon"
          className="absolute left-3 top-2 h-5 w-5"
        />
        <input
          type="text"
          className="h-[33px] w-full rounded-md border border-[var(--primary-text-color)] px-9 py-1.5 text-sm placeholder-[var(--primary-text-color)]"
          placeholder="What are you looking for?"
        />
      </div>
      <div className="flex items-center gap-6">
        <a href="" className="font-bold">
          Log in
        </a>
        <a
          href=""
          className="rounded-[5px] max-h-fit bg-[var(--primary-text-color)] p-2 font-bold text-[var(--background)] underline"
        >
          Sign up
        </a>
      </div>
      {/* <div className="flex items-center gap-3">
        <img
          src="https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750"
          alt="user-avatar"
          className="h-[25px] w-[25px] rounded-full cursor-pointer"
        />
        <p className="font-bold leading-[23.7px] cursor-pointer">Hieu</p>
        <img src="assets/down-arrow.svg" alt="down-arrow" className="cursor-pointer"/>
      </div> */}
    </nav>
  );
}
