## 📘 Section: Testing and Debugging Concurrent Code  
### 🔹 Category: Isolating Flaky Tests in Async Code  
#### ✅ Answer 1147: Isolating flaky tests in async code

Flaky tests are tests that sometimes pass and sometimes fail. In async code, timing, race conditions, or external dependencies can cause flakiness. To isolate them:
- Write tests to be independent and isolated.
- Mock timers and external resources.
- Run tests repeatedly to detect flakiness.
- Use controlled environments like `tokio::test(flavor = "multi_thread")`.
