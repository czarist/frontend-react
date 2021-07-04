import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className=" wrap fx fx-center">
        <h2>Carregando...</h2>
      </div>
    );
  }
  let i = 0;

  return (
    <div className="wrap fx fx-center">
      <div className="external-content">
        <h4>Últimas postagens</h4>
        <div className="posts">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Conteúdo</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(
                (post) => (
                  ++i,
                  (
                    <tr key={post.id}>
                      <td>{post.title}</td>
                      <td>{post.body}</td>
                    </tr>
                  )
                ),
              )}
              <p>Exibindo {i} postagens</p>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Posts;
