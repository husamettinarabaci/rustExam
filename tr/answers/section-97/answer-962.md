## 📘 Bölüm: Derleyici İç Yapısı ve Dil Tasarımı  
### 🔹 Kategori: HIR ve MIR dönüşümlerini anlama  
#### ✅ Cevap 962: HIR ve MIR dönüşümlerini anlama

HIR (High-level Intermediate Representation), Rust kodunun sözdizimsel olarak sadeleştirilmiş ve analiz için uygun hale getirilmiş halidir. MIR (Mid-level Intermediate Representation) ise optimizasyon ve borrow checker için kullanılan daha düşük seviyeli bir temsildir.

Örneğin, `let x = a + b;` kodu önce HIR'e, ardından MIR'e dönüştürülür. HIR, kodun yapısını korurken, MIR daha çok kontrol akışı ve veri hareketine odaklanır. MIR, derleyicinin güvenlik ve optimizasyon analizlerini yaptığı aşamadır.
