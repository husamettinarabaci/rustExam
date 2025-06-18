## 📘 Bölüm: FFI ve Yabancı Arayüzler  
### 🔹 Kategori: C ile Güvenli Arayüz  
#### ✅ Cevap 601: `extern "C"` ile C fonksiyonlarını güvenli şekilde çağırma

Rust'ta C fonksiyonlarını çağırmak için `extern "C"` bloğu kullanılır. Bu blokta fonksiyonun imzası tanımlanır ve Rust kodunda güvenli şekilde çağrılır. Bellek yönetimi ve tip dönüşümlerine dikkat edilmelidir.

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        let x = -42;
        let y = abs(x);
        println!("abs({}) = {}", x, y);
    }
}
```
