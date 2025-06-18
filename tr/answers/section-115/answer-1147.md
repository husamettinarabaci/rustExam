## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Async Kodda Dengesiz Testleri İzole Etme  
#### ✅ Cevap 1147: Async kodda dengesiz testleri izole etme

Dengesiz (flaky) testler, her çalıştırmada farklı sonuç verebilen testlerdir. Async kodda zamanlama, yarış durumu veya dış bağımlılıklar flaky testlere yol açar. İzolasyon için:
- Testleri bağımsız ve izole yazın.
- Zamanlayıcıları ve dış kaynakları taklit edin (mock).
- Tekrarlı çalıştırmalarla flaky testleri tespit edin.
- `tokio::test(flavor = "multi_thread")` gibi kontrollü ortamlar kullanın.
