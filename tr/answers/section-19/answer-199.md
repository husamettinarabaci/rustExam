## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: Pinleme  
#### ✅ Cevap 199: Self-referential tipler için Pin kullanımı

`Pin`, bir değerin bellekte taşınmasını engeller. Bu, self-referential tipler için gereklidir. Pinleme `Pin<Box<T>>` ile yapılır.

```rust
use std::pin::Pin;

fn main() {
    let mut kutulu = Box::new(5);
    let pinli = Pin::new(&mut kutulu);
    println!("Pinli değer: {}", pinli);
}
```
