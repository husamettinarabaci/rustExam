## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Yapıyı Debug ile Yazdırma  
#### ✅ Cevap 86: Yapıyı debug ile yazdırma

Rust'ta bir yapıyı debug ile yazdırmak için `Debug` trait'i türetilir ve `println!` makrosunda `{:?}` kullanılır. Bu, yapının değerlerini hızlıca görmek için kullanışlıdır.

```rust
#[derive(Debug)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p = Point { x: 3, y: 7 };
    println!("{:?}", p);
}
```
