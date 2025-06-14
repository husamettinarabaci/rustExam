## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: Sıfır Boyutlu Tipler  
#### ✅ Cevap 198: Sıfır boyutlu tipler (ZST) nedir?

Sıfır boyutlu tipler (ZST), bellekte hiç yer kaplamayan tiplere denir. Marker trait'ler ve tip düzeyinde programlama için kullanışlıdır.

```rust
struct Isaretleyici;

fn main() {
    let i = Isaretleyici;
    println!("Isaretleyici boyutu: {}", std::mem::size_of::<Isaretleyici>());
}
```
