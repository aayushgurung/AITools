import React, { useState, useCallback, useEffect } from 'react';

interface ErrorComponentProps {
  error: string | null;
  onClose: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error, onClose }) => {
  const [visible, setVisible] = useState<boolean>(true);
    const autoCloseTime=5000;
  const handleClose = useCallback(() => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  useEffect(() => {
    if (autoCloseTime && autoCloseTime > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseTime);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [autoCloseTime, onClose]);

  return (
    visible && error ? (
      <div className="bg-red-500 text-white pt-2 pb-2 pl-4 pr-4 z-10 rounded-lg shadow-lg fixed top-10 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold">Error</div>
          <button
            className="text-white hover:text-gray-200 focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <p className="">{error}</p>
      </div>
    ) : null
  );
};

export default ErrorComponent;
