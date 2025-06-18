## 📘 Bölüm: Derleme Zamanı Yansıma ve İçgörü
### 🔹 Kategori: Derleme Zamanı Yansıma
#### ✅ Cevap 1476: Yansıma odaklı API tasarımı

Yansıma odaklı bir API, tip ve alan bilgisine erişim sağlayabilir. Rust'ta bu, trait'ler ve makrolarla sınırlı şekilde yapılır.

```rust
trait Reflect {
    fn type_name() -> &'static str;
}

struct MyStruct;

impl Reflect for MyStruct {
    fn type_name() -> &'static str { "MyStruct" }
}

fn main() {
    println!("Type: {}", MyStruct::type_name());
}
```
