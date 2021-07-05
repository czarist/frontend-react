import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="wrap fx fx-center fx-cl loading-open">
        <h2>Carregando...</h2>
        <div className="loadingio-spinner-ellipsis-0i1wl0219w6">
          <div className="ldio-735vs5d14sl">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  let i = 0;

  return (
    <div className="wrap fx fx-center">
      <div className="external-content">
        <h4>Últimas postagens</h4>
        <div className="posts">
          <div
            className="table-container"
            role="table"
            aria-label="Destinations"
          >
            <div className="flex-table header" role="rowgroup">
              <div className="flex-row first header" role="columnheader">
                <b>Título</b>
              </div>
              <div className="flex-cell header" role="columnheader">
                <b>Conteúdo</b>
              </div>
            </div>
            {posts.map(
              (post) => (
                ++i,
                (
                  <div key={post.id} className="flex-table row" role="rowgroup">
                    <div className="flex-row first bg-white" role="cell">
                      {post.title}
                    </div>
                    <div className="flex-cell" role="cell">
                      {post.body}
                    </div>
                  </div>
                )
              ),
            )}
          </div>
        </div>
        <p>Exibindo {i} postagens</p>
      </div>
    </div>
  );
};

export default Posts;
