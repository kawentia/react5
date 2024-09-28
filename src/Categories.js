// import React from 'react';



// const Categories = ({ categories, filterItems }) => {
//   return (
//     <div className="btn-container">
//       <button className="filter-btn" onClick={() => filterItems("all")}>
//         ALL
//       </button>
//       <button className="filter-btn" onClick={() => filterItems("breakfast")}>
//         breakfast
//       </button>
//       <button className="filter-btn" onClick={() => filterItems("lunch")}>
//         lunch
//       </button>
//       <button className="filter-btn" onClick={() => filterItems("shakes")}>
//         shakes
//       </button>


//       {categories.map((category, index) => {
//         return (
//           <button
//             type="button"
//             className="filter-btn"
//             key={index}
//             onClick={() => filterItems(category)}
//           >
//             {category}
//           </button>
//         );
//       })}
//     </div>
//   );
// };



// export default Categories;
import React from 'react';

// Компонент для відображення кнопок категорій
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* Динамічно створюємо кнопки для кожної категорії */}
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)} // Викликаємо фільтрацію при кліку
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
