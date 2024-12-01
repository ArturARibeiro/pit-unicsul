import {useCallback, useEffect, useState} from "react";

// Types
import type {Notification, NotificationProviderProps, ServerSentEventData} from "./NotificationProvider.types";

// Contexts
import NotificationContext from "@modules/notification/domain/contexts/NotificationContext";

const NotificationProvider = (props: NotificationProviderProps) => {
  const [eventSource, setEventSource] = useState<EventSource | null>(null);
  const [allowed, setAllowed] = useState<boolean>(
    Notification.permission === "granted"
  );

  const dispatchNotification = useCallback((title: string, body: string = "") => {
    if (allowed) {
      try {
        new Notification(title, {
          icon: "/favicon_192.svg",
          body,
        });
      } catch (e) {
        console.error("Erro ao disparar notificação:", e);
      }
    }
  }, [allowed]);

  useEffect(() => {
    if (Notification.permission === "default") {
      Notification.requestPermission().then((response) => {
        if (response === "granted") {
          setAllowed(true);
        }
      });
    }

    const onServerSentNotification = ({detail}: {detail: Notification}) => {
      dispatchNotification(detail.title, detail.message);
    }

    const connectEventSource = () => {
      const source = new EventSource( `${import.meta.env.VITE_BACKEND_URL}/stream/sse`, {
        withCredentials: true,
      });

      source.addEventListener("message", ({ data }) => {
        try {
          const parsed = JSON.parse(data) as ServerSentEventData[];

          parsed.forEach(({ event, data }) => {
            window.dispatchEvent(new CustomEvent(`sse:${event}`, { detail: data }));
          })
        } catch (err) {
          console.error("Erro ao processar evento SSE:", err);
        }
      });

      source.addEventListener("error", () => {
        console.error("Erro na conexão SSE. Tentando reconectar...");
        source.close();
        setTimeout(connectEventSource, 10000);
      });

      setEventSource(source);

      return source;
    };

    if (!eventSource) {
      // const source = connectEventSource();
      // window.addEventListener("beforeunload", () => source.close());
    }

    window.addEventListener('sse:notification', onServerSentNotification);

    return () => {
      window.removeEventListener('sse:notification', onServerSentNotification);
      eventSource?.close();
    };
  }, [allowed, dispatchNotification, eventSource]);

  return (
    <NotificationContext.Provider value={{ dispatchNotification }} {...props} />
  );
};

export default NotificationProvider;
