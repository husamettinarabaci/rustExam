## 📘 Bölüm: Makrolar ve Metaprogramlama  
### 🔹 Kategori: Makro Argümanları  
#### ✅ Cevap 202: Argüman alan makro yazma

Bu makro, bir ifade ve bir sayı alır, ifadeyi belirtilen kadar yazdırır.

```rust
macro_rules! repeat_print {
    ($expr:expr, $n:expr) => {
        for _ in 0..$n {
            println!("{}", $expr);
        }
    };
}

fn main() {
    repeat_print!("Rust!", 3);
}
```
