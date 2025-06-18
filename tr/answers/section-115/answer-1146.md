## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Kontrollü Zamanlayıcılarla Deterministik Test  
#### ✅ Cevap 1146: Kontrollü zamanlayıcılarla deterministik test

Deterministik test, her çalıştırmada aynı sonucu veren testtir. Eşzamanlı kodda, kontrollü zamanlayıcılar (ör. `tokio::time::pause`) ile thread sırası ve zamanlaması kontrol edilerek testler tekrarlanabilir ve güvenilir olur. Bu, rastgele hataların önüne geçer ve hata ayıklamayı kolaylaştırır.
