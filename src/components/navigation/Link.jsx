export default function Link({ to, navigate, children, className, onNavigate, ...props }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
        onNavigate?.();
      }}
      {...props}
    >
      {children}
    </a>
  );
}
