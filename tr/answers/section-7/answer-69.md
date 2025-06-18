## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Referans Kapsamı ve Ömürler  
#### ✅ Cevap 69: Referans kapsamı ve ömürler

Rust'ta referanslar yalnızca oluşturuldukları kapsamda geçerlidir. Bir referansı kapsamı dışında kullanmaya çalışırsanız, derleyici hata verir ve geçersiz (dangling) referansları engeller. Bu, Rust'ın ömür sistemiyle sağlanır.

```rust
fn main() {
    let x = 100;
    let r;
    {
        r = &x;
        println!("Scope içindeki referans: {}", r);
    } // r burada hala geçerli çünkü x yeterince uzun yaşıyor
    println!("İç scope sonrası referans: {}", r);
    // Aşağıdaki kod derleme hatası verir:
    // let r;
    // {
    //     let y = 200;
    //     r = &y;
    // } // y burada drop edilir
    // println!("Geçersiz referans: {}", r); // Hata!
}
```
