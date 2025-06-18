## 📘 Bölüm: Derleme Zamanı Yansıma ve İçgörü
### 🔹 Kategori: Derleme Zamanı Yansıma
#### ✅ Cevap 1471: Rust yansımasının (reflection) sınırları ve yetenekleri

Rust'ta yansıma (reflection), çalışma zamanında tip bilgisine erişimi sınırlı tutar. Derleme zamanı yansıma ise makro ve trait tabanlı tekniklerle mümkündür. Rust'ın tip güvenliği ve performans hedefleri nedeniyle Java veya C# gibi dillerdeki tam yansıma desteği yoktur. Ancak, `std::any::type_name`, `derive` makroları ve procedural macro'lar ile sınırlı yansıma sağlanabilir.

```rust
use std::any::type_name;

fn print_type_of<T>(_: &T) {
    println!("Type: {}", type_name::<T>());
}

fn main() {
    let x = 42;
    print_type_of(&x); // Type: i32
}
```
