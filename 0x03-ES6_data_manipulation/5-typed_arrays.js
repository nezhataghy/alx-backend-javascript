export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const Dataview = new DataView(buffer);
  try {
    Dataview.setInt8(position, value);
  } catch (error) {
    throw new Error('Position outside range');
  }

  return Dataview;
}
