## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: Refutable ve irrefutable desenler
#### ✅ Cevap 388: Refutable ve irrefutable desenler

Bu soruda, refutable (çürütülebilir) ve irrefutable (çürütülemez) desenlere örnekler verilir ve farkları gösterilir.

```rust
fn main() {
    // Irrefutable pattern: always matches
    let (a, b) = (1, 2);
    println!("a = {}, b = {}", a, b);

    // Refutable pattern: may not match
    let opt = Some(5);
    if let Some(x) = opt {
        println!("Matched: {}", x);
    } else {
        println!("No match");
    }
}
```
