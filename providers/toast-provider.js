import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-center" // نمایش در بالا و وسط صفحه
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false} 
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "left",
        width: "300px",
        left: "50%", 
        transform: "translateX(-50%)", 
        top: "1rem",
      }}
    />
  );
}
