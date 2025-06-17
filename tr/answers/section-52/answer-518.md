## 📘 Bölüm: Gömülü Rust Temelleri  
### 🔹 Kategori: Koleksiyonlar ve Heapless  
#### ✅ Cevap 518: Gömülü ortamlarda `heapless` koleksiyonları kullanımı

`heapless` dinamik bellek gerektirmeyen koleksiyonlar sağlar. Örnek: `heapless::Vec` kullanımı.

```rust
#![no_std]

use heapless::Vec;

fn main() {
    let mut data: Vec<u8, 8> = Vec::new();
    data.push(1).unwrap();
    data.push(2).unwrap();
    // ...
    let first = data[0];
}
```
