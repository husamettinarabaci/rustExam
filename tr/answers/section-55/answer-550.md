## 📘 Bölüm: Sistem Seviyesinde Tasarım  
### 🔹 Kategori: Rust ve C Güvenlik Karşılaştırması  
#### ✅ Cevap 550: Sistem seviyesinde Rust ve C güvenlik garantilerini karşılaştırma

Rust, sahiplik modeli ve derleyici kontrolleri ile bellek güvenliğini C'ye göre çok daha güçlü şekilde sağlar. C'de pointer hataları, buffer overflow ve use-after-free gibi açıklar yaygındır. Rust'ta bu tür hatalar derleme zamanında engellenir.

- **Rust'ın Avantajları:**
  - Sahiplik ve ödünç alma ile bellek sızıntısı ve yarış durumu önlenir.
  - Derleyici, geçersiz erişimleri ve sarkan pointer'ları engeller.
  - Null pointer ve use-after-free hataları derleme zamanında yakalanır.
- **C'nin Tipik Açıkları:**
  - Buffer overflow, dangling pointer, double free, use-after-free.
  - Bellek yönetimi tamamen programcıya bırakılır.

Sonuç olarak, Rust sistem programlamada güvenlik ve sağlamlık açısından C'ye göre daha üstündür.
