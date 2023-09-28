export default async function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = await (typeof mathFunction === 'function' ? mathFunction() : mathFunction);
    queue.push(result);
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
