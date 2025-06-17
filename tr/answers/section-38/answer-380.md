## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik  
### 🔹 Kategori: Sahiplik ve ödünç alma fonksiyon sınırlarında  
#### ✅ Cevap 380: Sahiplik odaklı API'ler yazma

Bu örnekte, sahipliği aktaran ve ödünç alan fonksiyonlar içeren, ömür kurallarına uygun bir API tasarlanmıştır. `process_owned` fonksiyonu sahipliği alır ve koleksiyonu değiştirir. `process_borrowed` ise referansla ödünç alır ve sadece okuma yapar. Bu, Rust'ın sahiplik ve ödünç alma kurallarına uygun, güvenli bir API örneğidir.

```rust
fn process_owned(mut v: Vec<i32>) {
    v.push(42); // sahiplik alındığı için değiştirilebilir
    println!("Owned: {:?}", v);
}

fn process_borrowed(v: &[i32]) {
    println!("Borrowed: {:?}", v);
}

fn main() {
    let mut data = vec![1, 2, 3];
    process_borrowed(&data); // ödünç alma, veri değişmez
    process_owned(data);     // sahiplik aktarılır, data artık kullanılamaz
}
```
