## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Kopyalanan Türler ve Taşınan Türler  
#### ✅ Cevap 65: Kopyalanan türler ve taşınan türler

Rust'ta, `i32` gibi türler `Copy` trait'ini uygular ve atama ile değer kopyalanır. `String` gibi türler ise taşınır (move edilir), yani sahiplik aktarılır.

```rust
fn main() {
    let x = 10; // i32 Copy'dir
    let y = x;
    println!("x: {}, y: {}", x, y); // ikisi de çalışır

    let s1 = String::from("merhaba"); // String Move'dur
    let s2 = s1;
    // println!("{}", s1); // hata: move sonrası s1 artık geçersiz
    println!("{}", s2); // çalışır
}
```

`x` değişkeni atamadan sonra da kullanılabilir, ancak `s1` kullanılamaz çünkü sahipliği `s2`'ye taşınmıştır.
