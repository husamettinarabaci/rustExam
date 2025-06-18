## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Makrolarla Derleme Zamanı Yansıma  
#### ✅ Cevap 1323: Makrolarla derleme zamanı yansıma

Rust'ta derleme zamanı yansıma doğrudan yoktur, ancak makrolarla struct alan adlarını elde edebiliriz.

```rust
macro_rules! field_names {
    ($name:ident { $($field:ident : $ty:ty),* $(,)? }) => {
        [$(stringify!($field)),*]
    };
}

struct Person {
    name: String,
    age: u8,
}

const FIELDS: &[&str] = &field_names!(Person { name: String, age: u8 });

fn main() {
    println!("Alanlar: {:?}", FIELDS);
}
```
Bu makro, struct alan adlarını bir dizi olarak derleme zamanında elde eder.
