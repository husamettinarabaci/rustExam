## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Dokümantasyon ve Modül Sınırları  
#### ✅ Cevap 498: Herkese açık API'ler ve modül sınırlarını dokümante etme

Rust'ta modül ve fonksiyonlar için `///` ile dokümantasyon yazılır. Bu açıklamalar `cargo doc` ile HTML dokümana dönüştürülebilir ve kullanıcıların API'yi anlamasını kolaylaştırır.

```rust
/// Math işlemleri için modül
pub mod math {
    /// İki sayıyı toplar
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

fn main() {
    let sum = math::add(2, 3);
    println!("Sum: {}", sum);
}
```
