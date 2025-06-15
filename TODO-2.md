# 📦 rustPractitioner

This is the second 250-question set in the Rust learning path. It focuses on deepening your knowledge of Rust's ownership system, lifetimes, type system, concurrency model, and real-world architectural design. By completing this set, you'll master intermediate-to-advanced features that are essential for production-level Rust development.

---

## 26. Ownership in Complex Structures

251. Building nested structs with owned and borrowed fields  
252. Combining `Box`, `Rc`, and `RefCell` in a single data model  
253. Moving ownership across multiple layers of abstraction  
254. Modeling ownership transfer in domain logic  
255. Creating helper functions that preserve ownership semantics  
256. Borrowing parts of a composite struct safely  
257. Using pattern matching to destructure and move out fields  
258. Working with lifetime annotations in deeply nested functions  
259. Using `Cow` (Copy on Write) to handle flexible ownership  
260. Debugging common ownership-related compile errors

---

## 27. Lifetimes and Borrowing Semantics

261. Writing functions with multiple lifetimes  
262. Explaining the difference between `'static` and non-static lifetimes  
263. Using lifetimes in struct definitions  
264. Returning references from functions safely  
265. Modeling reference chains across function calls  
266. Using lifetime elision rules and understanding when they fail  
267. Lifetime bounds in generic function signatures  
268. Struct methods with multiple lifetime parameters  
269. Understanding lifetime variance and subtyping  
270. Explaining compiler lifetime errors and fixing them

---

## 28. Smart Pointers and Interior Mutability

271. Choosing between `Box`, `Rc`, and `Arc`  
272. Creating interior mutability with `RefCell<T>`  
273. Using `Rc<RefCell<T>>` in a single-threaded tree structure  
274. Using `Arc<Mutex<T>>` for shared mutable state in threads  
275. When to use `Cell<T>` instead of `RefCell<T>`  
276. Borrowing data from `RefCell` and handling panics  
277. Debugging borrow violations at runtime with `Ref` and `RefMut`  
278. Combining smart pointers in nested structures  
279. Comparing performance of `Box`, `Rc`, and `Arc`  
280. Understanding reference cycles and how to avoid them

---

## 29. Pattern Matching and Control Flow

281. Matching on enums and extracting nested data  
282. Using `if let` and `while let` for concise pattern matching  
283. Destructuring structs and tuples in match arms  
284. Matching on Option and Result values  
285. Using guards in match statements (`if` in `match`)  
286. Combining patterns with `|` and `_`  
287. Using `@` bindings to capture matched values  
288. Understanding exhaustive matching requirements  
289. Pattern matching with references and mutability  
290. Matching deeply nested data structures

---

## 30. Modules and Crate Structure

291. Defining and importing modules with `mod` and `use`  
292. Splitting code across multiple files and folders  
293. Managing visibility with `pub`, `pub(crate)`, `pub(super)`  
294. Re-exporting items from nested modules  
295. Using `crate::` and `super::` paths in large projects  
296. Declaring external dependencies in `Cargo.toml`  
297. Organizing tests in module trees  
298. Best practices for organizing library vs binary crates  
299. Documenting modules and public APIs  
300. Using idiomatic module structure in real-world crates

---

## 31. Enums, Variants, and Algebraic Data Types

301. Defining custom enums with data-carrying variants  
302. Using `Option<T>` and `Result<T, E>` idiomatically  
303. Implementing methods for enum types  
304. Matching enum variants with shared logic  
305. Creating recursive enums using `Box`  
306. Using enums for state machines and transitions  
307. Modeling domain logic with algebraic data types  
308. Using `#[non_exhaustive]` for forward-compatible enums  
309. Enum representation with `#[repr]` and FFI  
310. Pattern-matching enums with guards and bindings

---

## 32. Traits and Trait Bounds

311. Declaring and implementing custom traits  
312. Adding trait bounds to generic functions  
313. Using multiple trait bounds with `+` syntax  
314. Using `where` clauses to simplify function signatures  
315. Default method implementations in traits  
316. Implementing traits for types defined in other crates  
317. Using `impl Trait` in function return types  
318. Creating trait hierarchies with supertraits  
319. Using blanket implementations  
320. Understanding trait coherence and the orphan rule

---

## 33. Error Handling with Result and Option

321. Propagating errors with `?` operator  
322. Matching on `Result<T, E>` to handle errors  
323. Converting between `Option<T>` and `Result<T, E>`  
324. Creating and using custom error types  
325. Implementing the `Error` trait for custom types  
326. Using `unwrap`, `expect`, and their safe alternatives  
327. Composing fallible operations with combinators like `map_err`  
328. Using `anyhow` for simple application-level error handling  
329. Using `thiserror` to derive error enums  
330. Logging or reporting errors without panicking

---

## 34. Collections and Iterators

331. Working with `Vec`, `HashMap`, and `HashSet`  
332. Iterating over collections with `for` loops  
333. Using `.iter()`, `.iter_mut()`, and `.into_iter()`  
334. Chaining iterator adaptors like `map`, `filter`, `take`  
335. Collecting iterator results into collections  
336. Using `.enumerate()` and `.zip()` in iteration  
337. Creating custom iterator structs with `impl Iterator`  
338. Finding, folding, and reducing values from iterators  
339. Lazy vs eager evaluation in iterator pipelines  
340. Error handling in iterators that return `Result<T, E>`

---

## 35. Testing and Debugging

341. Writing unit tests with `#[test]`  
342. Using `assert_eq!`, `assert_ne!`, and `assert!` macros  
343. Organizing test modules in your crate  
344. Running tests with `cargo test` and filtering by name  
345. Writing integration tests in the `tests/` directory  
346. Using `#[should_panic]` to test failure conditions  
347. Writing benchmarks with unstable `#[bench]` (nightly)  
348. Using `dbg!` and `println!` for debugging  
349. Inspecting code with `cargo expand` or `cargo asm`  
350. Understanding test isolation and side effects

---

## 36. Closures and Functional Techniques

351. Defining closures and capturing variables from environment  
352. Passing closures to functions as arguments  
353. Using `Fn`, `FnMut`, and `FnOnce` trait bounds  
354. Returning closures from functions  
355. Storing closures in structs with `Box<dyn Fn>`  
356. Using higher-order functions to build pipelines  
357. Partial application with closures  
358. Chaining closures with iterator methods  
359. Comparing closures and function pointers  
360. Capturing and mutating variables with move closures

---

## 37. Modules and Visibility

361. Creating a module with `mod` and defining contents  
362. Using `pub`, `pub(crate)`, and private visibility  
363. Organizing code with nested modules  
364. Using `use` to bring names into scope  
365. Re-exporting items with `pub use`  
366. Separating modules into different files  
367. Initializing modules with `mod.rs` (or `mod` folders in 2018+)  
368. Accessing deeply nested items  
369. Avoiding circular dependencies with modular design  
370. Creating a library-style crate structure

---

## 38. Ownership Across Function Boundaries

371. Passing owned values to functions  
372. Returning owned values from functions  
373. Borrowing values immutably in parameters  
374. Borrowing values mutably in parameters  
375. Transferring ownership vs borrowing  
376. Avoiding double moves and use-after-move errors  
377. Returning references from functions (with lifetimes)  
378. Using `Copy` types in ownership scenarios  
379. Understanding ownership of slices and references  
380. Writing ownership-aware APIs

---

## 39. Advanced Pattern Matching

381. Matching enums with multiple variants  
382. Destructuring tuples and structs  
383. Using `if let` for conditional matching  
384. Pattern matching with `while let`  
385. Match guards and complex conditions  
386. Ignoring parts with `_` and `..`  
387. Nested pattern matching  
388. Refutable vs irrefutable patterns  
389. Using `@` bindings in match arms  
390. Pattern matching in function parameters

---

## 40. Working with Strings and Text

391. Creating and using `String` and `&str`  
392. Converting between `String`, `&str`, and `&[u8]`  
393. Iterating over characters and bytes in strings  
394. Slicing strings with ranges and handling UTF-8  
395. Concatenating and formatting strings  
396. Building strings with `format!` and `push_str`  
397. Searching and replacing substrings  
398. Splitting strings by delimiter or regex  
399. Handling invalid UTF-8 from external input  
400. Using `Cow<str>` for borrowed or owned string data

---

## 41. File I/O and the Filesystem

401. Opening and reading a file with `std::fs`  
402. Writing to a file with `write` and `append` modes  
403. Reading a file line by line with `BufReader`  
404. Creating and removing directories  
405. Checking if a file or path exists  
406. Using `Path` and `PathBuf` for safe file handling  
407. Walking a directory tree with `WalkDir` (third-party)  
408. Handling file permissions and metadata  
409. Copying, renaming, or deleting files  
410. Gracefully handling I/O errors with `Result`

---

## 42. Collections: Vec, HashMap, HashSet

411. Creating and initializing a `Vec`  
412. Adding and removing elements from a `Vec`  
413. Iterating over a vector by value, reference, and mutably  
414. Using `HashMap` to store key-value pairs  
415. Accessing and updating entries in a `HashMap`  
416. Checking for key existence with `contains_key`  
417. Using `HashSet` for unique unordered values  
418. Performing set operations (union, intersection, difference)  
419. Combining iterators and collections for filtering  
420. Choosing the right collection for your data model

---

## 43. Enums and Data Modeling

421. Defining enums with simple and complex variants  
422. Pattern matching on enums  
423. Using enums to model states and transitions  
424. Implementing methods on enums  
425. Adding traits like `Display` or `Debug` to enums  
426. Using enums inside structs and vice versa  
427. Modeling recursive data with `Box<Enum>`  
428. Combining enums and pattern guards  
429. Using enums to represent CLI commands or messages  
430. Leveraging enums for API error types

---

## 44. Smart Pointers and Resource Management

431. Understanding when to use `Box<T>`  
432. Using `Rc<T>` for reference-counted ownership  
433. Mutating shared data with `RefCell<T>`  
434. Combining `Rc<RefCell<T>>` in data structures  
435. Using `Arc<T>` for thread-safe reference counting  
436. Ensuring exclusive access with `Mutex<T>`  
437. Comparing `RefCell` and `Mutex` in practice  
438. Preventing memory leaks with `Weak<T>`  
439. Creating custom smart pointer wrappers  
440. Understanding RAII and destructor behavior with `Drop`

---

## 45. Lifetimes and Borrowing in Practice

441. Adding explicit lifetimes to function parameters  
442. Lifetime annotations for structs holding references  
443. Using lifetime elision rules properly  
444. Writing functions that return references  
445. Nested lifetimes and struct methods  
446. Static lifetime and its use cases  
447. Lifetime bounds in trait implementations  
448. Structs with multiple lifetime parameters  
449. Troubleshooting common lifetime errors  
450. Designing lifetime-safe APIs

---

## 46. Testing and Debugging

451. Writing unit tests with `#[test]`  
452. Grouping tests with `mod tests` and `cfg(test)`  
453. Using `assert_eq!`, `assert!`, and `assert_ne!`  
454. Testing for panics with `#[should_panic]`  
455. Using `cargo test` with filters and flags  
456. Writing integration tests in the `tests/` folder  
457. Mocking dependencies and isolating logic  
458. Debugging with `dbg!`, `println!`, and IDE tools  
459. Running benchmarks with `#[bench]` (nightly)  
460. Testing for performance regressions

---

## 47. Workspace and Package Organization

461. Creating a new Cargo workspace  
462. Adding multiple packages (crates) to a workspace  
463. Sharing code across crates with `path` dependencies  
464. Using `pub(crate)` and `pub(super)` for visibility control  
465. Refactoring large projects into logical crates  
466. Organizing modules and files inside a crate  
467. Re-exporting types with `pub use`  
468. Using `mod`, `use`, and `super` effectively  
469. Compiling and testing a multi-crate workspace  
470. Versioning and publishing workspace members

---

## 48. CLI Applications with Clap

471. Creating a basic CLI with `clap`  
472. Defining positional and optional arguments  
473. Using subcommands and argument groups  
474. Providing help and version output  
475. Validating argument values  
476. Combining `clap` with `structopt`-like derive macros  
477. Parsing flags and environment variables  
478. Reading config files with `clap` and merging sources  
479. Creating user-friendly error messages  
480. Structuring large CLI tools modularly

---

## 49. Web Development with Axum

481. Setting up a minimal Axum server  
482. Defining routes with handlers and parameters  
483. Using extractors for query and path parameters  
484. Parsing JSON in request bodies  
485. Sending JSON responses  
486. Adding middleware for logging and CORS  
487. Managing state with `Arc` and shared data  
488. Handling errors and creating custom responses  
489. Structuring routes with `Router::nest`  
490. Deploying Axum applications

---

## 50. Project Design and Refactoring

491. Designing a small project with modular structure  
492. Splitting code into layers (domain, service, infrastructure)  
493. Avoiding duplication with helper functions and traits  
494. Applying error handling best practices throughout  
495. Adding meaningful tests for each module  
496. Using types and enums to eliminate invalid states  
497. Ensuring separation of concerns with clear interfaces  
498. Documenting public APIs and module boundaries  
499. Refactoring legacy code with safety and confidence  
500. Planning for extension with clean architecture principles
