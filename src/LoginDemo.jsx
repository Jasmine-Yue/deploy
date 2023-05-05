import { useState } from "react";
import Button from "./Button";
import { useRef } from "react";
import ModalForm from "./ModalForm";

function LoginDemo({isLoggedIn,username,onLogin,className}) {

  const dialogRef = useRef();



  return (
    <div className={`${className}`}>
      {isLoggedIn ? (
        <>
        <span>User</span>
        <span>{username ? username : "Visitor"}</span>
        </>
      ) : (
        <>
          <Button  visual="link"
            onClick={() => {
              dialogRef.current.showModal();
            }}
          >Login
          </Button>
          <ModalForm
            refName={dialogRef}
            onLogin={onLogin}
          ></ModalForm>
        </>
      )}
    </div>
  );
}

export default LoginDemo;
