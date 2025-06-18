## 📘 Bölüm: İleri Sahiplik: Grafikler, Döngüler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: RefCell ile İçsel Değiştirilebilirlik ve Panik Takibi  
#### ❓ Soru 703: RefCell ile değiştirilebilir veriyi ödünç alma ve panikleri izleme

Aşağıdakileri yapan bir Rust programı yazın:

- `RefCell<T>` ile bir değeri hem değiştirilemez hem de değiştirilebilir olarak ödünç alın.
- Aynı anda birden fazla değiştirilebilir ödünç almaya çalışarak panik oluşumunu gösterin.
- Panik mesajını ve nedenini açıklayın.

🔧 **Görev:** `RefCell` ile ödünç alma kurallarının çalışma zamanında nasıl denetlendiğini ve ihlal edildiğinde panik oluştuğunu gösteren bir örnek hazırlayın.
