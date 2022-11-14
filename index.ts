function foo1(singleObjString: string): unknown {
  return JSON.parse(singleObjString); // Return type for JSON.parse is any.
}

async function foo2(singleObjString: string): Promise<unknown> {
  await fetch('http://example.com/');
  return JSON.parse(singleObjString); // Return type for JSON.parse is any.
}
