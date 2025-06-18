## 📘 Bölüm: DSL Optimizasyonu ve Kod Üretimi  
### 🔹 Kategori: DSL yorumlayıcılarında memoizasyon kullanımı  
#### ✅ Cevap 1366: DSL yorumlayıcılarında memoizasyon kullanımı

Memoizasyon, tekrar eden hesaplamaları önlemek için sonuçların önbellekte saklanmasıdır. Rust'ta `HashMap` ile kolayca uygulanabilir.

```rust
use std::collections::HashMap;

fn fib(n: u32, cache: &mut HashMap<u32, u32>) -> u32 {
    if let Some(&v) = cache.get(&n) {
        return v;
    }
    let result = if n < 2 { n } else { fib(n-1, cache) + fib(n-2, cache) };
    cache.insert(n, result);
    result
}

fn main() {
    let mut cache = HashMap::new();
    println!("fib(10) = {}", fib(10, &mut cache));
}
```
Bu yöntem, DSL yorumlayıcılarında performansı artırır.
