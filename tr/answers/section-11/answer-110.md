## 📘 Bölüm: Traitler ve Nesne Güvenliği  
### 🔹 Kategori: Object Safety  
#### ✅ Cevap 110: Object safety nedir?

**Açıklama:**
"Object safety", bir trait'in trait object olarak kullanılabilmesi için karşılaması gereken kurallardır. Örneğin, trait fonksiyonları `Self` tipini döndürmemeli ve generic olmamalıdır. Object safe olmayan trait'ler trait object olarak kullanılamaz.
