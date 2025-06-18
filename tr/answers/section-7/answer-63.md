## 📘 Bölüm: Sahiplik ve Ödünç Alma I  
### 🔹 Kategori: Fonksiyon Parametrelerinde Sahiplik  
#### ✅ Cevap 63: Fonksiyon parametrelerinde sahiplik

Bir fonksiyon parametreyi değer olarak (referanssız) alırsa, sahiplik aktarılır. Fonksiyon çağrısından sonra orijinal değişken kullanılamaz.

```rust
fn sahipligi_al(s: String) {
    println!("Alındı: {}", s);
}

fn main() {
    let mesaj = String::from("merhaba");
    sahipligi_al(mesaj); // sahiplik burada aktarılır
    // println!("{}", mesaj); // hata: move sonrası mesaj artık geçersiz
}
```

`println!("{}", mesaj);` satırının yorumunu kaldırırsanız, derleyici mesaj'ın artık geçersiz olduğunu belirten bir hata verecektir.
