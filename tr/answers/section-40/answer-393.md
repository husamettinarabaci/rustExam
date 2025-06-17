## 📘 Bölüm: String ve Metinle Çalışma
### 🔹 Kategori: String Üzerinde Yineleme
#### ✅ Cevap 393: Stringlerde karakter ve byte üzerinde yineleme

`chars` ile yineleme Unicode karakterlerini, `bytes` ile ise UTF-8 byte'larını verir. Bazı karakterler birden fazla byte olabilir.

```rust
fn main() {
    let s = "merhâba";
    println!("Karakterler:");
    for c in s.chars() {
        println!("{}", c);
    }
    println!("Byte'lar:");
    for b in s.bytes() {
        println!("{}", b);
    }
}
```
