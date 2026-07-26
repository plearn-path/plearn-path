export const prerequisites = {
  integer_basics: [],
  integer_addition: ["integer_basics"],
  integer_subtraction: ["integer_addition"],
  integer_multiplication: ["integer_subtraction"]
};

export const nextConcept = {
  integer_basics: "integer_addition",
  integer_addition: "integer_subtraction",
  integer_subtraction: "integer_multiplication"
};

export const questions = [
  { id: "q-basics-1", conceptId: "integer_basics", difficulty: 0.2, prompt: "จำนวนใดอยู่ทางซ้ายของ 0 หนึ่งช่อง?", answer: "-1", hint: "ดูที่เส้นจำนวน: ค่าทางซ้ายของศูนย์เป็นจำนวนลบ" },
  { id: "q-basics-2", conceptId: "integer_basics", difficulty: 0.35, prompt: "จำนวนใดมากกว่า: -2 หรือ -5?", answer: "-2", hint: "บนเส้นจำนวน ค่าที่อยู่ทางขวาจะมีค่ามากกว่า" },
  { id: "q-add-1", conceptId: "integer_addition", difficulty: 0.35, prompt: "-8 + 3 = ?", answer: "-5", hint: "เริ่มที่ -8 แล้วขยับไปทางขวา 3 ช่อง" },
  { id: "q-add-2", conceptId: "integer_addition", difficulty: 0.55, prompt: "-12 + 7 = ?", answer: "-5", hint: "การบวกจำนวนบวกคือการขยับไปทางขวาบนเส้นจำนวน" },
  { id: "q-sub-1", conceptId: "integer_subtraction", difficulty: 0.55, prompt: "5 - 9 = ?", answer: "-4", hint: "เปลี่ยนการลบ 9 เป็นการบวก -9 แล้วค่อยคิด" },
  { id: "q-sub-2", conceptId: "integer_subtraction", difficulty: 0.72, prompt: "-6 - 8 = ?", answer: "-14", hint: "เมื่อเอาจำนวนลบไปลบอีกจำนวนหนึ่ง ให้ขยับไปทางซ้าย" },
  { id: "q-multiply-1", conceptId: "integer_multiplication", difficulty: 0.7, prompt: "-4 × 3 = ?", answer: "-12", hint: "จำนวนลบคูณจำนวนบวกจะได้จำนวนลบ" }
];
