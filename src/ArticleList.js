import React from 'react';

const articles = [
    { id: 1, title: "First Article", author: "Author 1" },
    { id: 2, title: "Second Article", author: "Author 2" },
];

const ArticleList = () => {
    return (
        <div className="ArticleList">
            {articles.map((article) => (
                <div className="ArticlePreview" key={article.id}>
                    <h2>{article.title}</h2>
                    <p>Written by {article.author}</p>
                </div>
            ))}
        </div>
    );
}

export default ArticleList;
