import React from "react";
import Collapsible from "react-collapsible";

type ExpandableProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  set: (val: string | null) => void;
  align: "left" | "right";
};

export const Expandable: React.FC<ExpandableProps> = ({
  isOpen,
  title,
  description,
  set,
  align,
}) => {
  const isActive = !!description;
  return (
    <Collapsible
      className={`collapsible ${isActive ? "active" : "inactive"}`}
      trigger={
        isActive
          ? `${align === "left" ? (isOpen ? "- " : "+ ") : ""} ${title} ${
              align === "right" ? (isOpen ? "-" : "+") : ""
            }`
          : title
      }
      handleTriggerClick={() => {
        if (isActive) {
          if (isOpen) {
            set(null);
          } else {
            set(title);
          }
        }
      }}
      open={isOpen}
      transitionTime={250}
    >
      <p className="desc">{description}</p>
    </Collapsible>
  );
};
