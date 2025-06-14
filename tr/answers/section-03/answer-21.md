## 📘 Bölüm: Kontrol Akışı  
### 🔹 Kategori: Koşullar  
#### ✅ Cevap 21: `if`, `else if` ve `else` kullanımı

**Açıklama:**

Rust'ta koşullu dallanma, `if`, `else if` ve `else` ile sağlanır.

```rust
fn main() {
    let sayi = 5;
    if sayi > 0 {
        println!("Pozitif");
    } else if sayi < 0 {
        println!("Negatif");
    } else {
        println!("Sıfır");
    }
}
```
