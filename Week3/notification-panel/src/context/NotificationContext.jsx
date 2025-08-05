import React, { createContext, useState, useEffect, useRef } from 'react';

export const NotificationContext = createContext();

let notificationId = 0;

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const intervalRef = useRef(null);

  const addNotification = () => {
    const newNotification = {
      id: notificationId++,
      message: "You have a new message",
      read: false,
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const startNotifications = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(addNotification, 5000);
    }
  };

  const stopNotifications = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startNotifications();

    return () => stopNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        markAllAsRead,
        stopNotifications,
        startNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
