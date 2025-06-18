## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: Görev Ömürleri ve İptal  
#### ✅ Cevap 1003: Görev ömürleri ve iptal yönetimi

Async görevlerin ömrü, onları başlatan kodun yaşam süresine ve elde edilen `JoinHandle`'a bağlıdır. Görevler, `JoinHandle` drop edildiğinde veya belirli bir iptal sinyali gönderildiğinde iptal edilebilir. İptal edilen görevler, kalan kodlarını çalıştırmaz ve kaynaklar serbest bırakılır. Görev ömrü ve iptali, kaynak yönetimi ve uygulama güvenilirliği için önemlidir.
