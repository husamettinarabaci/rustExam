## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri  
### 🔹 Kategori: Trait Nesneleri ve Bellek Düzeni  
#### ✅ Cevap 732: Fat pointer'ın (veri + vtable) bellek düzenini anlama

Rust'ta fat pointer, örneğin `&dyn Trait` veya `Box<dyn Trait>`, iki işaretçiden oluşur: biri veriye, diğeri vtable'a (dinamik dağıtım tablosu) işaret eder. Somut tipe referans ise yalnızca tek bir işaretçidir.

```rust
use std::mem::size_of;

trait OrnekTrait {
    fn foo(&self);
}

struct Ornek;
impl OrnekTrait for Ornek {
    fn foo(&self) {}
}

fn main() {
    let o = Ornek;
    let trait_ref: &dyn OrnekTrait = &o;
    println!("&Ornek boyutu: {}", size_of::<&Ornek>());
    println!("&dyn OrnekTrait boyutu: {}", size_of::<&dyn OrnekTrait>());
}
```

Çoğu platformda `&Ornek` 8 bayt (tek işaretçi), `&dyn OrnekTrait` ise 16 bayttır (veri + vtable işaretçisi).
