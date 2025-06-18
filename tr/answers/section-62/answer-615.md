## 📘 Bölüm: Prosedürel Makrolar ve Kod Üretimi  
### 🔹 Kategori: Gömülü DSL sözdizimi için makro kullanımı  
#### ✅ Cevap 615: Gömülü DSL sözdizimi için makro kullanımı

Bu örnekte, DSL ifadelerini Rust fonksiyon çağrılarına dönüştüren bir `macro_rules!` makrosu tanımlanır. Makro, DSL'in okunabilirliğini artırır.

```rust
macro_rules! dsl {
    (add($a:expr, $b:expr)) => { $a + $b };
    (mul($a:expr, $b:expr)) => { $a * $b };
}

fn main() {
    let result = dsl!(add(1, mul(2, 3)));
    println!("{}", result);
}
```
