## 📘 Bölüm: Async Runtime Implementasyonları
### 🔹 Kategori: Runtime'da zamanlayıcı ve gecikme yönetimi
#### ❓ Soru 865: Runtime'da zamanlayıcı ve gecikme yönetimi

Aşağıdakileri yapan bir Rust programı yazın:

- Async bir future ile zaman gecikmesini (delay) simüle edin.
- Kendi executor'unuzda, belirli bir süre bekleyen bir future'ı poll ederek çalıştırın.
- Standart kütüphane dışında bir crate kullanmayın.

🔧 **Görev:** Kendi async executor'unuzda, belirli bir süre (örneğin 1 saniye) bekleyen bir future'ı poll ederek çalıştırın ve tamamlandığında çıktı verin.
