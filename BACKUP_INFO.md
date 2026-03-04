# Резервные копии ИНЕТШКОЛА

## BACKUP v1 (2026-03-04)
**Ветка:** `backup-v1`
**Папка:** `backups/src_v1_20260304_094743/`

### Содержимое:
- ✅ Рабочий сайт с тёмной темой
- ✅ DonationWidget с QR кодом
- ✅ Кнопки оплаты: СБП, Сбер, Тинькофф, Альфа, Райффайзен
- ✅ Международные переводы: KoronaPay, CONTACT, Unistream, SWIFT
- ✅ Номер счёта Сбербанка: 40817810127008641225
- ✅ Класс `dark` на `<html>` для тёмной темы

### Как восстановить:
```bash
# Переключиться на резервную копию
git checkout backup-v1

# Или скопировать папку
cp -r backups/src_v1_20260304_094743/* src/
```

### Деплой:
```bash
bun run build
touch out/.nojekyll
git add -f out/
git commit -m "Restore from backup v1"
git push origin `git subtree split --prefix out HEAD`:gh-pages --force
```

---

## Примечания:
- При проблемах с темой - проверить класс `dark` в `src/app/layout.tsx`
- При 404 ошибках - пересобрать проект и переделоить
- QR код генерируется через api.qrserver.com
