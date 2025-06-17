## 📘 Bölüm: Koleksiyonlar ve İteratörler  
### 🔹 Kategori: Özel iteratör struct'ları  
#### ✅ Cevap 337: `impl Iterator` ile özel iteratör struct'ı oluşturma

Bu örnekte, 1'den 5'e kadar sayıları üreten bir sayaç struct'ı tanımlanıyor ve `Iterator` trait'i uygulanıyor. `next` metodu her çağrıldığında bir sonraki sayıyı döndürür. Bu özel iteratör ile tüm değerler ekrana yazdırılır.

```rust
struct Counter {
    current: u32,
    max: u32,
}

impl Counter {
    fn new(max: u32) -> Self {
        Counter { current: 1, max }
    }
}

impl Iterator for Counter {
    type Item = u32;
    fn next(&mut self) -> Option<Self::Item> {
        if self.current <= self.max {
            let val = self.current;
            self.current += 1;
            Some(val)
        } else {
            None
        }
    }
}

fn main() {
    let counter = Counter::new(5);
    for number in counter {
        println!("{}", number);
    }
}
```
