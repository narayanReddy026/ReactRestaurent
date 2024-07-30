import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export default function Modal({ children, open, className = "" }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      const modal = dialog.current;
      modal.showModal();
    }
    return () => dialog.current.close();
  }, [open]);
  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {" "}
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
