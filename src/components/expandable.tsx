import React from "react";
import Collapsible, { CollapsibleProps } from "react-collapsible";

type ExpandableProps = {
  isOpen: boolean;
  trigger: CollapsibleProps["trigger"];
  description?: string;
  set: () => void;
  unset: () => void;
};

export const Expandable: React.FC<ExpandableProps> = ({
  isOpen,
  trigger,
  description,
  set,
  unset,
}) => {
  const isActive = !!description;
  return (
    <Collapsible
      className={`collapsible ${isActive ? "active" : "inactive"}`}
      trigger={trigger}
      handleTriggerClick={() => {
        if (isActive) {
          if (isOpen) {
            unset();
          } else {
            set();
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
