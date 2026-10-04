/* ============================================
   START: Mortgage Pre-Qualification Quiz
   ============================================ */
const QUIZ = [
  { q: 'What is your budget range?', options: [{ text: 'Under $2M', score: 1 }, { text: '$2M - $4M', score: 2 }, { text: '$4M - $7M', score: 3 }, { text: '$7M+', score: 4 }] },
  { q: 'When do you plan to purchase?', options: [{ text: 'Within 3 months', score: 4 }, { text: '3-6 months', score: 3 }, { text: '6-12 months', score: 2 }, { text: 'Just exploring', score: 1 }] },
  { q: 'How will you finance?', options: [{ text: 'Cash purchase', score: 4 }, { text: 'Bank loan', score: 3 }, { text: 'Partial loan', score: 2 }, { text: 'Not sure yet', score: 1 }] },
  { q: 'Preferred location type?', options: [{ text: 'Urban / City', score: 3 }, { text: 'Suburban', score: 3 }, { text: 'Nature / Rural', score: 3 }, { text: 'Coastal', score: 3 }] },
  { q: 'Primary purpose?', options: [{ text: 'Family home', score: 3 }, { text: 'Investment', score: 4 }, { text: 'Vacation property', score: 3 }, { text: 'Rental income', score: 3 }] }
];
let quizStep = 0, quizAnswers = [];
function initQuiz() { if (!document.getElementById('quiz-wrap')) return; renderQuiz(); }
function renderQuiz() {
  const wrap = document.getElementById('quiz-wrap');
  if (quizStep >= QUIZ.length) {
    const total = quizAnswers.reduce((a, b) => a + b, 0);
    const percent = Math.round((total / (QUIZ.length * 4)) * 100);
    let tier = 'Basic';
    if (percent >= 85) tier = 'Pre-Approved';
    else if (percent >= 65) tier = 'Strong';
    else if (percent >= 45) tier = 'Moderate';
    wrap.innerHTML = `<div style="text-align:center;"><div style="font-size:4rem;margin-bottom:1rem;">🎉</div><h2>You're ${tier}!</h2><p class="text-muted" style="margin:1rem 0 2rem;">Based on your answers, we've found plots that match your profile.</p><a href="plots.html" class="btn btn--primary btn--lg" style="margin-top:2rem;">Explore Matching Plots →</a></div>`;
    return;
  }
  const step = QUIZ[quizStep];
  wrap.innerHTML = `<div class="quiz-progress">${QUIZ.map((_, i) => `<div class="quiz-progress__dot ${i < quizStep ? 'done' : ''}"></div>`).join('')}</div><div class="quiz-question"><p class="eyebrow">Question ${quizStep + 1} of ${QUIZ.length}</p><h3>${step.q}</h3></div><div class="quiz-options">${step.options.map((o, i) => `<button class="quiz-option" data-i="${i}">${o.text}</button>`).join('')}</div><div class="quiz-nav">${quizStep > 0 ? '<button class="btn btn--outline-dark" id="quiz-back">← Back</button>' : '<span></span>'}<span></span></div>`;
  wrap.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => { quizAnswers[quizStep] = step.options[+btn.dataset.i].score; quizStep++; renderQuiz(); });
  });
  const back = document.getElementById('quiz-back');
  if (back) back.addEventListener('click', () => { quizStep--; quizAnswers.pop(); renderQuiz(); });
}
document.addEventListener('DOMContentLoaded', initQuiz);
/* ============================================
   END: Mortgage Pre-Qualification Quiz
   ============================================ */