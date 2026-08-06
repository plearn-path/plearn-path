export const prerequisites = {
  functions_basics: [],
  linear_functions: ["functions_basics"],
  quadratic_functions: ["linear_functions"],
  calculus_basics: ["quadratic_functions"]
};

export const nextConcept = {
  functions_basics: "linear_functions",
  linear_functions: "quadratic_functions",
  quadratic_functions: "calculus_basics"
};

export const questions = [
  {
    id: "q-function-1",
    conceptId: "functions_basics",
    difficulty: 0.25,
    prompt: "กำหนด f(x) = 2x + 3 แล้ว f(4) มีค่าเท่าไร?",
    answer: "11",
    hint: "แทน x = 4 ลงในนิพจน์ 2x + 3 แล้วคำนวณทีละขั้น"
  },
  {
    id: "q-function-2",
    conceptId: "functions_basics",
    difficulty: 0.4,
    prompt: "กำหนด g(x) = x² - 1 แล้ว g(-3) มีค่าเท่าไร?",
    answer: "8",
    hint: "ระวัง: (-3)² มีค่าเป็นบวก 9"
  },
  {
    id: "q-linear-1",
    conceptId: "linear_functions",
    difficulty: 0.45,
    prompt: "เส้นตรงผ่านจุด (1, 2) และ (3, 6) มีความชันเท่าไร?",
    answer: "2",
    hint: "ใช้สูตรความชัน: (y₂ - y₁) / (x₂ - x₁)"
  },
  {
    id: "q-linear-2",
    conceptId: "linear_functions",
    difficulty: 0.6,
    prompt: "กราฟ y = 3x - 5 ตัดแกน x ที่ค่า x เท่าไร?",
    answer: "5/3",
    hint: "จุดตัดแกน x มี y = 0 ลองแทน 0 ลงในสมการ"
  },
  {
    id: "q-quadratic-1",
    conceptId: "quadratic_functions",
    difficulty: 0.65,
    prompt: "สมการ x² - 5x + 6 = 0 มีคำตอบรากที่น้อยกว่าเท่าไร?",
    answer: "2",
    hint: "แยกตัวประกอบเป็น (x - ?)(x - ?) = 0 โดยหาสองจำนวนที่คูณกันได้ 6 และบวกกันได้ -5"
  },
  {
    id: "q-quadratic-2",
    conceptId: "quadratic_functions",
    difficulty: 0.78,
    prompt: "จุดยอดของกราฟ y = (x - 2)² + 1 คือพิกัดใด?",
    answer: "(2,1)",
    hint: "รูป y = (x - h)² + k มีจุดยอดที่ (h, k)"
  },
  {
    id: "q-calculus-1",
    conceptId: "calculus_basics",
    difficulty: 0.85,
    prompt: "อนุพันธ์ของ f(x) = 3x² คืออะไร?",
    answer: "6x",
    hint: "ใช้กฎกำลัง: อนุพันธ์ของ axⁿ คือ a × n × xⁿ⁻¹"
  }
];
