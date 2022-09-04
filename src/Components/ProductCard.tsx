import Image from "next/image"
import add from '../public/add.png'
import product1 from '../public/packshot-audemus-umami-gin.png'
import product2 from '../public/packshot-silent-pool-silent-pool-gin.png'
import product3 from '../public/stockholms-branneri-pink-gin-packshot.png'
import product4 from '../public/packshot-mr-gaston-brandy.png'
import { addProduct } from "src/features/CartSlice"
import { useDispatch } from "react-redux"

// coudnt find a way to add static images without importing them 
const images =[product1, product2, product3, product4]

export type productProp = {
    image:string,
    name:string,
    company:string,
    price:number,
    id:number
  }

export function ProductCard(prop : productProp) {

  const dispatch = useDispatch()

  const handleAddProduct= () => {
    dispatch(addProduct(prop))

  }
  // const imageLink : string = `/images/${prop.image}`
  
  return (
    <div className="flex flex-col shadow-md">
        <div className="bg-productgrey w-full  flex justify-center ">
        <Image src={`/images/${prop.image}`} alt={prop.name} width={300} height={300} objectFit="cover"/>
        </div>
        <div className="px-2 pt-2 flex justify-between">
        <h2 className="font-semibold">{prop.name}</h2>
        <span className="text-producttext">${prop.price}</span>
        </div>
        <div className="p-2 flex justify-between">
        <h2 className="text-md text-red-300">{prop.company}</h2>
        <Image className="cursor-pointer"src={add} alt='add' objectFit="contain" onClick={()=>handleAddProduct()}/>
        </div>
    </div>
  )
}
