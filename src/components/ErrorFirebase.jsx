import { useAppSelector } from "../store";
export default function ErrorFirebase() {
  const { code } = useAppSelector((state) => state.error);
  return (
    <strong className="invalid">
      {code ? code.replace("auth/", "").toUpperCase() : ""}
    </strong>
  );
}
