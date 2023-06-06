import './App.css';
import items  from './data'
import Menu from './Menu';
import Category from './Category';
import { useState } from 'react';


const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
     
    }
      const filteredMenuItems = items.filter(item => item.category === category)
      setMenuItems(filteredMenuItems); 
  }
 

  return (
    <>
      <h2 className='top-heading'>Our Menu</h2>
      <Category categories={ categories} filterItems={ filterItems} /> 
      <Menu menuItems={menuItems} /> 
     
    </>
  );
}

export default App;
