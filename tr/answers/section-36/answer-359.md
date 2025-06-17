## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Closure ve fonksiyon işaretçisi karşılaştırması  
#### ✅ Cevap 359: Closure ve fonksiyon işaretçilerini karşılaştırma

Closure'lar ortamlarındaki değişkenleri yakalayabilirken, fonksiyon işaretçileri yalnızca bağımsız fonksiyonları gösterebilir ve ortamdan veri yakalayamaz. Closure'lar `Fn`, `FnMut`, `FnOnce` trait'lerini uygular, fonksiyon işaretçileri ise `fn` tipindedir.

```rust
fn add_fn(x: i32, y: i32) -> i32 {
    x + y
}

fn main() {
    let a = 5;
    // Closure ortamdan 'a' değişkenini yakalıyor
    let add_closure = |x: i32| x + a;
    // Fonksiyon işaretçisi
    let f: fn(i32, i32) -> i32 = add_fn;

    println!("Closure ile: {}", add_closure(3)); // 8
    println!("Fonksiyon işaretçisi ile: {}", f(3, 4)); // 7
}
```
