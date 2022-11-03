import React, { useState, useEffect, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import axios from "axios"

const ScrollEvent = () => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const [ref, inView] = useInView() 

//   useEffect(() => {
//   const getItems = useCallback(async () => {
//     setLoading(true);
//       const response = await MiniApi.itemInfo(page);
//       setItemInfo(response.data);
//     })
//     setLoading(false);
// });
}
export default ScrollEvent;