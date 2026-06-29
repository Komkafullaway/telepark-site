TELEPARK LAUNCH PACK

1) Скопируй все файлы PNG/ICO/WEBMANIFEST из этой папки в:
   public/

2) Файл layout.tsx замени в:
   app/layout.tsx

3) Проверь локально:
   http://localhost:3000/favicon.ico
   http://localhost:3000/og-image.png
   http://localhost:3000/site.webmanifest

4) Залей на GitHub/Vercel:
   git add .
   git commit -m "Telepark launch pack"
   git push origin main

5) После деплоя проверь:
   https://tpark.ru/favicon.ico
   https://tpark.ru/og-image.png
   https://tpark.ru/site.webmanifest

Важно:
Яндекс/Google могут обновлять favicon не сразу — от нескольких часов до нескольких дней.
Telegram/WhatsApp также кешируют preview. Если preview старый, нужно подождать или проверить через другой чат/устройство.
