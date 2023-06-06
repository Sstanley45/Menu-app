import React from 'react'

const Category = ({ categories,filterItems }) => {
    const allCategories = categories.map((category, i) => (
      <p key={i} onClick={() => filterItems(category)}>
        {category}
      </p>
    ));
    return <div className='categories-div' >{ allCategories}</div>;
};

export default Category