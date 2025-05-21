// src/utils/alerts.js
import Swal from 'sweetalert2';

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
    ...config, // Custom config for specific alert
  });
};

// Error Alert
export const showErrorAlert = (message, config = {}) => {
  Swal.fire({
    icon: 'error',
    title: 'Error!',
    text: message,
    ...defaultAlertConfig,
    ...config, // Custom config for specific alert
  });
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
    ...config, // Custom config for specific confirmation
  });

  return result.isConfirmed;
};
