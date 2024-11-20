import {useEffect, useState} from "react";

// Types
import {NotificationProviderProps} from "./NotificationProvider.types";

// Contexts
import NotificationContext from "@modules/notification/domain/contexts/NotificationContext";

const NotificationProvider = (props: NotificationProviderProps) => {
  const [allowed, setAllowed] = useState<boolean>(
    Notification.permission === 'granted'
  );

  const dispatchNotification = (title: string, body: string = '') => {
    if (allowed) {
      try {
        new Notification(title, {
          icon: '/favicon_192.svg',
          body: body,
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  useEffect(() => {
    if (Notification.permission !== 'denied' && Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        setAllowed(permission === 'granted');
      })
    }
  }, [allowed]);

  return <NotificationContext.Provider value={{ dispatchNotification }} {...props}/>
}

export default NotificationProvider;