## 📘 Bölüm: İleri Trait Sistemi ve Uyum  
### 🔹 Kategori: Negatif trait bound'ları ile derleyici özellikleri (nightly)  
#### ✅ Cevap 723: Negatif trait bound'ları ile derleyici özellikleri (nightly)

Negatif trait bound'ları, bir tipin bir trait'i kesinlikle uygulamadığını belirtmek için kullanılır. Bu özellik yalnızca nightly Rust'ta ve `#![feature(negative_impls)]` ile etkinleştirilebilir.

```rust
#![feature(negative_impls)]

trait MyTrait {}

struct NotImpl;

impl !MyTrait for NotImpl {}

fn needs_mytrait<T: MyTrait>(_t: T) {
    println!("MyTrait uygulanıyor.");
}

fn main() {
    // needs_mytrait(NotImpl); // Derleme hatası: NotImpl, MyTrait'i uygulamıyor.
}
```

Burada, `impl !MyTrait for NotImpl {}` ile NotImpl'ın MyTrait'i asla uygulamayacağı belirtilmiştir. Bu özellik yalnızca nightly derleyicide çalışır.
