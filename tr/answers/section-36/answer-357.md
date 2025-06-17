## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Closure ile Kısmi Uygulama  
#### ✅ Cevap 357: Closure ile kısmi uygulama

Kısmi uygulama, bir fonksiyonun bazı parametrelerini sabitleyip yeni bir closure oluşturma tekniğidir. Rust'ta bu, bir fonksiyonu closure ile sarmalayarak kolayca yapılabilir. Aşağıdaki örnekte, `add` fonksiyonunun ilk parametresi sabitlenerek yeni bir closure elde edilmiştir.

```rust
fn add(x: i32, y: i32) -> i32 {
    x + y
}

fn main() {
    let add_ten = |y| add(10, y);
    println!("{}", add_ten(5));   // 15
    println!("{}", add_ten(20));  // 30
}
```
