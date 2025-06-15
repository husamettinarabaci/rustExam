## 📘 Bölüm: Option ve Result Türleri  
### 🔹 Kategori: Option Kombinatörleri  
#### ✅ Cevap 188: Option'da `map` ve `and_then` kullanımı

`map` metodu, bir `Option` içindeki değeri varsa dönüştürmenizi sağlar. `and_then` ise (diğer adıyla `flat_map`), yine bir `Option` döndüren işlemleri zincirlemenize olanak tanır. Bu, adım adım başarısız olabilecek işlemleri birleştirmek için kullanışlıdır.

```rust
fn main() {
    let value = Some(5);
    let result = value
        .map(|x| x * 2) // Değeri ikiyle çarpar: Some(10)
        .and_then(|x| if x % 2 == 0 { Some(x) } else { None }); // Sadece çift sayıları korur
    println!("Sonuç: {:?}", result); // Çıktı: Sonuç: Some(10)

    let value = Some(3);
    let result = value
        .map(|x| x * 2) // Değeri ikiyle çarpar: Some(6)
        .and_then(|x| if x % 4 == 0 { Some(x) } else { None }); // Sadece 4'ün katlarını korur
    println!("Sonuç: {:?}", result); // Çıktı: Sonuç: None
}
```
