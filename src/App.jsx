import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { faker } from "@faker-js/faker";
import Main from "./Components/Main";
import AddPost from "./Components/AddPost";
import { useEffect, useState } from "react";
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [query, setQeury] = useState("");

  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost()),
  );
  const [filteredPosts, setFilteredPosts] = useState(posts);

  function handleTheme() {
    setTheme((prev) => !prev);
  }
  function clearPost() {
    setPosts([]);
  }

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const searchedItem =
        posts.length > 0
          ? posts.filter((post) =>
              post.title
                .toLocaleLowerCase()
                .includes(query.toLocaleLowerCase()),
            )
          : posts;
      setFilteredPosts(searchedItem);
    }
  }, [posts, query]);
  function addNewPost(item) {
    setPosts([...posts, item]);
  }
  return (
    <div
      className={`grid h-screen ${theme ? "dark" : ""} grid-rows-[auto_auto_1fr_auto] overflow-hidden bg-pink-50`}
    >
      <Header
        posts={filteredPosts}
        query={query}
        onTheme={handleTheme}
        onChange={(e) => setQeury(e.target.value)}
        onClearPost={clearPost}
      />
      <AddPost onHandleSubmit={addNewPost} />
      <Main posts={filteredPosts} />

      <Footer />
    </div>
  );
}
