import { CSpinner } from "@coreui/react";
import ChildItem from "./ChildItem";
import { IChild } from "../interfaces/child.interface";
import { useChildren } from "../hooks/useChildren";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export default function ChildList() {
  const { isLoading, error, data } = useChildren();
  const { visibleItems } = useInfiniteScroll<IChild>(data);

  if (isLoading) return <CSpinner />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul>
        {visibleItems?.map((child: IChild, index) => (
          <ChildItem key={index} child={child} />
        ))}
      </ul>
    </div>
  );
}
