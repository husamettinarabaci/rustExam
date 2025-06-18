## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: Düşük maliyetli paralel algoritmalar implementasyonu
#### ❓ Soru 910: Düşük maliyetli paralel algoritmalar implementasyonu

Aşağıdaki adımları izleyen bir Rust fonksiyonu yazın:

- 1'den 100.000'e kadar tamsayıları içeren bir vektör oluşturun.
- Paralel iteratör (ör: `rayon`) ile her elemanı paralel olarak karesini alın.
- Sonuçları yeni bir vektöre toplayıp ilk 10 elemanı yazdırın.

🔧 **Görev:** Hesaplamayı verimli şekilde paralelleştirmek için `rayon::prelude::*` ve `par_iter().map()` kullanın.
