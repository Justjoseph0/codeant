
import { data } from "@/data/data";
import RepositoryItem from "./RepositoryItem";

const DashboardContent = () => {
  return (
    <section className="mt-3">
        <ul className="divide-y divide-gray-200 border rounded-b-xl">
          {data.map((item, index) => (
           <RepositoryItem key={index} item={item} />
          ))}
        </ul>
      </section>
  )
}

export default DashboardContent