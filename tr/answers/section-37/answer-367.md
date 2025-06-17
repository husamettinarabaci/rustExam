## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: modül başlatma dosyası (mod.rs) kullanımı  
#### ✅ Cevap 367: modül başlatma dosyası (mod.rs) kullanımı

Rust'ta birden fazla dosyadan oluşan modüller için klasör içinde `mod.rs` dosyası kullanılır. `mod.rs` ana modül giriş noktasıdır ve alt modülleri içerir. Ana dosyada ise bu modülün dışa aktardığı fonksiyon çağrılır.

Klasör yapısı örneği:
```
src/
  main.rs
  mymod/
    mod.rs
    foo.rs
    bar.rs
```

`mymod/mod.rs`:
```rust
pub mod foo;
pub mod bar;

pub use foo::foo_hello;
```

`mymod/foo.rs`:
```rust
pub fn foo_hello() {
    println!("Foo'dan merhaba!");
}
```

`mymod/bar.rs`:
```rust
pub fn bar_hello() {
    println!("Bar'dan merhaba!");
}
```

`main.rs`:
```rust
mod mymod;

fn main() {
    mymod::foo_hello();
}
```
