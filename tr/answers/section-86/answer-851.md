## 📘 Bölüm: Bellek Güvenliği ve Statik Analiz
### 🔹 Kategori: Sahiplik Modeli İç Yapısı
#### ✅ Cevap 851: Rust'ın sahiplik modeli iç yapısını anlama

Rust'ın sahiplik modeli, her değerin bir sahibi olmasını ve aynı anda yalnızca bir sahip tarafından yönetilmesini sağlar. Ödünç alma (borrowing) ile referanslar geçici olarak paylaşılır, ömürler (lifetimes) ise referansların geçerlilik süresini belirler. Bu model, çöp toplayıcıya gerek kalmadan bellek güvenliğini garanti eder.

```rust
fn main() {
    let s = String::from("merhaba"); // s sahibi
    let r = &s; // ödünç alma (immutable reference)
    println!("{}", r);
} // s burada drop edilir
```

Sahiplik modeli, çift serbest bırakma ve use-after-free gibi hataları derleme zamanında engeller.
