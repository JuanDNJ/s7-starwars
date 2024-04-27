import { useAppSelector } from "../store";
export default function ErrorFirebase() {
  const { code } = useAppSelector((state) => state.error);
  return (
    <strong className="text-orange-400 text-[12px] text-center absolute -top-16 md:-top-0 w-full invalid">
      {code ? code.replace("auth/", "").toUpperCase() : ""}
    </strong>
  );
}
