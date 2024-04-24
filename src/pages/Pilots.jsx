import { useSearchParams } from "react-router-dom";
export default function Pilots() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  return "pilots" + id;
}
