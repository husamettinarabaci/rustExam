## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Fonksiyon Çağrıları Arasında Referans Zincirleri  
#### ✅ Cevap 265: Fonksiyon çağrıları arasında referans zincirleri modelleme

Birden fazla fonksiyonun referansları zincirleme şekilde iletebilmesi için ömür parametreleri kullanılır. Böylece, döndürülen referansın geçerliliği zincirdeki ilk referansa bağlı olur. Aşağıdaki örnekte, iki fonksiyon ardışık olarak referans döndürmektedir:

```rust
fn get_first<'a>(s: &'a str) -> &'a str {
    &s[0..1]
}

fn get_first_upper<'a>(s: &'a str) -> &'a str {
    let first = get_first(s);
    first
}

fn main() {
    let text = String::from("rust");
    let first = get_first_upper(&text);
    println!("İlk harf: {}", first);
}
```

Burada, tüm fonksiyonlar aynı ömür parametresini kullanarak referansın geçerliliğini zincir boyunca korur.
