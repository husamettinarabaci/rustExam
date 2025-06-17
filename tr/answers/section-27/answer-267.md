## 📘 Bölüm: Ömürler ve Ödünç Alma Semantiği  
### 🔹 Kategori: Jenerik fonksiyon imzalarında ömür sınırları  
#### ✅ Cevap 267: Jenerik fonksiyon imzalarında ömür sınırları

Jenerik fonksiyonlarda ömür sınırları, bir tip parametresinin belirli bir ömre sahip referanslarla çalışmasını sağlar. Özellikle fonksiyonun hem jenerik hem de referans parametreleri olduğunda, ömür sınırı belirtmek gereklidir.

Aşağıdaki örnekte, bir fonksiyon bir referans ve jenerik tip alıyor. Jenerik tipin ömrü, referansın ömründen kısa olamaz:

```rust
// Hatalı (ömür sınırı eksik):
fn print_ref<T>(x: &T) {
    // ...
}
// Derleyici, T'nin ömrü hakkında bilgi isteyebilir.

// Doğru (ömür sınırı ile):
fn print_ref<'a, T: 'a>(x: &'a T) {
    // ...
}
```

Burada `T: 'a` ifadesi, T'nin en az `'a` ömrüne sahip olmasını zorunlu kılar. Bu, jenerik tipin ömrüyle ilgili belirsizlikleri ortadan kaldırır.
