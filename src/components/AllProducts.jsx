import ProductCart from "./ProductCart"


const AllProducts = ({myproducts}) => {
  return (
    <div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"space-between", margin:"20px 20px"}}>
        {
          myproducts?.map((item, index)=>(
            <ProductCart data={item} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default AllProducts

