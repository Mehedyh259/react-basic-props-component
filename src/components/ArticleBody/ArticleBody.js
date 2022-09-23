import React from 'react';
import Description from '../Description/Description';

const ArticleBody = ({ header, description }) => {

    return (
        <div>
            <div style={{ border: "2px solid blue" }} className="body">
                <h5>{header}</h5>
                <Description description={description} />
            </div>
        </div>
    );
};

export default ArticleBody;