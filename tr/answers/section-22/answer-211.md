## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Jenerik Fonksiyonlar  
#### ✅ Cevap 211: Jenerik fonksiyonlar

Jenerik fonksiyonlar, birçok türle çalışabilen kod yazmanıza olanak tanır. Bu örnekte, `print_value` fonksiyonu `T` türü üzerinde jeneriktir ve `T: std::fmt::Display` trait sınırı ile yalnızca yazdırılabilir türleri kabul eder. Böylece fonksiyon, `Display`'i uygulayan herhangi bir değeri yazdırabilir.

```rust
fn print_value<T: std::fmt::Display>(value: T) {
    println!("{}", value);
}

fn main() {
    print_value(42);         // i32
    print_value("merhaba"); // &str
    print_value(3.14);       // f64
}
```
