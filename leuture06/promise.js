const promise = new Promise((resolve, reject) => {
    const res = false;
    if (res) {
        resolve("Promise resolved successfully!");
    } else {
        reject(Error("Promise rejected!"));
    }
});
promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
)
