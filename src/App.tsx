import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logoMoovin from './logo.svg';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
import './table.scss';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://gorest.co.in/public-api/posts');
      //  console.log(res.data.data);
      setPosts(res.data.data);
      setTimeout(function () {
        setLoading(false);
      }, 1500);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <main>
      <section>
        <header className="App">
          <img alt="Logo da Moovin" src={logoMoovin} />
        </header>
        <article>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </article>
      </section>
    </main>
  );
};
export default App;
