export default function Header({ posts, onTheme, onClearPost, onChange,query }) {
  return (
    <nav className="flex w-full flex-col bg-yellow-600 py-3 text-xs shadow-md dark:bg-slate-900 sm:flex-row sm:pl-10">
      <h1 className="m-auto text-sm font-bold text-sky-500 dark:text-slate-200 xs:text-base md:text-lg lg:text-2xl xl:text-4xl">
        🔯The Atomic Blog
      </h1>
      <Theme onTheme={onTheme} />

      <PostFound posts={posts} />

      <div className="flex justify-end gap-3 px-3">
        <SearchInput onChange={onChange} query={query} />
        <ClearPost onClearPost={onClearPost} />
      </div>
    </nav>
  );
}

function PostFound({ posts }) {
  return (
    <p className="m-auto text-xs font-semibold text-blue-700 dark:text-slate-300 xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl">
      <span className="font-mono text-green-600">{posts.length}</span> atomic
      post found
    </p>
  );
}
function SearchInput({ onChange,query }) {
  return (
    <div className="flex justify-end">
      <input
      onChange={onChange}
      value={query}
        type="text"
        className="w-max rounded-lg border-none py-1 pl-2 text-xs outline-none dark:bg-slate-600 dark:text-slate-300 xs:text-sm sm:w-32 sm:py-2 sm:text-base lg:text-lg"
        placeholder="Search post.."
      />
    </div>
  );
}
function ClearPost({ onClearPost }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClearPost}
        className="w-max rounded-lg bg-green-600 px-2 py-1 font-mono font-semibold uppercase text-white hover:bg-green-500 dark:bg-blue-800 sm:text-base md:text-lg lg:text-xl"
        type="button"
      >
        Clear post
      </button>
    </div>
  );
}

function Theme({ onTheme }) {
  return (
    <label title="Change theme" className="swap swap-rotate fixed left-2 top-5">
      <input
        type="checkbox"
        className="theme-controller rounded-full"
        value="synthwave "
        onClick={onTheme}
      />

      {/* Sun icon for light mode */}
      <svg
        className="swap-off h-5 w-5 fill-current text-slate-500 sm:h-8 sm:w-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
      </svg>

      {/* Moon icon for dark mode */}
      <svg
        className="swap-on h-5 w-5 fill-current text-blue-500 sm:h-8 sm:w-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
      </svg>
    </label>
  );
}
