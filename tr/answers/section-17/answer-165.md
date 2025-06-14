## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Desenlerde `ref` ve `ref mut` kullanımı  
#### ✅ Cevap 165: Desenlerde `ref` ve `ref mut` kullanımı

Rust'ta desenlerde referans ve değiştirilebilir referans oluşturmak için `ref` ve `ref mut` kullanılabilir. Örnek:

```rust
fn tuple_isle(mut t: (i32, i32)) {
    match t {
        (ref ilk, _) if *ilk > 0 => println!("İlk (ref ile): {}", ilk),
        (_, ref mut ikinci) if *ikinci < 0 => {
            *ikinci += 1;
            println!("İkinci (ref mut ile, artırıldı): {}", ikinci);
        }
        (ilk, ikinci) => println!("İlk: {}, İkinci: {}", ilk, ikinci),
    }
}
```

Bu fonksiyon, tuple desenlerinde `ref` ve `ref mut` kullanımını göstermektedir.
