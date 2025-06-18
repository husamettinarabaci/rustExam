## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Makro hijyenini sağlama ve çakışmaları önleme  
#### ✅ Cevap 814: Makro hijyenini sağlama ve çakışmaları önleme

Aşağıda, makro içinde tanımlanan değişkenlerin dıştaki isimlerle çakışmamasını sağlayan hijyenik bir makro örneği verilmiştir.

```rust
macro_rules! hygienic_sum {
    ($a:expr, $b:expr) => {{
        let result = $a + $b;
        result
    }}
}

fn main() {
    let result = 10;
    let sum = hygienic_sum!(2, 3);
    println!("{} {}", result, sum); // 10 5
}
```

Makro içindeki `result` değişkeni, makro dışında tanımlı olanla çakışmaz. Rust makroları hijyeniktir ve isimler izole edilir.
