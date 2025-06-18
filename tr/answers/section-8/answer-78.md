## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Closure'larda Ömür  
#### ✅ Cevap 78: Closure'larda ömür

Bir closure bir referansı yakaladığında, closure'ın ömrü bu referansa bağlı olur. Eğer referans edilen değer scope dışına çıkarsa, closure'ı kullanmak derleme hatasına yol açar. Örnek:

```rust
fn main() {
    let s = String::from("closure ömrü");
    let uzunluk = || s.len(); // Closure s'yi ödünç alır
    println!("Uzunluk: {}", uzunluk());
    // Eğer s scope dışına çıksaydı, closure kullanılamazdı.
}
```

`s` değişkeni drop olduktan sonra closure'ı kullanmaya çalışırsanız, derleyici bunu engeller ve dangling reference oluşmaz.
