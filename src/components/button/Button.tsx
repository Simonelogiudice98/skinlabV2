import styles from "./button.module.scss";

export type ButtonVariant = "primary" | "secondary";
export type ButtonTone = "default" | "onDark";

type Props = React.ComponentPropsWithoutRef<"a"> & {
  /** Filled for the page's leading action, outline for secondary positions. */
  variant?: ButtonVariant;
  /** `onDark` re-anchors both variants for the Roman Coffee band. */
  tone?: ButtonTone;
  icon?: React.ReactNode;
};

const Button: React.FC<Props> = ({
  variant = "primary",
  tone = "default",
  icon,
  children,
  className,
  ...rest
}) => {
  const classes = [styles.button, styles[variant]];
  if (tone === "onDark") classes.push(styles.onDark);
  if (className) classes.push(className);

  return (
    <a className={classes.join(" ")} {...rest}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </a>
  );
};

export default Button;
