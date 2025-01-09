import { CSpinner } from "@coreui/react";
import ChildItem from "./ChildItem";
import { Child } from "../types/child";
import { useChildren } from "../hooks/useChildren";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export default function ChildList() {
  const { isLoading, error, data } = useChildren();
  const { visibleItems } = useInfiniteScroll<Child>(data);

  if (isLoading) return <CSpinner />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul>
        {visibleItems?.map((child: Child, index) => (
          <ChildItem key={index} child={child} />
        ))}
      </ul>
    </div>
  );
}
