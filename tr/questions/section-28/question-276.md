## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: RefCell'den Veri Ödünç Alma ve Panic Yönetimi  
#### ❓ Soru 276: `RefCell`'den veri ödünç alma ve paniklerin yönetimi

Aşağıdaki adımları izleyerek bir Rust programı yazın:

- Bir yapının alanını `RefCell<T>` ile sarmalayın.
- Aynı anda birden fazla mutable borrow denemesi yaparak panik oluşumunu gösterin.
- Panik oluşumunu önlemek için `try_borrow_mut` yöntemini kullanın ve sonucu yönetin.

🔧 **Görev:** `RefCell` ile veri ödünç alırken oluşabilecek panikleri önlemek için güvenli bir örnek oluşturun ve `try_borrow_mut` ile hata yönetimini gösterin.
