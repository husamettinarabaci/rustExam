## 📘 Bölüm: Yapılar I  
### 🔹 Kategori: Metotlu Yapılar  
#### ✅ Cevap 89: Metotlu yapılar

Rust'ta metotlar, bir yapı için `impl` bloğu içinde tanımlanır. Burada `Rectangle` için bir `area` metodu tanımlanıp bir örnek üzerinde çağrılır.

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }
}

fn main() {
    let dikdortgen = Rectangle { width: 5, height: 3 };
    println!("Alan: {}", dikdortgen.area());
}
```
