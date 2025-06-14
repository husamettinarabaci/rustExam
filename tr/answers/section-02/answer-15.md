## 📘 Bölüm: Değişkenler, Sabitler ve Türler  
### 🔹 Kategori: Değiştirilebilirlik  
#### ✅ Cevap 15: Değiştirilebilir ve değiştirilemez değişkenler tanımlama

**Açıklama:**

Rust'ta değişkenler varsayılan olarak değiştirilemezdir. `mut` anahtar kelimesiyle değiştirilebilir yapılabilir.

```rust
fn main() {
    let mut x = 5; // değiştirilebilir
    let y = 10;    // değiştirilemez
    x = 7;
    println!("x: {}", x);
    println!("y: {}", y);
}
```
