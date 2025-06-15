## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: `&self` ve `&mut self` alan metotlar  
#### ✅ Cevap 93: `&self` ve `&mut self` alan metotlar

Rust'ta metotlar, `&self` ile değiştirilemez, `&mut self` ile değiştirilebilir erişim sağlar. Burada, `Counter` adında bir yapı, `value` (değiştirilemez) ve `increment` (değiştirilebilir) metotları ile örneklenmiştir.

```rust
struct Counter {
    count: i32,
}

impl Counter {
    fn value(&self) -> i32 {
        self.count
    }

    fn increment(&mut self) {
        self.count += 1;
    }
}

fn main() {
    let mut c = Counter { count: 0 };
    println!("Değer: {}", c.value());
    c.increment();
    println!("Artırıldıktan sonra değer: {}", c.value());
}
```
