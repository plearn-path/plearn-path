const DATABASE = "plearn-path";
const STORE = "question-cache";

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function cacheQuestion(question: unknown) {
  const database = await openDatabase();
  database.transaction(STORE, "readwrite").objectStore(STORE).put(question, "next-question");
}

export async function getCachedQuestion<T>() {
  const database = await openDatabase();
  return new Promise<T | undefined>((resolve, reject) => {
    const request = database.transaction(STORE).objectStore(STORE).get("next-question");
    request.onsuccess = () => resolve(request.result as T | undefined);
    request.onerror = () => reject(request.error);
  });
}
