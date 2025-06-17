## 📘 Bölüm: Koleksiyonlar ve İteratörler
### 🔹 Kategori: İteratörlerde tembel ve hevesli değerlendirme
#### ❓ Soru 339: İteratör boru hatlarında tembel ve hevesli değerlendirme

Aşağıdakileri yapan bir Rust programı yazın:

- Bir tamsayı vektörü oluşturun.
- `map` ve `filter` gibi iterator adaptörlerini zincirleyin, ancak çıktıyı yazdırmadan önce hiçbir işlem yapılmadığını gösterin.
- Sonucu bir koleksiyona toplamak için `collect` kullanın ve işlemlerin o anda gerçekleştiğini gösterin.
- Tembel (lazy) ve hevesli (eager) değerlendirme arasındaki farkı kod ile açıklayın.

🔧 **Görev:** İteratör adaptörlerinin tembel çalıştığını ve işlemlerin ancak bir tüketici (`collect`, `for`, vb.) ile tetiklendiğini gösteren bir örnek oluşturun.
