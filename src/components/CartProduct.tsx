import { removeFromCart } from '@/redux/features/cartSlice'
import { useAppDispatch } from '@/redux/hooks'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'
interface ICartProduct {
    id: number
    img: string
    name: string
    price: string
    quantity: number
}
const CartProduct = ({ id, img, name, price, quantity }: ICartProduct) => {

    const dispatch = useAppDispatch()
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
                <img className="h-[80px]" src={img} alt={name} />
                <div className='space-y-2'>
                    <h3 className='font-medium'>{name}</h3>
                    <p className='text-gray-600 text-[14px]'>
                        {quantity} x ${price}.00
                    </p>
                </div>
            </div>
            <RxCross1 className="cursor-pointer" onClick={() => dispatch(removeFromCart(id))} />
        </div>
    )
}

export default CartProduct