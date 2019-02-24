import React from 'react';

const PageTitle = ({ mainTitle, title, subTitle }) => (
    <>
        <h1>{mainTitle}</h1>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
    </>
);

PageTitle.defaultProps = {
    mainTitle: 'mainTitle',
    title: 'title',
    subTitle: 'subTitle',
};

export default PageTitle;
