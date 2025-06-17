## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Akıllı İşaretçi Performansı Karşılaştırması  
#### ❓ Soru 279: Box, Rc ve Arc performansını karşılaştırma

Aşağıdaki adımları izleyerek bir Rust programı yazın:

- `Box`, `Rc` ve `Arc` akıllı işaretçilerini kullanan üç farklı veri yapısı oluşturun.
- Her bir yapıda 100.000 tamsayıdan oluşan bir vektörü sarmalayın.
- Her bir akıllı işaretçiyle vektöre erişim ve okuma işlemlerinin süresini ölçün.
- Sonuçları karşılaştırarak hangi akıllı işaretçinin daha hızlı olduğunu gözlemleyin.

🔧 **Görev:** `std::time::Instant` kullanarak, `Box`, `Rc` ve `Arc` ile sarmalanmış vektörlerde okuma işlemlerinin hızını ölçün ve karşılaştırın.
