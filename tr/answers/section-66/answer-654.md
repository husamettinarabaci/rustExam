## 📘 Bölüm: Unsafe Kod Desenleri ve Güvenlik
### 🔹 Kategori: Manuel bellek ayırma ve serbest bırakma
#### ✅ Cevap 654: Manuel bellek ayırma ve serbest bırakma

Rust'ta `Box`, `Vec` ve raw pointer'lar ile manuel bellek yönetimi yapılabilir. Belleğin doğru tahsis ve serbest bırakılması gerekir.

```rust
fn main() {
    let b = Box::new(10); // Bellek ayırır
    println!("{}", b);
    // b kapsamdan çıkınca bellek serbest bırakılır
}
```

Raw pointer ile `Box::into_raw` ve `Box::from_raw` kullanılır. Çift serbest bırakma veya serbest bırakılmış belleğe erişimden kaçının.
