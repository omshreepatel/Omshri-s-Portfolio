// src/utils/alerts.js
import Swal from 'sweetalert2';

// Toast configuration
const toastConfig = {
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
};

// Default configuration for all alerts
const defaultAlertConfig = {
  timer: 2000,
  showConfirmButton: false,
};

// Success Alert
export const showSuccessAlert = (message, config = {}) => {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: message,
    ...defaultAlertConfig,
    ...config,
  });
};

// Error Alert
export const showErrorAlert = (message, config = {}) => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: message,
    ...defaultAlertConfig,
    ...config,
  });
};

// Error Toast (Added missing export)
export const showErrorToast = (message, config = {}) => {
  Swal.mixin({
    icon: 'error',
    ...toastConfig,
    ...config,
  }).fire(message);
};

// Confirmation Dialog for Delete
export const showConfirmDialog = async (message, config = {}) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!',
    cancelButtonText: 'No',
    ...config,
  });

  return result.isConfirmed;
};