## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Closure Temelleri  
#### ✅ Cevap 352: Closure'ları fonksiyonlara argüman olarak geçirme

Closure'lar, fonksiyonlara parametre olarak geçirilebilir. Bu örnekte, bir closure fonksiyona argüman olarak verilir ve fonksiyon closure'ı çağırır.

```rust
fn call_closure<F: Fn()>(f: F) {
    f();
}

fn main() {
    let my_closure = || println!("Closure çalıştı!");
    call_closure(my_closure);
}
```
