## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: `while let` ile desen eşleme
#### ✅ Cevap 384: `while let` ile desen eşleme

Bu soruda, bir koleksiyonun elemanları `while let` ile sırayla alınır ve işlenir. Bu, Rust'ta iterator ve koleksiyonlarla çalışırken desen eşlemenin pratik bir yoludur.

```rust
fn main() {
    let mut numbers = vec![1, 2, 3].into_iter();
    while let Some(n) = numbers.next() {
        println!("Number: {}", n);
    }
}
```
