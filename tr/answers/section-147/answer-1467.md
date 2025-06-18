## 📘 Bölüm: Karmaşık Alanlar için DSL'ler
### 🔹 Kategori: DSL Tasarımı ve Kullanımı
#### ✅ Cevap 1467: Çoklu hedefler için DSL kod üretimi

Bir DSL'den çoklu hedefler için kod üretmek için, DSL ifadelerini ara bir temsile (AST) dönüştürüp, her hedef için ayrı kod üreticiler kullanabilirsiniz. Hedefe özgü sözdizimi ve semantik farklılıklarına dikkat edilmelidir.

```rust
// Örnek DSL: add(2, 3)
// Rust çıktısı: 2 + 3
// Python çıktısı: 2 + 3

fn generate_rust_code() -> String {
    "2 + 3".to_string()
}
fn generate_python_code() -> String {
    "2 + 3".to_string()
}
```
