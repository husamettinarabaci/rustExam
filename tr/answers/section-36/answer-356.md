## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Yüksek dereceli fonksiyonlarla boru hatları oluşturma  
#### ✅ Cevap 356: Closure ve fonksiyonlarla boru hattı (pipeline) oluşturma

Bu soruda closure ve fonksiyonları zincirleyerek bir boru hattı oluşturmayı öğreniyorsunuz. Rust'ta closure ve fonksiyonlar, veri işleme adımlarını birbirine bağlamak için kullanılabilir.

```rust
fn add_one(x: i32) -> i32 {
    x + 1
}

fn main() {
    let multiply_by_two = |x: i32| x * 2;
    let subtract_three = |x: i32| x - 3;

    let value = 5;
    let result = subtract_three(multiply_by_two(add_one(value)));
    println!("{}", result); // ((5 + 1) * 2) - 3 = 9
}
```
