import React, { useMemo, useState } from "react";

const ExpensiveComponent = ({ items }) => {
  const [filter, setFilter] = useState("");

  // Memoize the filtered items to avoid recalculating on every render
  const filteredItems = useMemo(() => {
    console.log("Filtering items...");
    return items.filter(item => item.includes(filter));
  }, [filter, items]); // Only recompute when `filter` or `items` change

  return (
    <div>
      <input 
        type="text" 
        value={filter} 
        onChange={(e) => setFilter(e.target.value)} 
        placeholder="Filter items" 
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensiveComponent;
