import { Box, Text, View } from "native-base";
import React,{useEffect,useState} from "react";
import Colors from "../color";
import HomeProducts from "../Components/Home/HomeProducts";
import HomeSearch from "../Components/Home/HomeSearch";

export default function HomeScreen() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  useEffect(()=>{
    fetch("http://192.168.8.198:5000/product/getProducts",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({})
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.products);
      })
      .catch((e) => {
        console.log(e)
        setError(e);
      })
      .finally(() => {
      });
  },[])
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch product={product} setProduct={setProduct}/>
      <HomeProducts product={product}/>
    </Box>
  );
}
