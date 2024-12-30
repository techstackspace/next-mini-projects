"use client";

import { useEffect } from 'react';
import { useDropdown } from '@/hooks/useDropdown';
import { useDropdownContext } from './context';
import { cn } from '@/lib/utils';

interface DropdownProps {
  id: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Dropdown({ id, trigger, children, className }: DropdownProps) {
  const { activeDropdown, setActiveDropdown } = useDropdownContext();
  const { isOpen, setIsOpen, handleClose } = useDropdown({
    id,
    onClose: () => setActiveDropdown(null),
  });

  useEffect(() => {
    if (activeDropdown && activeDropdown !== id) {
      setIsOpen(false);
    }
  }, [activeDropdown, id, setIsOpen]);

  const handleClick = () => {
    if (!isOpen) {
      setActiveDropdown(id);
      setIsOpen(true);
    } else {
      setActiveDropdown(null);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block">
      <div
        id={`dropdown-trigger-${id}`}
        onClick={handleClick}
        className="cursor-pointer"
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          id={`dropdown-${id}`}
          className={cn(
            "absolute z-50 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5",
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}