## 📘 Bölüm: Modüller I  
### 🔹 Kategori: Modül Dokümantasyonu  
#### ✅ Cevap 128: Modül dokümantasyonu

Modülleri ve fonksiyonları üçlü eğik çizgi `///` ile belgeleyebilirsiniz. Bu yorumlar Rust'ın dokümantasyon üreticisi tarafından kullanılır. Dokümantasyonu oluşturmak ve görüntülemek için `cargo doc --open` komutunu kullanabilirsiniz.

```rust
/// Matematik yardımcı modülü
mod math {
    /// İki sayıyı toplar ve sonucu döndürür.
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

fn main() {
    let sonuc = math::add(2, 3);
    println!("Toplam: {}", sonuc);
}
```

Dokümantasyonu oluşturmak ve görüntülemek için şu komutu kullanın:

```
cargo doc --open
```
