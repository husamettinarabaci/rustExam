## 📘 Bölüm: DSL Optimizasyonu ve Kod Üretimi  
### 🔹 Kategori: Tembel değerlendirme stratejileri  
#### ✅ Cevap 1363: Tembel değerlendirme stratejileri

Tembel değerlendirme için Rust'ta closure veya `Lazy` yapısı kullanılabilir. Bu sayede, ifade yalnızca ihtiyaç duyulduğunda hesaplanır ve gereksiz hesaplamalar önlenir.

```rust
fn lazy_eval<F: FnOnce() -> T, T>(f: F) -> T {
    // İfade yalnızca burada çağrıldığında hesaplanır
    f()
}

fn main() {
    let x = 5;
    let result = lazy_eval(|| x * 2);
    println!("Sonuç: {}", result);
}
```
Bu yapı, bellek ve performans avantajı sağlar.
