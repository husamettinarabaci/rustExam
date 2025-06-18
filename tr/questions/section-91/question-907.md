## 📘 Bölüm: İleri Paralellik ve SIMD
### 🔹 Kategori: SIMD ve async iş yüklerini birleştirme
#### ❓ Soru 907: SIMD ve async iş yüklerini birleştirme

Aşağıdaki adımları izleyen bir Rust programı yazın:

- Büyük bir `f32` vektörü oluşturun.
- Async bir fonksiyonla vektörü parçalara bölüp her parçayı SIMD ile (ör: 2.0 ile çarpma) paralel işleyin.
- Sonuçları toplayıp yazdırın.

🔧 **Görev:** Async yürütme için `tokio`, SIMD işlemleri için `packed_simd` veya `std::simd` kullanın.
