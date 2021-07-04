import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="fx fx-center wrap">
      <nav>
        <div className="pagination fx">
          {pageNumbers.map((number) => (
            <div key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
