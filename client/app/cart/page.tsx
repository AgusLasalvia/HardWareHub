"use client"

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState<[] | null>(null)
  const router = useRouter()
  useEffect(() => {
    const getCartProducts = async () => {
      const request = await fetch("API_ENDPOINT",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer USER_TOKEN"
          }
        })
      const data = await request.json()
      if (request.status != 200)
        return router.replace(`/error?type=${data.message}`)

      return setCartProducts(data)

    }
  })
  return (
    cartProducts?.length == 0
      ? <h1> Cart Empty</h1>
      : cartProducts?.map(product => {
        // Make a Cart specific List Component
        return <> Product Item</>
      })
  )
}


export default CartPage;
