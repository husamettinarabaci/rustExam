## 📘 Bölüm: Eşzamanlılık Tasarım Desenleri  
### 🔹 Kategori: Yük dengeleme ve iş çalma  
#### ✅ Cevap 1197: Yük dengeleme ve iş çalma

Yük dengeleme, işleri iş parçacıkları veya görevler arasında eşit dağıtmayı amaçlar. İş çalma ise boşta kalan iş parçacıklarının diğerlerinden iş "çalmasını" sağlar.

**Yük dengeleme mantığı:**
- İşler sırayla veya rastgele iş parçacıklarına atanır.

**İş çalma mantığı:**
- Her iş parçacığının kendi işi vardır; boşta kalanlar başkalarının kuyruğundan iş alır.

**Örnek (mantık):**
```rust
// Yük dengeleme: Thread havuzunda işleri sırayla dağıtmak.
// İş çalma: Rayon gibi kütüphaneler iş çalma algoritması kullanır.
```

Bu teknikler, paralel algoritmalar, büyük veri işleme ve yüksek performanslı uygulamalarda kullanılır.
