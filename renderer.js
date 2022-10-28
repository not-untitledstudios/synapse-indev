/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

 const NOTIFICATION_TITLE = 'New Message From: zekticezy'
 const NOTIFICATION_BODY = 'im over here stroking my dick i got lotion on my dick rn im just stroking my shit. im horny as fuck man im a freak man.'
 const CLICK_MESSAGE = 'Notification clicked'
 
 new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
   .onclick = () => console.log(CLICK_MESSAGE)