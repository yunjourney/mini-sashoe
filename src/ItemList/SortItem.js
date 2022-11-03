import { useEffect, useState } from "react";
import styled from "styled-components";
import MiniApi from "../api/MiniApi";

const SortStyleBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  select {
    width: 120px;
    padding: .8em .5em;
    border: 1px solid #eee;
  }
`;

const SortItem = ({sort, setSort}) => {
  // const getSortList = window.localStorage.getItem("sortByNewDate");
   //const [sortCondition, setSortCondition] = useState();
  
  // useEffect(() => {
  //     const sortItemData = async () => {
  //       try {
  //           const response = await MiniApi.itemInfo(sortCondition); 
  //           setSortData(response.data);
  //           console.log(response.data);
  //       } catch (e) {
  //           console.log(e);
  //       }
  //     };
  //     sortItemData();
  // }, []);

  const onChangeNewDate = () => {
    setSort("NEW_DATE");
  }

  const onChangeLowPrice = () => {
    setSort("LOW_PRICE");
  }
  
  const onChangeHighPrice = () => {
    setSort("HIGH_PRICE");
  }

  // const onChangeLike = (sortData) => {
  //   sortData.sort((a, b) => a - b);
  //   setSortData("sortByLike");
  // }

  return (
    <SortStyleBlock>
      <select>
        <option value={sort} onChange={onChangeNewDate}>최신 발매순</option>
        <option value={sort} onChange={onChangeLowPrice}>낮은 가격순</option>
        <option value={sort} onChange={onChangeHighPrice}>높은 가격순</option>
        {/* <option value="sortByLike" onChange={onChangeLike}>관심 많은순</option> */}
      </select>
    </SortStyleBlock>
);
}
export default SortItem;



    // <SortStyleBlock>
    //   <select>
    //     <option key={sortData} value={sortData} onChange={onChangeNewDate}>최신 발매순</option>
    //     <option key={sortData} value={sortData} onChange={onChangeLowPrice}>낮은 가격순</option>
    //     <option key={sortData} value={sortData} onChange={onChangeHighPrice}>높은 가격순</option>
    //     {/* <option value="sortByLike" onChange={onChangeLike}>관심 많은순</option> */}
    //   </select>
    // </SortStyleBlock>

    // <SortStyleBlock>
    //   {sortData && sortData.map(() => (
    //   <select>
    //       <option value="sortByNewDate" onChange={onChangeNewDate}>최신 발매순</option>
    //       <option value="sortByLowPrice" onChange={onChangeLowPrice}>낮은 가격순</option>
    //       <option value="sortByHighPrice" onChange={onChangeHighPrice}>높은 가격순</option>
    //       {/* <option value="sortByLike" onChange={onChangeLike}>관심 많은순</option> */}
    //   </select>
    // ))}
    // </SortStyleBlock>


// const SortItem = ({ launDate, sort, setSort }) => {
  
//   const sortItemList = () => {
//     return launDate.map((item, idx) => (
//       <div 
//         key={idx}
//         className={item.value}
//         onClick={() => {
//           setSort(item.value);
//         }}
//       >
//         {item.value}
//       </div>
//     ));
//   };

//   return (
//     <SortStyleBlock>
//       <div className="sort-list">{sortItemList()}</div>
//     </SortStyleBlock>
//   );
// };
// export default SortItem;