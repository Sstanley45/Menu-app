import React from 'react'

const Menu = ({menuItems}) => {
    
    const allMenuItems = menuItems.map(item => {
        return (
          <div className="menu-div" key={item.id}>
            <img className="menu-img" src={item.img} alt="" />
            <div className="title-price-div">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
            <div className="desc-text">{item.desc}</div>
          </div>
        );
    })
    return <main className='main-menu'>
      {allMenuItems}
  </main>;
};

export default Menu