## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: Async tekrar deneme ve geri çekilme mekanizmaları  
#### ❓ Soru 554: Async tekrar deneme ve geri çekilme mekanizmaları

Aşağıdakileri yapan bir Rust fonksiyonu yazın:

- Bir async işlemi (örneğin başarısız olabilen bir HTTP isteği) simüle edin.
- İşlem başarısız olursa belirli bir sayıda tekrar deneyin.
- Her denemede bekleme süresini artırarak (exponential backoff) tekrar deneyin.
- Sonuçta başarılı olup olmadığını yazdırın.

🔧 **Görev:** Async fonksiyonlarda tekrar deneme ve geri çekilme (backoff) mantığını uygulayın.
