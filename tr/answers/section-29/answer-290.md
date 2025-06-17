## 📘 Bölüm: Desen Eşleme ve Kontrol Akışı  
### 🔹 Kategori: Derin iç içe veri yapılarında desen eşleme  
#### ✅ Cevap 290: Derin iç içe veri yapılarında desen eşleme

Bu örnekte, iç içe struct ve enum'lar içeren bir veri yapısı tanımlanır. `match` ifadesiyle iç içe desen eşleme kullanılarak en içteki değer çıkarılır ve terminale yazdırılır. Bu, Rust'ta karmaşık veri yapılarını desen eşleme ile nasıl işleyebileceğinizi gösterir.

```rust
enum Inner {
    Value(i32),
    None,
}

struct Outer {
    inner: Inner,
}

fn main() {
    let data = Outer { inner: Inner::Value(42) };
    match data {
        Outer { inner: Inner::Value(val) } => println!("En içteki değer: {}", val),
        Outer { inner: Inner::None } => println!("Değer yok"),
    }
}
```
