## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Birden Fazla Hata Türü  
#### ❓ Soru 185: Birden fazla hata türüyle başa çıkma

Bir dosyadan sayı okuyan ve `Result<i32, Box<dyn std::error::Error>>` döndüren bir Rust fonksiyonu yazın. Fonksiyon hem I/O hatalarını hem de parse hatalarını yönetmeli. Fonksiyonu çağırıp farklı hata türlerini nasıl yöneteceğinizi gösterin.

- Dosya açan, satır okuyan ve tam sayıya çeviren bir fonksiyon tanımlayın.
- Birden fazla hata türü için `Box<dyn std::error::Error>` kullanın.
- Fonksiyonu çağırıp hata türüne göre farklı mesajlar yazdırın.

🔧 **Görev:** Rust'ta `Result` ve trait object ile birden fazla hata türünü yönetmeyi gösterin.
