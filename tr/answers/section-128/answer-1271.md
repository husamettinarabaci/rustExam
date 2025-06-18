## 📘 Bölüm: Derleme Zamanı Motorları ve Metaprogramlama
### 🔹 Kategori: Const Fonksiyonlar
#### ✅ Cevap 1271: Derleme zamanı hesaplamalar için `const fn` kullanımı

Rust'ta `const fn` ile hesaplamalar derleme zamanında yapılabilir. Faktoriyel örneği:

```rust
const fn faktoriyel(n: u32) -> u32 {
    if n == 0 { 1 } else { n * faktoriyel(n - 1) }
}

const FAKT5: u32 = faktoriyel(5);

fn main() {
    println!("5'in faktoriyeli: {}", FAKT5);
}
```

`FAKT5` değeri derleme zamanında hesaplanır.
