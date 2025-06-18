## 📘 Bölüm: DSL Kullanıcı Deneyimi ve Araçları  
### 🔹 Kategori: Yardımcı Hata Mesajları Üretme  
#### ✅ Cevap 1415: Yardımcı hata mesajları üretme

Yardımcı hata mesajları, hatanın nedenini ve çözüm yolunu açıkça belirtir.

```rust
// Hatalı kod: 2 +
if parse_error() {
    show_error("Eksik operand: '+' operatöründen sonra bir sayı bekleniyor. Örnek: 2 + 3");
}
```
Hata mesajı açık, kısa ve düzeltme önerisi içerir.
