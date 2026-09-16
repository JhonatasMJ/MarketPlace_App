import { useEffect } from 'react';
import { LocalNotificationsService } from '../services/local.notifications.service';


export const useNotifications = () => {

 useEffect(() => {
  LocalNotificationsService.requestPermissions()
  LocalNotificationsService.setupNotificationChannel()
 }, [])
  return {};
}