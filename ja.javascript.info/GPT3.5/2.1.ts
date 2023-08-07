function showAlert() {
  alert("I'm JavaScript!");
}

function runTests() {
  try {
    showAlert();
    console.log("テストが成功しました！");
  } catch (error) {
    console.error("テストが失敗しました:", error);
  }
}
runTests();