import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between px-8 py-4">
      <div className="flex basis-2/5 flex-nowrap items-center gap-x-16">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="assets/logo.svg"
            className="h-8 min-h-[32px] min-w-[160px]"
            alt="Codeamica Logo"
          />
        </Link>
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
          <li>
            <Link
              href="#"
              className="font-bold text-[var(--primary-text-color)] underline"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[var(--primary-text-color)] hover:font-bold hover:underline"
            >
              Roadmaps
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-[var(--primary-text-color)] hover:font-bold hover:underline"
            >
              Courses
            </Link>
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
          className="h-[33px] w-full rounded-md border border-[var(--primary-text-color)] px-10 py-1.5 text-sm placeholder-[var(--primary-text-color)]"
          placeholder="What are you looking for?"
        />
      </div>
      {/* <div className="flex items-center gap-6">
        <Link href="" className="font-bold">
          Log in
        </Link>
        <Link
          href=""
          className="max-h-fit rounded-[5px] bg-[var(--primary-text-color)] p-2 font-bold text-[var(--background)] underline"
        >
          Sign up
        </Link>
      </div> */}
      <div className="flex items-center gap-3">
        <img
          src="https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750"
          alt="user-avatar"
          className="h-[25px] w-[25px] rounded-full cursor-pointer"
        />
        <p className="font-bold leading-[23.7px] cursor-pointer">Hieu</p>
        <img src="assets/down-arrow.svg" alt="down-arrow" className="cursor-pointer"/>
      </div>
    </nav>
  );
}
