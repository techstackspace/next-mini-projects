"use client";

import { useState, useEffect, useCallback } from 'react';

interface UseDropdownProps {
  id: string;
  onClose?: () => void;
}

export const useDropdown = ({ id, onClose }: UseDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const dropdown = document.getElementById(`dropdown-${id}`);
      const trigger = document.getElementById(`dropdown-trigger-${id}`);

      if (
        dropdown &&
        trigger &&
        !dropdown.contains(target) &&
        !trigger.contains(target)
      ) {
        handleClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [id, isOpen, handleClose]);

  return {
    isOpen,
    setIsOpen,
    handleClose,
  };
};