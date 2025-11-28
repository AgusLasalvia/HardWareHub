"use client"
import { useSearchParams } from "next/navigation"

const ErrorPage = () => {
  const params = useSearchParams();
  const errorType = params.get("type");

  return (
    <div>
      <h1>{errorType}</h1>
    </div>
  )
}


export default ErrorPage;
