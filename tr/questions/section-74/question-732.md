## 📘 Bölüm: Trait Nesneleri ve VTable Mekanikleri  
### 🔹 Kategori: Trait Nesneleri ve Bellek Düzeni  
#### ❓ Soru 732: Fat pointer'ın (veri + vtable) bellek düzenini anlama

Aşağıdakileri gösteren bir Rust programı ve açıklama yazın:

- Trait nesneleri bağlamında fat pointer nedir?
- Bir `&dyn Trait` veya `Box<dyn Trait>`'in hem veri hem de vtable işaretçisi içerdiğini gösterin.
- Bir somut tipe referans ile trait nesnesine referansın boyut farkını `std::mem::size_of` ile gösterin.

🔧 **Görev:** Rust'ta trait nesneleri için fat pointer yapısını ve boyutunu gösterin.
