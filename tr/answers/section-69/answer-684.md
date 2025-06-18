## 📘 Bölüm: Macro Rules ve Deklaratif Makrolar  
### 🔹 Kategori: Deklaratif makrolarla DSL implementasyonu  
#### ✅ Cevap 684: Deklaratif makrolarla DSL implementasyonu

Bu soruda, Rust'ta deklaratif makro ile mini bir DSL (alan-özel dil) oluşturulur. Makro, özel bir sözdizimi ile işlemleri kolaylaştırır.

```rust
macro_rules! calc {
    (add $a:expr, $b:expr) => {
        $a + $b
    };
    (mul $a:expr, $b:expr) => {
        $a * $b
    };
}

fn main() {
    let sum = calc!(add 2, 3);
    let product = calc!(mul 4, 5);
    println!("sum: {}, product: {}", sum, product);
}
```
Makro, özel bir DSL sözdizimi ile toplama ve çarpma işlemlerini kolaylaştırır.
