## 📘 Bölüm: Ömür Sistemi ve HRTB Ustalığı  
### 🔹 Kategori: Fonksiyonlardan doğru ömürle referans döndürme  
#### ✅ Cevap 714: Fonksiyonlardan doğru ömürle referans döndürme

Aşağıda, bir koleksiyondan referans döndüren ve ömür belirtimi yapılan bir fonksiyon örneği verilmiştir.

```rust
fn get_first<'a>(v: &'a Vec<i32>) -> Option<&'a i32> {
    v.get(0)
}

fn main() {
    let numbers = vec![10, 20, 30];
    if let Some(val) = get_first(&numbers) {
        println!("İlk değer: {}", val);
    }
}
```

Fonksiyonun imzasındaki `'a` ömrü, hem giriş hem de çıkış referanslarının aynı ömre sahip olmasını sağlar. Böylece dönen referans, koleksiyonun ömrü kadar geçerlidir.
