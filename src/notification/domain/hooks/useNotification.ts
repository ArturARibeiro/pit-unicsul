import {useContext} from "react";

// Contexts
import NotificationContext from "@modules/notification/domain/contexts/NotificationContext";

const useNotification = () => {
  return useContext(NotificationContext);
}

export default useNotification;