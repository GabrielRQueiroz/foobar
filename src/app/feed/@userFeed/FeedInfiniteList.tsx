'use client'

import { getFeed } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"

export const FeedInfiniteList = () => {
   const {data: feedData} = useQuery({
    queryKey: ['feed'],
    queryFn: getFeed
  })
   
  return (
    <div>{feedData ? "carregado" : ""}</div>
  )
}
