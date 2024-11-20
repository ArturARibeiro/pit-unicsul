import {createContext} from "react";

// Types
import type {NotificationContextData} from "./NotificationContext.types";

const NotificationContext = createContext<NotificationContextData>({} as NotificationContextData);

export default NotificationContext;