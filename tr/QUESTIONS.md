# Rust Sınavı: Soru Listesi

Aşağıda, bölümlere göre gruplanmış toplam 250 sorunun tam listesi bulunmaktadır. Her bölümde 10 soru vardır ve numaralandırma, küresel tutarlılık için 1'den 250'ye kadar devam eder.

---

## 1. Başlangıç
1. Temel bir Rust programı ile terminale çıktı verme
2. Rust'ta yorum satırı ekleme
3. Rust'ta `let` ve `const` arasındaki fark
4. Rust'ta değişken gölgeleme kullanımı
5. `as` ile sayı türlerini dönüştürme
6. Cargo ile basit bir Rust projesi oluşturma
7. Terminale birden fazla satır yazdırma
8. Stringlerde kaçış karakterleri kullanımı
9. Çok satırlı yorum yazma
10. Terminalden bir Rust programı derleyip çalıştırma

## 2. Değişkenler, Sabitler ve Türler
11. Bir demet (tuple) tanımlama ve elemanlarına erişme
12. Demet ile değer atama (destructuring)
13. Bir dizi (array) tanımlama ve elemanlarına erişme
14. `for` döngüsü ile dizi elemanlarını yazdırma
15. Değiştirilebilir ve değiştirilemez değişkenler tanımlama
16. Sabit tanımlama ve kullanma
17. Değişken tanımlarında tür çıkarımı
18. Gölgeleme ile değişken türünü değiştirme
19. Karakter türleri oluşturma ve kullanma
20. Temel sayısal türleri kullanma (i32, u32, f64, vb.)

## 3. Kontrol Akışı
21. `if`, `else if` ve `else` kullanımı
22. Değer döndüren ifade olarak `if` kullanımı
23. `match` ile sayıya göre çıktı üretme
24. `loop` ve `break` ile sayaç döngüsü oluşturma
25. `while` ile koşullu sayma
26. `for` ve aralık ile yineleme
27. Belirli bir değerde `for` döngüsünü kırma
28. `continue` ile döngü adımını atlama
29. Birden fazla desenle `match` kullanımı
30. Desen eşlemede `if let` kullanımı

## 4. G/Ç Temelleri
31. Terminalden satır okuma
32. Kullanıcı girdisini sayıya çevirme
33. Girdi hatalarını düzgün şekilde ele alma
34. Girdiden boşlukları temizleme
35. Girdiden tek karakter okuma
36. EOF'ya kadar okuma
37. İstemli (prompt) giriş okuma
38. Ondalıklı sayı okuma ve çevirme
39. Girdiyi bir vektöre okuma
40. Dosyadan giriş okuma

## 5. Fonksiyonlar I
41. Basit bir fonksiyon tanımlama
42. Parametreli ve dönüş değerli fonksiyon
43. `main` fonksiyonundan başka bir fonksiyon çağırma
44. Hiçbir şey döndürmeyen fonksiyon (`()`)
45. Çoklu parametreli fonksiyon
46. Açık dönüş ifadeli fonksiyon
47. Başka bir fonksiyon çağıran fonksiyon
48. Varsayılan argümanlı fonksiyon (simüle)
49. Demet döndüren fonksiyon
50. Demeti parametre olarak alan fonksiyon

## 6. Fonksiyonlar II
51. Fonksiyon kapsamı ve değişken ömrü
52. İç içe fonksiyon çağrıları
53. Closure'lara giriş
54. Fonksiyon döndüren fonksiyon
55. Closure parametreli fonksiyon
56. Jenerik parametreli fonksiyon
57. Trait sınırı parametreli fonksiyon
58. Özyinelemeli (recursive) fonksiyon
59. Erken dönüşlü fonksiyon
60. Yan etkili fonksiyon

## 7. Sahiplik ve Ödünç Alma I
61. Sahiplik aktarımını gösterme
62. Değişkenlerle taşıma (move) semantiği
63. Fonksiyon parametrelerinde sahiplik
64. Fonksiyondan sahiplik döndürme
65. Kopyalanan türler ve taşınan türler
66. Referanslarla ödünç alma
67. Değiştirilebilir referanslar ve ödünç alma kuralları
68. Birden fazla değiştirilemez referans
69. Referans kapsamı ve ömürler
70. Geçersiz referanslar ve önlenmesi

## 8. Ömürler I
71. Fonksiyon imzasında temel ömür belirtimi
72. Çoklu referanslarla ömür
73. Ömür çıkarım kuralları
74. Ömür parametreli yapılar
75. Ömür hataları ve çözümleri
76. Fonksiyon dönüşlerinde ömür
77. Metot alıcılarında ömür
78. Closure'larda ömür
79. Jenerik yapılarda ömür
80. Trait nesnelerinde ömür

## 9. Yapılar I
81. Bir yapı tanımlama ve örnek oluşturma
82. Yapı alanlarına erişim
83. Çok alanlı yapı
84. Yapı güncelleme sözdizimi
85. Demet yapılar ve birim benzeri yapılar
86. Yapıyı debug ile yazdırma
87. Referans içeren yapılar
88. Ömürlü yapılar
89. Metotlu yapılar
90. İlişkili fonksiyonlu yapılar

## 10. Yapılar II
91. `impl` ile metot tanımlama
92. İlişkili fonksiyonlar (yapıcılar)
93. `&self` ve `&mut self` alan metotlar
94. Değer döndüren metot
95. Zincirleme metotlar
96. Kendi kendini döndüren metot
97. Varsayılan implementasyonlu metot
98. Trait sınırı olan metot
99. Ömürlü metot
100. Statik değişkenli metot

## 11. Enumlar I
101. Temel bir enum tanımlama
102. Varyantlara veri eklenen enum
103. Enumlarda desen eşleme
104. Enum ve `match` ile yazdırma
105. `impl` ile enum metotları
106. Option enum kullanımı
107. Demet varyantlı enum
108. Yapı varyantlı enum
109. Varsayılan değerli enum
110. İlişkili fonksiyonlu enum

## 12. Enumlar II
111. Match kollarında desen koruyucular
112. Birden fazla desenle eşleme
113. İç içe enumlar ve eşlemeler
114. Enumlarla `if let` kullanımı
115. Option üzerinde eşleme
116. Result üzerinde eşleme
117. İç içe enumlarda eşleme
118. `while let` ile eşleme
119. `ref` ve `mut` ile eşleme
120. Joker desenle eşleme

## 13. Modüller I
121. Aynı dosyada modül tanımlama
122. Organizasyon için `mod` ve `use` kullanımı
123. Kodu birden fazla dosyaya bölme
124. Başka bir modülden öğeye erişim
125. Modül görünürlüğü temelleri
126. Modül içe aktarma
127. Modül yeniden dışa aktarma
128. Modül dokümantasyonu
129. Modül testleri
130. Modül sabitleri

## 14. Modüller II
131. `pub` ile herkese açık öğeler
132. Modüllerde gizlilik kuralları
133. Yollar ve `super` anahtar kelimesi
134. `pub use` ile yeniden dışa aktarma
135. İç içe modüller ve görünürlük
136. `pub(crate)` ve `pub(super)` kullanımı
137. `as` ile içe aktarma
138. Birden fazla öğe içe aktarma
139. Glob (`*`) ile içe aktarma
140. Makro içe aktarma

## 15. Crate'ler ve Harici Paketler
141. Cargo ile yeni crate oluşturma
142. `Cargo.toml` dosyasına bağımlılık ekleme
143. Koda harici crate ekleme
144. Bağımlılık sürümleme ve güncelleme
145. İçe aktarmalar için `use crate::` kullanımı
146. Crate yayınlama
147. Cargo.toml'da sürümleme
148. Cargo.toml'da özellik kullanımı
149. Geliştirme bağımlılıkları kullanımı
150. Derleme betikleri kullanımı

## 16. Koleksiyonlar: Vektörler
151. Vektör oluşturma ve başlatma
152. Vektöre eleman ekleme ve çıkarma
153. Vektör elemanlarına güvenli erişim
154. Vektör üzerinde yineleme
155. Vektör elemanlarını değiştirme
156. Vektörü dilimleme
157. Vektörü sıralama
158. Vektörden eleman çıkarma
159. Vektöre eleman ekleme
160. Yapı vektörü

## 17. İleri Düzey Desenler
161. İç içe struct ve enum'ları parçalara ayırma (destructuring)
162. Match kollarında desen koruyucular (pattern guard) kullanma
163. Aralıklar ve bağlamalar üzerinde eşleme
164. Desenlerde `_` ile değerleri yoksayma
165. Desenlerde `ref` ve `ref mut` kullanımı
166. Desenlerde `@` bağlamalarını kullanma
167. Slice ve dizilerde desen eşleme
168. Fonksiyon parametrelerinde tuple parçalara ayırma
169. `|` ile birden fazla desen kullanma
170. Referanslar ve dereference işlemleriyle desen eşleme

## 18. Koleksiyonlar: HashMap
171. `HashMap` oluşturma ve değer ekleme
172. `HashMap`'te değerleri erişme ve güncelleme
173. Anahtar-değer çiftleri üzerinde yineleme
174. Anahtar kontrolü ve giriş silme
175. `HashMap`'te string olmayan anahtarlar
176. Özel türlerle HashMap
177. HashMap ve sahiplik
178. HashMap ve referanslar
179. HashMap ve ömürler
180. HashMap ile Option/Result kullanımı

## 19. Option ve Result Türleri
181. Nullable değerler için `Option` kullanımı
182. `Option`'ı açma ve eşleme
183. Hata yönetimi için `Result` kullanımı
184. `?` ile hata iletimi
185. Birden fazla hata türüyle başa çıkma
186. `Option` ve `Result` metodlarını zincirleme
187. `unwrap_or` ve `unwrap_or_else` kullanımı
188. Option'da `map` ve `and_then` kullanımı
189. Result'ta `map_err` kullanımı
190. Fonksiyonlarda Option ve Result

## 20. Hata Yönetimi
191. `expect` ve `unwrap`'ı güvenli kullanma
192. Özel hata türleri oluşturma
193. Fonksiyonlardan `Result` döndürme
194. Dinamik hatalar için `Box<dyn Error>` kullanımı
195. Hataları iletme
196. main fonksiyonunda hata yönetimi
197. Kütüphanelerde hata yönetimi
198. match ile hata yönetimi
199. if let ile hata yönetimi
200. unwrap_or ile hata yönetimi

## 21. Traitler I
201. Trait tanımlama ve implementasyonu
202. Traitlerde varsayılan metotlar
203. Trait nesneleri kullanımı
204. Trait metotlarını çağırma
205. Harici türler için trait implementasyonu
206. Fonksiyon imzalarında trait sınırları
207. Birden fazla trait sınırı
208. `where` ifadeleri kullanımı
209. Blanket implementasyonlar
210. İlişkili türlü traitler

## 22. Jenerikler I
211. Jenerik fonksiyonlar
212. Jenerik yapılar
213. Enumlarda jenerik kullanımı
214. `impl` içinde jenerik metotlar
215. Jeneriklerde tür çıkarımı
216. Jenerik trait implementasyonları
217. Jenerik tür parametreleri
218. Jenerik ömür parametreleri
219. Jenerik ilişkili türler
220. Jenerik kısıtlamalar

## 23. Jenerikler II
221. Birden fazla jenerik parametre
222. Jenerik trait sınırları
223. Jenerik where ifadeleri
224. Ömürlü jenerik fonksiyonlar
225. Ömürlü jenerik yapılar
226. Ömürlü jenerik enumlar
227. Ömürlü jenerik metotlar
228. Jenerik trait nesneleri
229. Jenerik tür takma adları
230. Jenerik sabit parametreler

## 24. Closure ve İteratör Temelleri
231. Closure tanımlama ve çağırma
232. Closure'ları fonksiyonlara parametre olarak geçirme
233. `iter`, `map` ve `filter` kullanımı
234. İteratörleri `collect` ile tüketme
235. İteratör metotlarını zincirleme
236. `fold` ve `reduce` kullanımı
237. `find` ve `position` kullanımı
238. `enumerate` ve `zip` kullanımı
239. `any` ve `all` kullanımı
240. `peekable` ve `cycle` kullanımı

## 25. Closure ve Sahiplik
241. Closure'ın referans ile yakalaması
242. Closure'ın değer ile yakalaması (`move`)
243. Closure'da yakalanan değişkenleri değiştirme
244. Fonksiyonlardan closure döndürme
245. Closure ve değişkenlerin ömrü
246. Closure'lar yapı alanı olarak
247. Closure ve trait sınırları
248. Closure ve async fonksiyonlar
249. Closure ve hata yönetimi
250. Closure ve özyineleme

---

Tüm içerik Türkçe olarak sunulmuştur. Her bölümde 10 soru vardır ve toplamda 250 soru, ardışık olarak numaralandırılmıştır.
