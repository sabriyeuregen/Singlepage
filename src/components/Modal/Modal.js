import style from "./Modal.module.css";
const Modal = (props) => {
    const closeModal=props.closeModal;
  return (
    <div className={style.modal}>
       <div className={style.modal__content}>
      <div className={style.modal__title}>Giriş Başarılı!!</div>
      <button className={style.modal__close} onClick={()=>closeModal(false)}>Close</button>
      </div>
    </div>
  )
}

export default Modal