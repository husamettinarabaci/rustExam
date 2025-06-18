## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Rust ömürlerinde alt tip ve varyans kavramı  
#### ✅ Cevap 717: Rust ömürlerinde alt tip ve varyans kavramı

Rust'ta daha uzun ömürlü bir referans, daha kısa ömürlü bir referansın yerine geçebilir (alt tip ilişkisi). Referans tipleri ömür parametresinde kovaryanttır.

```rust
fn print_str(s: &str) {
    println!("{}", s);
}

fn main() {
    let string = String::from("Rust");
    let s: &str = &string;
    let s_static: &'static str = "static";
    // &'static str, &'a str'nin alt tipidir (daha uzun ömürlü)
    print_str(s_static); // 'static ömür, herhangi bir ömür yerine geçebilir
    print_str(s);       // Normal referans
}
```

Burada, `'static` ömürlü bir referans, daha kısa ömürlü bir referansın beklenildiği yere geçebilir. Bu, ömürlerde alt tip ilişkisi ve varyansın bir sonucudur.
