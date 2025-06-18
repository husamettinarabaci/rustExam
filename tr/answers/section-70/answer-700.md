## 📘 Bölüm: Full-Stack Rust Entegrasyonu  
### 🔹 Kategori: Dokümantasyon ve API spesifikasyonları yazma  
#### ✅ Cevap 700: Dokümantasyon ve API spesifikasyonları yazma

Rust'ta dokümantasyon, `///` ile yazılır. `cargo doc` ile HTML dokümanları üretilebilir. API'ler için `utoipa` gibi crate'lerle OpenAPI spesifikasyonu oluşturulabilir.

Örnek:
```rust
/// İki sayıyı toplar.
///
/// # Argümanlar
/// * `a` - Birinci sayı
/// * `b` - İkinci sayı
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```
`cargo doc --open` ile dokümanlar görüntülenir. API için OpenAPI crate'leri kullanılabilir.
