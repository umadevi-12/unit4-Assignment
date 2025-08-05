import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';
import './NotificationList.css';

const NotificationList = () => {
  const { notifications } = useContext(NotificationContext);

  if (notifications.length === 0) {
    return <p>No notifications yet.</p>;
  }

  return (
    <ul className="notification-list">
      {notifications.map(({ id, message, read }) => (
        <li key={id} className={read ? 'read' : 'unread'}>
          {message}
        </li>
      ))}
    </ul>
  );
};

export default NotificationList;
