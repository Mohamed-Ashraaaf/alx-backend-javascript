export default async function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = await mathFunction();
    queue.push(result);
  } catch (err) {
    queue.push(String(err));
  }

  queue.push('Guardrail was processed');

  return queue;
}
