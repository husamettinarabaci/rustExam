## 📘 Bölüm: Başlangıç  
### 🔹 Kategori: Değişken Gölgeleme  
#### ✅ Cevap 4: Rust'ta değişken gölgeleme kullanımı

**Açıklama:**

Değişken gölgeleme, aynı isimle yeni bir değişken tanımlayarak önceki değerin "gölgelendiği" bir Rust özelliğidir. Bu, değeri dönüştürmek için yeni bir isim kullanmadan pratik bir yol sunar.

```rust
fn main() {
    let x = 5;
    println!("Gölgeleme öncesi: {}", x);
    let x = x + 1; // x'i yeni bir değerle gölgeliyoruz
    println!("Gölgeleme sonrası: {}", x);
}
```
