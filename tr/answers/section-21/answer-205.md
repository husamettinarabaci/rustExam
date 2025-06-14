## 📘 Bölüm: Makrolar ve Metaprogramlama  
### 🔹 Kategori: Makro Hijyeni  
#### ✅ Cevap 205: Makro hijyeni nedir?

Makro hijyeni, makro içinde tanımlanan değişkenlerin dışarıdaki değişkenlerle çakışmamasını sağlar. Rust, değişkenleri dahili olarak yeniden adlandırarak bunu başarır.

```rust
macro_rules! var_olustur {
    () => {
        let x = 42;
        println!("Makro içinde: {}", x);
    };
}

fn main() {
    let x = 10;
    var_olustur!();
    println!("Makro dışında: {}", x);
}
```
