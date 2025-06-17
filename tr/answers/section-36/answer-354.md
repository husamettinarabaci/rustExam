## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Fonksiyondan Closure Döndürme  
#### ✅ Cevap 354: Fonksiyondan closure döndürme

Bu soruda, bir fonksiyondan closure döndürmeyi öğreniyorsunuz. Rust'ta closure'lar, ortamdan değişken yakalayabilir ve fonksiyonlardan döndürülebilir. Döndürülen closure'ın ömrü, ortamdan yakalanan değişkenlerin ömrüne bağlıdır. Genellikle, döndürülen closure'ın türü karmaşık olabileceğinden, `impl Fn` veya `Box<dyn Fn>` gibi trait nesneleri kullanılır.

```rust
fn make_adder(x: i32) -> impl Fn(i32) -> i32 {
    move |y| x + y
}

fn main() {
    let add_five = make_adder(5);
    println!("{}", add_five(3)); // 8
}
```
