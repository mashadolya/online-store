import { Slide, toast } from 'react-toastify';

enum ToastTypes {
  Error = 'error',
  Success = 'success',
}

export const toggleToast = (message: string, type: ToastTypes) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
    transition: Slide,
  });
};

toggleToast.error = (message: string) => toggleToast(message, ToastTypes.Error);
