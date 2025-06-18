## 📘 Bölüm: Yüksek Güvenlikli Sistemler için Rust
### 🔹 Kategori: Sözleşmeler ve Değişmezler
#### ✅ Cevap 1242: Kodda sözleşme ve değişmezler kullanımı

Sözleşmeler, fonksiyonlar için önkoşul ve sonkoşulları belirtir; değişmezler ise her zaman sağlanması gereken özelliklerdir. Rust'ta `assert!` ile bunlar çalışma zamanında denetlenebilir.

```rust
fn divide(a: i32, b: i32) -> i32 {
    assert!(b != 0, "Önkoşul başarısız: bölen sıfır olamaz");
    a / b
}
```

Bu fonksiyon, `b` sıfır olmadığında çalışır ve güvenliği artırır.
