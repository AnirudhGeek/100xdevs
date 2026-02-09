import type { PropsWithChildren, ReactNode } from "react";

type PanelProps = {
  title: string;
  children?: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <div>
      <h1>{title}</h1>
      <section>{children ?? <p>No childrens are found!</p>}</section>
    </div>
  );
}

interface ExtractFromChildren extends PropsWithChildren {
  title: string;
  children: ReactNode;
}

export function RequiredChildrenPanel({
  title,
  children,
}: ExtractFromChildren) {
  return (
    <div>
      <h1>{title}</h1>
      <section>{children ?? <p>No childrens are found!</p>}</section>
    </div>
  );
}
