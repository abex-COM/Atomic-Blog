export default function Main({ posts }) {
  if (posts)
    return (
      <div className="dark:bg-slate-900 flex justify-center overflow-auto">
        {posts.length ? (
          <ul className="grid w-full grid-cols-2 gap-2 p-2 text-xs xs:grid-cols-2 xs:text-base sm:grid-cols-3 md:grid-cols-4 md:text-lg lg:grid-cols-5 lg:text-xl xl:grid-cols-6">
            {posts.map((post, index) => (
              <PostList key={index} post={post} />
            ))}
          </ul>
        ) : (
          <h1 className="dark:text-slate-300">No data found</h1>
        )}
      </div>
    );
}

function PostList({ post }) {
  return (
    <li className="dark:bg-slate-800 dark:text-slate-300 flex h-32 flex-col rounded-md bg-slate-200 p-1 text-center md:h-auto">
      <h1 className="dark:text-sky-400 font-mono font-bold capitalize text-green-600">
        {post.title}
      </h1>
      <p className="text-pretty text-center font-thin normal-case xs:text-sm md:text-base">
        {post.body}
      </p>
    </li>
  );
}
