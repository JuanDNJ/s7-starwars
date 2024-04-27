import { useAppSelector } from "../store";
export default function ErrorFirebase() {
  const { code } = useAppSelector((state) => state.error);
  return (
    <strong className="text-orange-400 text-[12px] text-center absolute  -top-3  w-full invalid">
      {code ? code.toUpperCase() : ""}
    </strong>
  );
}
