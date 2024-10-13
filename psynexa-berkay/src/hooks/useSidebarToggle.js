import { useState } from 'react';

export const useSidebarToggle = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return [isSidebarVisible, toggleSidebar];
};
