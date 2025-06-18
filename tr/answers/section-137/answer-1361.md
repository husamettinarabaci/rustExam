## 📘 Bölüm: DSL Optimizasyonu ve Kod Üretimi  
### 🔹 Kategori: DSL ifadelerinin satır içi genişletilmesi  
#### ✅ Cevap 1361: DSL ifadelerinin satır içi genişletilmesi

DSL ifadelerinin satır içi genişletilmesi için Rust'ta makro kullanılabilir. Makrolar, kodun derleme zamanında genişletilmesini sağlar ve fonksiyon çağrısı maliyetini ortadan kaldırır. Bu, performans artışı sağlar.

```rust
macro_rules! dsl_add {
    ($a:expr, $b:expr) => {
        $a + $b
    };
}

fn main() {
    let result = dsl_add!(2, 3);
    println!("Sonuç: {}", result);
}
```
Bu örnekte, `dsl_add!` makrosu çağrıldığı yerde doğrudan toplama işlemini satır içi olarak genişletir.
