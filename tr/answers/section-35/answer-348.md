## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Hata Ayıklama Araçları
#### ✅ Cevap 348: dbg! ve println! ile hata ayıklama

`dbg!` makrosu, bir ifadenin değerini ve bulunduğu satırı terminale yazdırır ve genellikle hızlı hata ayıklama için kullanılır. `println!` ise sadece verilen metni veya değeri yazdırır. `dbg!` çıktısı daha ayrıntılıdır ve değeri döndürürken, `println!` sadece ekrana yazar.

```rust
fn main() {
    let x = 42;
    dbg!(x); // Satır ve dosya bilgisiyle birlikte değeri yazdırır
    println!("x'in değeri: {}", x); // Sadece değeri yazdırır
}
```

Çıktı örneği:

```
[src/main.rs:3] x = 42
x'in değeri: 42
```
