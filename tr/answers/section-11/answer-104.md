## 📘 Bölüm: Traitler ve Nesne Güvenliği  
### 🔹 Kategori: Trait Object Kullanımı  
#### ✅ Cevap 104: Box<dyn Trait> ve &dyn Trait farkı

**Açıklama:**
`Box<dyn Trait>`, trait object'ü heap'te saklar ve sahipliğini alır. `&dyn Trait` ise trait object'e referans ile erişim sağlar. `Box<dyn Trait>` ile sahiplik ve ömür yönetimi sağlanırken, `&dyn Trait` ile sadece geçici erişim mümkündür.
