import * as Notifications from 'expo-notifications';
import store from '../store/store';
import { addNotification } from '../store/slices/notificationsSlice';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export function setupNotifications() {
  const subscription = Notifications.addNotificationReceivedListener((notification) => {
    const { title, body } = notification.request.content;
    store.dispatch(
      addNotification({
        id: notification.request.identifier,
        title: title || 'Notificação',
        body: body || '',
        timestamp: Date.now(),
      })
    );
  });
  return () => subscription.remove();
}