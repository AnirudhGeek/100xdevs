//optional
function greetPersonOptional(name?: string) {
  const upperCase = name ? name?.toUpperCase : "Guest";
  return `Hello ${upperCase}`;
}

console.log(greetPersonOptional("Anirudh"));
console.log(greetPersonOptional());

//default
function greetPersonDefalt(name: string = "Anirudh") {
  return `Hello ${name}`;
}
console.log(greetPersonDefalt());


function connect(host: string, port ?: number, secure?: boolean) {
    const p = port ?? 80    //i.e if port is available then port otherwise 80
    const sec = secure ?? false     //i.e if secure is available then secure otherwise false

    return `Connect ${host} at ${p} is ${sec}`
}

console.log(connect("localhost"))
