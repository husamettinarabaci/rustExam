## 📘 Bölüm: Jenerikler II  
### 🔹 Kategori: Birden fazla jenerik parametre  
#### ✅ Cevap 221: Birden fazla jenerik parametre

Birden fazla jenerik parametre virgülle ayrılarak tanımlanır.

```rust
fn cift<T, U>(a: T, b: U) -> (T, U) {
    (a, b)
}

struct Nokta<T, U> {
    x: T,
    y: U,
}
```
