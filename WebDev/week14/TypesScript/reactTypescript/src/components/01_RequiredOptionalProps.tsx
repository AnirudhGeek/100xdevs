import type { ReactNode } from "react";

interface UserCardProps {
  id: string;
  name?: string;
  subtitle?: ReactNode;
}

export function UserCard({ id, name, subtitle }: UserCardProps) {
  const displayName = name ?? "Guest";

  return (
    <div>
      <div>#{id}</div>
      <strong>{displayName}</strong>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
