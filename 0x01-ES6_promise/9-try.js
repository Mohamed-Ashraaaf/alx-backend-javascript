export default async function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = await mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  }

  queue.push('Guardrail was processed');

  return queue;
}
