import { ReactNode } from "react";
import { Bounce, ToastContainer } from "react-toastify";

const ToastifyContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      {children}
    </section>
  );
};

export default ToastifyContainer;
