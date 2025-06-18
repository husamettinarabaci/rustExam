## 📘 Bölüm: Aktör Modeli İleri Konular
### 🔹 Kategori: Dinamik aktör oluşturma ve yaşam döngüsü yönetimi
#### ✅ Cevap 1183: Dinamik aktör oluşturma ve yaşam döngüsü yönetimi

Rust'ta aktörler çalışma zamanında dinamik olarak oluşturulabilir. Her aktörün yaşam döngüsü başlatma, çalıştırma ve sonlandırma aşamalarını içerir. Kaynak yönetimi için aktörler sonlandırıldığında ilgili kaynaklar serbest bırakılır.

```rust
// Dinamik aktör oluşturma örneği (basit şema):
//
// Supervisor
//   └── spawn() -> Worker Actor
//
// Worker Actor başlatılır, çalışır ve işi bitince sonlandırılır.
```
