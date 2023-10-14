import "./Modal.css";
import { GrClose } from "react-icons/gr";

export function Modal({ modalState, setModalState, tabTitle, children }) {
  //LOGICA
  return (
    <>
      {modalState && (
        <div className="overlay">
          <div className="content">
            <div className="title-content">
              <h3>{tabTitle}</h3>
            </div>
            <button
              className="btn-cerrar"
              onClick={() => {
                setModalState(false);
              }}
            >
              <GrClose />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
