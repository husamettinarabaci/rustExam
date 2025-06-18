## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: Rayon ile veri paralelliği kullanımı
#### ❓ Soru 901: `rayon` ile veri paralelliği kullanımı

Aşağıdaki adımları izleyen bir Rust programı yazın:

- 1'den 1.000.000'a kadar tamsayıları içeren bir vektör oluşturun.
- `rayon` crate'inin paralel iteratörlerini kullanarak tüm elemanların toplamını paralel olarak hesaplayın.
- Sonucu terminale yazdırın.

🔧 **Görev:** Büyük bir vektör üzerinde paralel toplam almak için `rayon::prelude::*` ve `par_iter()` kullanın.
