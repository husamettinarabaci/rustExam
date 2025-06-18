## 📘 Bölüm: İleri Makro Tasarımı  
### 🔹 Kategori: Kod üretimi ve şablon azaltma için makrolar  
#### ✅ Cevap 815: Kod üretimi ve şablon azaltma için makrolar

Aşağıda, getter fonksiyonlarını otomatik üreten bir makro örneği verilmiştir. Bu makro, tekrarlı getter fonksiyonlarını yazma ihtiyacını ortadan kaldırır.

```rust
macro_rules! make_getters {
    ($name:ident { $($field:ident : $fty:ty),* }) => {
        struct $name {
            $(pub $field: $fty),*
        }
        impl $name {
            $(pub fn $field(&self) -> &$fty { &self.$field })*
        }
    }
}

make_getters!(Person { name: String, age: u32 });

fn main() {
    let p = Person { name: "Ali".to_string(), age: 30 };
    println!("{} {}", p.name(), p.age());
}
```

Makro, struct ve getter fonksiyonlarını otomatik üretir.
