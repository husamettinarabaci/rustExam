## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: Union'lar  
#### ✅ Cevap 195: Rust'ta union tanımlama ve kullanımı

Union'lar farklı tiplerin aynı belleği paylaşmasını sağlar. Alanlara erişim unsafe'tir çünkü doğru alanı okuduğunuzdan emin olmalısınız.

```rust
union BenimUnion {
    i: i32,
    f: f32,
}

fn main() {
    let u = BenimUnion { i: 42 };
    unsafe {
        println!("i: {}", u.i);
    }
}
```
