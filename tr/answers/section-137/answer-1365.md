## 📘 Bölüm: DSL Optimizasyonu ve Kod Üretimi  
### 🔹 Kategori: DSL'lerde çalışma zamanı yükünü en aza indirme  
#### ✅ Cevap 1365: DSL'lerde çalışma zamanı yükünü en aza indirme

Çalışma zamanı yükünü azaltmak için Rust'ta sabit veri yapıları ve `const fn` fonksiyonları kullanılabilir. Ayrıca, mümkünse DSL ifadeleri derleme zamanında çözülmelidir.

```rust
const fn add(a: i32, b: i32) -> i32 {
    a + b
}

const RESULT: i32 = add(2, 3);

fn main() {
    println!("Sonuç: {}", RESULT);
}
```
Bu yaklaşımda, toplama işlemi derleme zamanında çözülür ve çalışma zamanı yükü ortadan kalkar.
