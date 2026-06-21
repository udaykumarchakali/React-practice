import { useEffect,useState } from "react"
const About = () => {
  const [data,setdata]=useState([]);
    useEffect(()=>{
      fetch("https://dummyjson.com/products/category/mens-shoes")
      .then((res)=>res.json())
      .then((data)=>{
        setdata(data.products);
      });
    },[]);
  return (
    <div>About</div>
  )
}

export default About