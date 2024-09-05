import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { faker } from "@faker-js/faker";
import Main from "./Components/Main";
import AddPost from "./Components/AddPost";
import { useState } from "react";
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

export default function App() {
  const [theme, setTheme] = useState(false);
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost()),
  );
  function handleTheme() {
    setTheme((prev) => !prev);
  }
  function clearPost() {
    setPosts([]);
  }
  return (
    <div
      className={`grid h-screen ${theme ? "dark" : ""} grid-rows-[auto_auto_1fr_auto] overflow-hidden bg-pink-50`}
    >
      <Header posts={posts} onTheme={handleTheme} onClearPost={clearPost} />
      <AddPost />
      <Main posts={posts} />

      <Footer />
    </div>
  );
}
