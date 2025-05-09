// // src/utils/alerts.js
// import Swal from 'sweetalert2';

// // Default configuration for all alerts
// const defaultAlertConfig = {
//   timer: 2000,
//   showConfirmButton: false,
// };

// // Success Alert
// export const showSuccessAlert = (message, config = {}) => {
//   Swal.fire({
//     icon: 'success',
//     title: 'Success!',
//     text: message,
//     ...defaultAlertConfig,
//     ...config, // Custom config for specific alert
//   });
// };

// // Error Alert
// export const showErrorAlert = (message, config = {}) => {
//   Swal.fire({
//     icon: 'error',
//     title: 'Error!',
//     text: message,
//     ...defaultAlertConfig,
//     ...config, // Custom config for specific alert
//   });
// };

// // Confirmation Dialog for Delete
// export const showConfirmDialog = async (message, config = {}) => {
//   const result = await Swal.fire({
//     title: 'Are you sure?',
//     text: message,
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Yes!',
//     cancelButtonText: 'No',
//     ...config, // Custom config for specific confirmation
//   });

//   return result.isConfirmed;
// };

// src/utils/alerts.js
import Swal from 'sweetalert2';

// Toast configuration
const toastConfig = {
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
};

// Success Alert
export const showSuccessAlert = (message, config = {}) => {
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: message,
    ...toastConfig,
    ...config
  });
};

// Error Alert (Full Page)
export const showErrorAlert = (message, config = {}) => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: message,
    timer: 2000,
    showConfirmButton: false,
    ...config
  });
};

// Error Toast (Small Notification)
export const showErrorToast = (message, config = {}) => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: message,
    ...toastConfig,
    ...config
  });
};

// Confirmation Dialog
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
    ...config
  });
  return result.isConfirmed;
};