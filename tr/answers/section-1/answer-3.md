## 📘 Bölüm: Başlangıç  
### 🔹 Kategori: Değişkenler ve Sabitler  
#### ✅ Cevap 3: Rust'ta `let` ve `const` arasındaki fark

**Açıklama:**

Rust'ta `let` değişken tanımlamak için kullanılır ve değişkenler istersek değiştirilebilir (mutable) olabilir. `const` ise sabit tanımlamak için kullanılır, tür belirtmek zorunludur ve değeri derleme zamanında sabitlenir, değiştirilemez.

```rust
fn main() {
    // let ile değiştirilebilir değişken
    let mut x = 5;
    // const ile sabit (tür belirtmek zorunlu)
    const Y: i32 = 10;

    x = 7; // x'in değeri değiştirilebilir
    // Y = 12; // Bu satır hata verir, çünkü sabitler değiştirilemez

    println!("x: {}", x);
    println!("Y: {}", Y);
}
```
