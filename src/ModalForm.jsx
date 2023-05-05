import LoginForm from "./LoginForm";

function ModalForm({ refName, onLogin }) {
  
  return (
    <dialog className="dialog" ref={refName}>
      <LoginForm refName={refName} onLogin={onLogin}></LoginForm>
    </dialog>
  );
}
export default ModalForm;
