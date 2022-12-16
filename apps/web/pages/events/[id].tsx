import { useRouter } from "next/router"

export default function EventDetails() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>Event Details: {id}</div>
  )
}