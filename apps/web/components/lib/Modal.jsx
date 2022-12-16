export const Modal = ({ close, isOpen, children }) => {
  const addEventModalClass = isOpen ? "modal modal-open" : "modal";
  return (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div className={addEventModalClass}>
        <div
          className="modal-box"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
