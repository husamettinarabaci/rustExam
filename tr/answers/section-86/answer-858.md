## 📘 Bölüm: Bellek Güvenliği ve Statik Analiz
### 🔹 Kategori: Derleme Zamanında Ömür Garantileri
#### ✅ Cevap 858: Derleme zamanında ömür garantilerini anlama

Rust'ın ömür sistemi, referansların geçerliliğini derleme zamanında kontrol ederek sarkan referansları önler. Ömür anotasyonları, referansların hangi kapsamda geçerli olacağını belirtir.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

Derleyici, ömür kuralları sayesinde geçersiz referansları ve sarkan referans hatalarını engeller.
