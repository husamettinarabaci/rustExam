## 📘 Bölüm: Closure ve Fonksiyonel Teknikler  
### 🔹 Kategori: Closure Trait Bound'ları  
#### ✅ Cevap 353: `Fn`, `FnMut` ve `FnOnce` trait bound'ları kullanımı

Rust'ta closure parametreli fonksiyonlarda `Fn`, `FnMut` ve `FnOnce` trait bound'ları closure'ın nasıl çağrılabileceğini ve ne tür değişkenleri yakalayabileceğini belirler. `Fn` yalnızca immutable referansla çağrılabilir, `FnMut` mutable referansla çağrılabilir ve closure'ın iç durumu değişebilir, `FnOnce` ise closure'ın sahipliğini alır ve sadece bir kez çağrılabilir.

```rust
fn call_fn<F: Fn()>(f: F) {
    f();
}

fn call_fn_mut<F: FnMut()>(mut f: F) {
    f();
}

fn call_fn_once<F: FnOnce()>(f: F) {
    f();
}

fn main() {
    let x = 5;
    // Fn: Sadece okuma
    call_fn(|| println!("x is {}", x));

    let mut y = 10;
    // FnMut: Değişkeni değiştirme
    call_fn_mut(|| y += 1);
    println!("y is {}", y);

    let s = String::from("hello");
    // FnOnce: Sahipliği alır
    call_fn_once(|| drop(s));
    // s artık kullanılamaz
}
```
