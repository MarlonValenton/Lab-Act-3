import './Filters.css';

import React from "react";

const FilterButton = ({ category, onClick }) => {
  return (
    <>
    <div className='filters'>
    <button type="button" className="filter-options active" onClick={onClick}>
      All{category}
    </button>
        <button type="button" className="filter-options" onClick={onClick}>
       CSS{category}
      </button>
          <button type="button" className="filter-options" onClick={onClick}>
        Computer {category}
        </button>
        <button type="button" className="filter-options" onClick={onClick}>
        News  {category}
        </button>
        <button type="button" className="filter-options" onClick={onClick}>
         Sports {category}
        </button>
        <button type="button" className="filter-options" onClick={onClick}>
        Trending  {category}
        </button>
        <button type="button" className="filter-options" onClick={onClick}>
         AI {category}
        </button>
        <button type="button" className="filter-options" onClick={onClick}>
         Celebrity {category}
        </button>
        <button type="button" className="filter-options" onClick={onClick}>
         Gaming {category}
        </button>
        <button type="button" className="filter-options" onClick={onClick}>
         Live {category}
        </button>
        </div>
        </>
  );
};


// function Filters(){
// return (
//     <div className="filters">
//         <button className="filter-options active" >all</button>
//         <button className="filter-options">CSS</button>
//         <button className="filter-options">web development</button>
//         <button className="filter-options">python</button>
//         <button className="filter-options">entertainment</button>
//         <button className="filter-options">marvel</button>
//         <button className="filter-options">javascript</button>
//         <button className="filter-options">artificial intelligence</button>
//         <button className="filter-options">machine learning</button>
//         <button className="filter-options">trending</button>
//     </div>
// );
// }




export default FilterButton;