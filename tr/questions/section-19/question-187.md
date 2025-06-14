## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Atomik Tipler  
#### ❓ Soru 187: Kilitsiz eşzamanlılık için atomik tipler kullanımı

Birden fazla thread'in `AtomicUsize` kullanarak bir sayacı kilit olmadan artırdığı bir Rust programı yazın.

- `std::sync::Arc` ve `std::sync::atomic::AtomicUsize` kullanın.
- Birden fazla thread başlatıp sayacı artırın.
- Tüm thread'ler bitince sonucu yazdırın.

🔧 **Görev:** Atomik tiplerle kilitsiz eşzamanlılık gösterin.
