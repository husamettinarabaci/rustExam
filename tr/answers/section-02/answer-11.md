## 📘 Bölüm: Değişkenler, Sabitler ve Türler  
### 🔹 Kategori: Demetler (Tuple)  
#### ✅ Cevap 11: Bir demet tanımlama ve elemanlarına erişme

**Açıklama:**

Rust'ta demetler farklı türde değerler tutabilir. Elemanlara nokta ve indeks ile erişilir.

```rust
fn main() {
    let demet = (42, 3.14, 'a');
    println!("Birinci: {}", demet.0);
    println!("İkinci: {}", demet.1);
    println!("Üçüncü: {}", demet.2);
}
```
