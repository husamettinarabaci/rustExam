## 📘 Bölüm: Kontrol Akışı  
### 🔹 Kategori: Koşullar  
#### ✅ Cevap 22: Değer döndüren ifade olarak `if` kullanımı

**Açıklama:**

Rust'ta `if` bir ifade olarak kullanılabilir ve koşula göre bir değeri değişkene atayabilir.

```rust
fn main() {
    let kosul = true;
    let sayi = if kosul { 10 } else { 20 };
    println!("sayi: {}", sayi);
}
```
