## 📘 Bölüm: Modüller ve Görünürlük  
### 🔹 Kategori: Modüler tasarımla döngüsel bağımlılıklardan kaçınma  
#### ✅ Cevap 369: Modüler tasarımla döngüsel bağımlılıklardan kaçınma

Rust'ta iki modülün birbirine doğrudan bağımlı olması döngüsel bağımlılığa yol açar ve derleyici hata verir. Bu, modüllerin birbirini aynı anda çözmeye çalışmasından kaynaklanır. Aşağıda yanlış ve doğru modüler tasarım örnekleri verilmiştir.

Yanlış (Döngüsel Bağımlılık):
```rust
// mod_a.rs
use crate::mod_b; // mod_b'ye bağımlı

// mod_b.rs
use crate::mod_a; // mod_a'ya bağımlı
```
Bu durumda derleyici "unresolved import" veya "cycle detected" hatası verir.

Doğru (Bağımlılığı Ortadan Kaldırma):
Bir ortak modül veya trait ile bağımlılık tek yöne çekilebilir:
```rust
// common.rs
pub trait Ortak {
    fn ortak_fonksiyon(&self);
}

// mod_a.rs
use crate::common::Ortak;
pub struct A;
impl Ortak for A {
    fn ortak_fonksiyon(&self) {
        println!("A'dan ortak fonksiyon");
    }
}

// mod_b.rs
use crate::common::Ortak;
pub struct B;
impl Ortak for B {
    fn ortak_fonksiyon(&self) {
        println!("B'den ortak fonksiyon");
    }
}
```
Bu şekilde, hem `mod_a` hem de `mod_b` sadece `common` modülüne bağımlı olur ve döngüsel bağımlılık oluşmaz.
