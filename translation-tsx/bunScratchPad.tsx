const a = {
  get "a-1"() {
    return "good";
  },
  get "b-1"() {
    return <>a-1: {a["a-1"]}</>;
  }
}

console.log(a["b-1"]);