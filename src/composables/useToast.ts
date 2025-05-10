import Swal from "sweetalert2";

export const useToast = () => {
  // Create a SweetAlert2 toast configuration
  const toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const showSuccess = (message: string) => {
    toast.fire({
      icon: "success",
      title: message,
    });
  };

  const showError = (message: string) => {
    toast.fire({
      icon: "error",
      title: message,
    });
  };

  return {
    showSuccess,
    showError,
  };
};
