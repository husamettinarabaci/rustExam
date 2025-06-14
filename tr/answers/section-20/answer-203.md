## 📘 Bölüm: Makrolar ve Metaprogramlama  
### 🔹 Kategori: Makro Pattern Eşleme  
#### ✅ Cevap 203: Makrolarda pattern eşleme kullanımı

Bu makro, pattern eşleme ile minimum ve maksimumu seçer.

```rust
macro_rules! min_or_max {
    ($a:expr, $b:expr, min) => {
        if $a < $b { $a } else { $b }
    };
    ($a:expr, $b:expr, max) => {
        if $a > $b { $a } else { $b }
    };
}

fn main() {
    println!("Min: {}", min_or_max!(3, 7, min));
    println!("Max: {}", min_or_max!(3, 7, max));
}
```
