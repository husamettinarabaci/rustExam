## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Move Semantiği  
#### ✅ Cevap 62: Değişkenlerle taşıma (move) semantiği

Rust'ta, kopyalanamayan bir türü (ör. `String`) başka bir değişkene atadığınızda değer taşınır ve orijinal değişken geçersiz olur. Buna move semantiği denir.

```rust
fn main() {
    let a = String::from("Rust");
    let b = a; // burada taşıma (move) gerçekleşir
    // println!("{}", a); // hata: move sonrası a artık geçersiz
    println!("{}", b); // çalışır
}
```

`println!("{}", a);` satırının yorumunu kaldırırsanız, derleyici a'nın artık geçersiz olduğunu belirten bir hata verecektir.
