## 📘 Bölüm: Aktör Modeli İleri Konular
### 🔹 Kategori: Hata toleransı ve hata yayılımı
#### ✅ Cevap 1182: Aktörlerde hata toleransı ve hata yayılımı

Aktör modelinde, bir aktör hata verdiğinde ebeveyn aktör hatayı yakalar ve stratejisine göre yeniden başlatır, yükseltir veya yok sayar. Bu, sistemin güvenilirliğini artırır.

```rust
// Rust'ta aktör hata yönetimi şeması:
//
// Parent Actor
// └── Child Actor (fails)
//
// Parent Actor: [Restart] [Escalate] [Ignore]
//
// Stratejiye göre hata yayılımı ve toleransı sağlanır.
```
