## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Cebirsel Veri Tipleri ile Modelleme  
#### ❓ Soru 308: Gelecekte Uyumluluk için #[non_exhaustive] Kullanımı

Bir enum için gelecekte yeni varyantlar eklenebilmesini sağlamak amacıyla `#[non_exhaustive]` özniteliğini kullanarak aşağıdakileri yapın:

- Farklı hata türlerini temsil eden bir enum tanımlayın (ör. DosyaHatasi, BaglantiHatasi).
- Enum'a `#[non_exhaustive]` özniteliğini ekleyin.
- Enum üzerinde bir `match` ifadesiyle desen eşleme yapın ve tüm varyantlar için çıktı üretin.
- Varsayılan (`_`) kolunu kullanarak gelecekte eklenebilecek varyantlara karşı kodunuzu güvenli hale getirin.

🔧 **Görev:** `#[non_exhaustive]` ile bir hata enum'u tanımlayın ve match ifadesinde joker kol kullanarak gelecekteki varyantlara karşı uyumlu bir desen eşleme gösterin.
