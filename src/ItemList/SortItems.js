import { useState } from "react";

const SortItems = ({
  list,
  setList
}) => {

  const [sortKind, setSortKind] = useState('');
  const [openSortKind, setOpenSortKind] = useState(false);
  const [subtab, setSubtab] = useState(false);
  const [howsort, setHowSort] =useState('asc'); 

const sort = () => {
  const sortedList = list.sort((a, b) => {
    if (!sortKind || !howsort) {
      return 0;
    }
    if (howsort === 'asc') {        
      if (sortKind) {
        if (a[sortKind] === b[sortKind]) return 0;
        return a[sortKind] > b[sortKind] ? 1 : -1;
      }
    } else {
      if (a[sortKind] === b[sortKind]) return 0;
      return a[sortKind] > b[sortKind] ? -1 : 1;        
    }
  });
  setList(sortedList); 

  
}

  


  return (
    <select
      onClick={() => setOpenSortKind(true)}
      onChange={(e) => setSortKind(e.target.value)}
    >
      <option value="asc">오름차순</option>
      <option value="desc">내림차순</option>
    </select>
  );
}
export default SortItems;