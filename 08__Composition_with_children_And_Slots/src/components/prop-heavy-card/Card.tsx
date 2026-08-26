type CardProps = {
  title: string;
  description: string;

  showIcon?: boolean;
  icon?: string;

  showAction?: boolean;
  actionLabel?: string;

  showFooter?: boolean;
  footerText?: string;

  isWarning?: boolean;
};

export function Card({
  title,
  description,
  showIcon,
  icon,
  showAction,
  actionLabel,
  showFooter,
  footerText,
  isWarning,
}: CardProps) {
  return (
    <div className="card">
      <div>
        {showIcon && <span>{icon}</span>}

        <h2>{title}</h2>
      </div>

      <p>{description}</p>

      {isWarning && <p>Please review this carefully.</p>}

      {showAction && (
        <button>
          {actionLabel}
        </button>
      )}

      {showFooter && (
        <footer>
          {footerText}
        </footer>
      )}
    </div>
  );
}