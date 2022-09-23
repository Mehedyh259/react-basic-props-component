import React from 'react';
import ArticleBody from '../ArticleBody/ArticleBody';

const Article = ({ data }) => {

    return (
        <div style={{ border: "2px solid red" }} className="article">
            <h3> {data.title}</h3>
            <ArticleBody header={data.bodyHeader} description={data.description} />
        </div>
    );
};

export default Article;