import type { ReactNode } from "react";

type ReUseableCardProps = {
  header?: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
};

export function ReUseableCard({
  header,
  children,
  actions,
}: ReUseableCardProps) {
  return (
    <div className="card">
      {header && (
        <header>
          {header}
        </header>
      )}

      <div>
        {children}
      </div>


      {actions && ( <div> {actions} </div> )}

    </div>
  );
}