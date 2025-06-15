## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: Referans ve Mutable Eşleme  
#### ✅ Cevap 119: `ref` ve `mut` ile eşleme

Bu örnekte, Rust'ta desen eşlemede `ref` ve `ref mut` kullanılarak enum içindeki değerlere nasıl erişileceği ve bunların nasıl değiştirileceği gösterilmektedir. `ref` ile referans alınırken, `ref mut` ile mutable referans alıp değeri değiştirebilirsiniz.

```rust
fn main() {
    let mut belki = Some(5);
    // Değiştirilemez referans ile erişim
    match belki {
        Some(ref x) => println!("Önce: {}", x),
        None => println!("Değer yok"),
    }
    // Değiştirilebilir referans ile erişim ve değiştirme
    match belki {
        Some(ref mut x) => {
            *x += 10;
            println!("Sonra: {}", x);
        },
        None => println!("Değer yok"),
    }
}
```
