import React, { useContext } from 'react';
import { NotificationProvider, NotificationContext } from './context/NotificationContext';
import NotificationList from './components/NotificationList';

function Controls() {
  const { markAllAsRead, stopNotifications, startNotifications } = useContext(NotificationContext);

  return (
    <div>
      <button onClick={markAllAsRead} >Mark All as Read</button>
      <button onClick={stopNotifications}>Stop Notifications</button>
      <button onClick={startNotifications}>Start Notifications</button>
    </div>
  );
}

function App() {
  return (
    <NotificationProvider>
      <div className="App">
        <h1>Real-Time Notification Panel</h1>
        <Controls />
        <NotificationList />
      </div>
    </NotificationProvider>
  );
}

export default App;
