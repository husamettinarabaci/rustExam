## 📘 Bölüm: Derleme Zamanı Programlama Desenleri  
### 🔹 Kategori: Makro Tabanlı Kod Üretim Desenleri  
#### ✅ Cevap 1329: Makro tabanlı kod üretim desenleri

Makrolar, tekrarlı kodu azaltmak için kullanılır. Aşağıda, bir makro ile benzer fonksiyonlar üretilmiştir.

```rust
macro_rules! create_add_fn {
    ($name:ident, $t:ty) => {
        fn $name(a: $t, b: $t) -> $t {
            a + b
        }
    };
}

create_add_fn!(add_i32, i32);
create_add_fn!(add_f64, f64);

fn main() {
    println!("{}", add_i32(2, 3));
    println!("{}", add_f64(1.5, 2.5));
}
```
Bu makro, farklı tipler için toplama fonksiyonları üretir ve kod tekrarını azaltır.
