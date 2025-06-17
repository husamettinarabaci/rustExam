## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik  
### 🔹 Kategori: Fonksiyonlardan referans döndürme (ömürlerle)  
#### ✅ Cevap 378: Fonksiyonlardan referans döndürme (ömürlerle)

Bir fonksiyondan referans döndürmek için ömür anotasyonları gereklidir. Aşağıdaki örnekte, bir vektörün ilk elemanına referans döndüren fonksiyonun ömür parametresi kullanılarak güvenli şekilde nasıl yazılacağı gösterilmiştir. Ayrıca, yanlış ömür kullanımı derleme hatasına yol açar.

```rust
fn first_element<'a>(v: &'a Vec<i32>) -> Option<&'a i32> {
    v.get(0)
}

fn main() {
    let numbers = vec![10, 20, 30];
    let first = first_element(&numbers);
    println!("First element: {:?}", first);

    // Yanlış örnek: Geçici bir vektörden referans döndürmek
    // fn bad_ref() -> &i32 {
    //     let x = 42;
    //     &x // HATA: `x` fonksiyon sonunda yok olur
    // }
}
```

Yukarıdaki doğru örnekte, fonksiyonun ömür parametresi vektörün ömrüne bağlıdır. Yanlış örnekte ise fonksiyon, fonksiyon kapsamı dışında geçerli olmayan bir referans döndürmeye çalışır ve bu derleme hatasına neden olur.
