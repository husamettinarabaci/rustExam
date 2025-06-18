## 📘 Bölüm: Başlangıç  
### 🔹 Kategori: Tür Dönüşümü  
#### ✅ Cevap 5: `as` ile sayı türlerini dönüştürme

**Açıklama:**

Rust'ta `as` anahtar kelimesiyle tür dönüşümü yapılabilir. Örneğin, `f64` türünden bir değeri `i32`'ye dönüştürebilirsiniz.

```rust
fn main() {
    let ondalik = 3.7;
    let tam = ondalik as i32;
    println!("Orijinal: {} Dönüştürüldü: {}", ondalik, tam);
}
```
