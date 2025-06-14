## 📘 Bölüm: Güvensiz Rust ve İleri Özellikler  
### 🔹 Kategori: FFI (Foreign Function Interface)  
#### ✅ Cevap 192: Rust'ta FFI ile C fonksiyonu çağırma

FFI (Foreign Function Interface), Rust'ın başka dillerde yazılmış fonksiyonları çağırmasını sağlar. Bunun için `extern` blokları ve unsafe kod gerekir.

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    let x = -5;
    let abs_x = unsafe { abs(x) };
    println!("abs({}) = {}", x, abs_x);
}
```
