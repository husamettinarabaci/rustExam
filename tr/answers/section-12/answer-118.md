## 📘 Bölüm: Enumlar II  
### 🔹 Kategori: Döngülerle Enum Eşleme  
#### ✅ Cevap 118: `while let` ile eşleme

Bu örnekte, Rust'ta `while let` ile tekrarlı desen eşleme kullanılarak enum değerlerinin nasıl çıkarılacağı gösterilmektedir. `while let` döngüsü, desen eşleştiği sürece devam eder ve özellikle option veya iterator gibi yapılarla kullanışlıdır.

```rust
fn main() {
    let mut belki = Some(3);
    while let Some(x) = belki {
        println!("Değer: {}", x);
        belki = None;
    }
    println!("Döngü sona erdi");
}
```
