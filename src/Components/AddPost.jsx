export default function AddPost() {
  return (
    <form className="grid grid-cols-2 items-center justify-center justify-items-center gap-2 bg-red-100 py-3 dark:bg-blue-900 sm:flex">
      <input
        type="text"
        placeholder="Post title"
        className="md:w-46 w-max rounded-lg border border-orange-400 py-2 pl-2 text-xs shadow-md focus:outline-cyan-500 dark:bg-gray-300 xs:text-base sm:w-40 sm:py-4 sm:text-sm md:text-lg lg:text-lg xl:w-96"
      />
      <textarea
        type="text"
        rows="1"
        placeholder="Post body"
        className="max-h-32 min-h-10 w-max rounded-lg border border-orange-400 py-2 pl-2 text-sm shadow-md focus:outline-cyan-500 dark:bg-gray-300 sm:min-h-14 sm:w-80 sm:py-4 sm:text-sm md:w-[28rem] xl:w-[46rem]"
      />
      <div className="col-span-2 w-max text-center sm:col-span-1">
        <button className="font-simobold w-max rounded-md bg-blue-600 px-2 py-1 text-xs text-teal-50 dark:bg-blue-800 sm:py-4 sm:text-base">
          ADD POST
        </button>
      </div>
    </form>
  );
}
