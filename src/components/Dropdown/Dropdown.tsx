import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import arrow from "./arrow-down-black.png";
import styles from "./Dropdown.module.scss";

export const Dropdown = ({
  label,
  disabled,
  items,
  selected,
  onSelect,
}: {
  label?: string;
  disabled?: boolean;
  items: { id: string; label: string }[];
  selected: string;
  onSelect: (selected: string) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectedItem = items.find((i) => i.id === selected);

  useEffect(() => {
    const onWindowClick = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", onWindowClick);

    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, [isOpen]);

  return (
    <div>
      {label && <span className={styles.Label}>{label}</span>}
      <div ref={ref} className={styles.Container}>
        <div
          className={classNames(styles.SelectedItem, {
            [styles.Active]: isOpen,
            [styles.Disabled]: disabled,
          })}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <span>{selectedItem?.label}</span>
          <img className={styles.Arrow} src={arrow} width={16} height={16} />
        </div>
        {isOpen && (
          <div className={styles.Items}>
            {items.map((item) => {
              const isActive = item.id === selected;

              return (
                <div
                  key={item.id}
                  className={classNames(styles.Item, {
                    [styles.Active]: isActive,
                  })}
                  onClick={() => {
                    onSelect(item.id);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
