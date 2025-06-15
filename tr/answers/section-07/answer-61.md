## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Sahiplik Aktarımı  
#### ✅ Cevap 61: Sahiplik aktarımını gösterme

Rust'ta, kopyalanamayan bir türü (ör. `String`) başka bir değişkene atadığınızda sahiplik aktarılır. Aktarımdan sonra orijinal değişkeni kullanmak derleme hatasına yol açar.

```rust
fn main() {
    let s1 = String::from("merhaba");
    let s2 = s1; // String'in sahipliği s2'ye taşındı
    // println!("{}", s1); // hata: move sonrası s1 artık geçersiz
    println!("{}", s2); // çalışır
}
```

`println!("{}", s1);` satırının yorumunu kaldırırsanız, derleyici s1'in artık geçersiz olduğunu belirten bir hata verecektir.
