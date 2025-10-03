import { useNavigate } from "react-router-dom"
const ProductCart = ({data, key})=>{
  const navigate =useNavigate()
  const navhandler=(id)=>{
    navigate(`/product/${id}`)
  }

  return (
     <div onClick={()=>navhandler(data.id)} key={key} className="product-cart">
      <img src={data.image}/>
      <h3>name</h3>
    </div>
  )
}

export default ProductCart