"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [error, setError] = useState<boolean>(false)
  const [products, setProducts] = useState<[] | null>([])
  const params = useSearchParams()
  const query = params.get("query")


  useEffect(
    () => {
      const getFilteredSearch = async () => {
        const request = await fetch("API_ENDPOINT", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET"
        })

        if (request.status != 200) {
          setError(true)
          return
        }

        setProducts(await request.json() as [])
        return

      }
      getFilteredSearch()
    }, [query]
  )


  return (
    <section>
      {
        products
          ? products.map(product => {
            {/* Here I must use a product card */ }
            return <></>
          })
          : <p>No Procucts with that name found</p>

      }

      {
        error
          ? <p>{error}</p>
          : null
      }
    </section>
  )
}

export default SearchPage;
