## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Async Tekrar Deneme ve Geri Çekilme Mantığı
#### ❓ Soru 1151: Async tekrar deneme ve geri çekilme mantığı implementasyonu

Bir işlemi başarısızlık durumunda artan gecikmelerle (exponential backoff) tekrar deneyen bir async Rust fonksiyonu yazın.

- async/await ve döngü ile async işlemi tekrar deneyin.
- Her denemede bekleme süresini artırın (ör: 100ms, 200ms, 400ms, ...).
- Maksimum deneme sayısına ulaşıldığında veya başarıyla tamamlandığında döngüyü sonlandırın.

🔧 **Görev:** Hatalı olabilen bir işlem için exponential backoff ile async tekrar deneme mekanizması implement edin.
